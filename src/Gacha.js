import React, { useState, useEffect } from "react";
import styles from "./Gacha.module.css";

// 쿠키에서 값을 읽는 함수
const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
};

// 쿠키에 값을 저장하는 함수
const setCookie = (name, value, days) => {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // days 만큼 유효한 쿠키
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
};

function Gacha() {
    const [selectedGrade, setSelectedGrade] = useState("2500");
    const [items, setItems] = useState([]);
    const [totalEquipProbability, setTotalEquipProbability] = useState(0); // equip 확률 합계를 위한 상태 추가
    const [checkedItems, setCheckedItems] = useState(new Set()); // 선택된 아이템을 추적하는 상태 추가

    // grade에 따라 데이터를 가져오는 함수
    const fetchData = async (grade) => {
        try {
            const response = await fetch(`/확률/${grade}.json`);
            const data = await response.json();
            setItems(data.items || []);  // items 데이터를 상태로 저장
        } catch (error) {
            console.error("데이터를 불러오는 데 실패했습니다:", error);
        }
    };
    
    // selectedGrade 변경 시 해당 데이터를 가져오는 effect
    useEffect(() => {
        fetchData(selectedGrade); // selectedGrade가 바뀔 때마다 데이터 다시 불러오기
    }, [selectedGrade]);

    // 쿠키에서 grade와 체크된 아이템들 복원
    useEffect(() => {
        const savedGrade = getCookie("selectedGrade");
        const savedCheckedItems = getCookie("checkedItems");
        
        if (savedGrade) {
            setSelectedGrade(savedGrade);
        }
        if (savedCheckedItems) {
            setCheckedItems(new Set(savedCheckedItems.split(",")));
        }
    }, []);

    // equip 확률의 아이템들 확률 합산 (체크된 아이템 제외)
    useEffect(() => {
        const equipProbabilitySum = items
            .filter(item => item.equip === true) // equip이 true인 아이템들 필터링
            .reduce((sum, item) => {
                // 체크된 아이템은 제외하고 확률 합산
                if (!checkedItems.has(item.name)) {
                    return sum + item.chance;
                }
                return sum;
            }, 0);
        setTotalEquipProbability(equipProbabilitySum); // 확률 합계를 상태에 저장
    }, [items, checkedItems]); // items와 checkedItems가 변경될 때마다 계산

    // Grade 변경 핸들러
    const handleGradeChange = (e) => {
        const newGrade = e.target.value;
        setSelectedGrade(newGrade);
        setCookie("selectedGrade", newGrade, 7); // 7일 동안 유지되는 쿠키 저장
    };

    // 체크박스 상태 변경 핸들러
    const handleCheckboxChange = (e, itemName) => {
        const newCheckedItems = new Set(checkedItems);
        if (e.target.checked) {
            newCheckedItems.add(itemName); // 아이템 체크됨
        } else {
            newCheckedItems.delete(itemName); // 아이템 체크 해제됨
        }
        setCheckedItems(newCheckedItems);
        setCookie("checkedItems", Array.from(newCheckedItems).join(","), 7); // 7일 동안 유지되는 쿠키 저장
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>상자깡 확률</h1>

            <select
                className={styles.selectbox}
                value={selectedGrade}
                onChange={handleGradeChange}
            >
                <option value="2500R">2500루블</option>
                <option value="150">150루나</option>
                <option value="750">750루나</option>
                <option value="Legend">패키지상자</option>
            </select>

            <h2>장착템 확률 합계: {totalEquipProbability.toFixed(4)}%</h2>
            <div className={styles.gachaContainer}>
                <table className={styles.gacha}>
                    <thead>
                        <tr>
                            <th>선택</th>
                            <th>아이템</th>
                            <th>확률</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    {item.equip && (
                                        <input
                                            type="checkbox"
                                            name="gacha"
                                            value={item.name}
                                            checked={checkedItems.has(item.name)} // 체크 상태 설정
                                            onChange={(e) => handleCheckboxChange(e, item.name)} // 체크박스 변경 시 처리
                                        />
                                    )}
                                </td>
                                <td>{item.name}</td>
                                <td>{item.chance}%</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Gacha;