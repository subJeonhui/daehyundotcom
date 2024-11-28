import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header({ setSelectedMenu }) {
    const [selected, setSelected] = useState(null); // 메뉴 선택 상태

    // 메뉴 클릭 시 상태 업데이트
    const handleMenuClick = (menuName) => {
        setSelected(menuName);  // 메뉴 이름을 상태로 저장
        setSelectedMenu(menuName); // 부모 컴포넌트로 메뉴 이름 전달
    };
    
    return (
        <div className={styles.menu}>
            <div className={styles.header}>
                <Link to="/" className={styles.notactive}>
                    <img className={styles.logo} src="./image/logo.png" alt="LOGO" />
                </Link>
            </div>

            <div className={styles.menubar}>
                <Link
                    to="/상자깡"
                    className={selected === '상자깡' ? styles.active : styles.notactive}
                    onClick={() => handleMenuClick('상자깡')}
                >
                    상자깡 확률
                </Link>                
                <Link
                    to="/티어"
                    className={selected === '티어' ? styles.active : styles.notactive}
                    onClick={() => handleMenuClick('티어')}
                >
                    티어 계산기
                </Link>

                <Link
                    to="/우체통"
                    className={selected === '우체통' ? styles.active : styles.notactive}
                    onClick={() => handleMenuClick('우체통')}
                >
                    우체통 계산기
                </Link>

                <Link
                    to="/환율"
                    className={selected === '환율' ? styles.active : styles.notactive}
                    onClick={() => handleMenuClick('환율')}
                >
                    환율 계산기
                </Link>

                <Link
                    to="/권엽"
                    className={selected === '권엽' ? styles.active : styles.notactive}
                    onClick={() => handleMenuClick('권엽')}
                >
                    권엽 계산기
                </Link>

                <Link
                    to="/유저게시판"
                    className={selected === '유저게시판' ? styles.active : styles.notactive}
                    onClick={() => handleMenuClick('유저게시판')}
                >
                    유저게시판
                </Link>

                <Link
                    to="/출석보상"
                    className={selected === '출석보상' ? styles.active : styles.notactive}
                    onClick={() => handleMenuClick('출석보상')}
                >
                    출석보상 계산기
                </Link>

                <Link
                    to="/rice"
                    className={selected === 'rice' ? styles.active : styles.notactive}
                    onClick={() => handleMenuClick('rice')}
                >
                    추석이벤트 연습 사이트
                </Link>
            </div>
        </div>
    );
}

export default Header;
