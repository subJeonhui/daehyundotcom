import React from 'react';
import styles from './styles/Tier.module.css';
import { useState } from 'react';


function Tier(){
    const [tier3, setTier3] = useState(0);
    const [tier4, setTier4] = useState(0);
    const [tier5, setTier5] = useState(0);
    const [tierToggled, setTierToggled] = useState(true);
    const [sale, setSale] = useState(false);

    const [needcard, setNeedcard] = useState(120);
    const [threeup, setThreeup] = useState(3000000);
    const [fourup, setFourup] = useState(3000000);

    function updateTier(){
        // 티어 값 가져오기
        const newTier3 = Number(document.querySelector('.input-tier3').value);
        const newTier4 = Number(document.querySelector('.input-tier4').value);
        let newTier5 = tier5;

        if (tierToggled) {
            newTier5 = Number(document.querySelector('.input-tier5').value);
        }

        // 티어 값 업데이트
        setTier3(newTier3);
        setTier4(newTier4);
        setTier5(newTier5);
    }

    const onReset = () => {
        setTier3(0);
        setTier4(0);
        setTier5(0);
        setNeedcard(120);
        setThreeup(3000000);
        setFourup(3000000);

    }


    const onClick = () => {
        updateTier();

        // 필요한 3티어 카드 수 계산
        let calculatedNeedcard = tierToggled
            ? Math.max(120 - tier3 - (tier4 * 4) - (tier5 * 20), 0)
            : Math.max(20 - tier3 - (tier4 * 4), 0);

        console.log(tierToggled);
        
        calculatedNeedcard = Number(calculatedNeedcard);
        console.log(calculatedNeedcard);
        console.log(calculatedNeedcard+tier3);
        // 3티어 → 4티어 강화비용 계산
        let calculatedThreeup = (calculatedNeedcard+tier3) / 4 * 100000;


        // 4티어 → 5티어 강화비용 계산
        let calculatedFourup = (((calculatedNeedcard) / 4) + tier4) / 5 * 500000;
        

        // 상태 업데이트
        setNeedcard(calculatedNeedcard);
        setThreeup(calculatedThreeup);
        setFourup(calculatedFourup);
        
        console.log(needcard);
        console.log(threeup);
        console.log(fourup);

        console.log("필요 카드:", calculatedNeedcard);
        console.log("3티어 강화 비용:", calculatedThreeup);
        console.log("4티어 강화 비용:", calculatedFourup);
    };
    



    const handleTierToggle = (con) => {
        setTierToggled(con);
    }



    return (
        <>
        <div className={styles.container}>
            <p className={styles.title}>
                티어 계산기
            </p>
        
            <select
            className={styles.tierselect}
            onChange={(e) => {
                const value = e.target.value;
                handleTierToggle(value === "6tier");
            }}
            >
            <option value="6tier">6티어</option>
            <option value="5tier">5티어</option>
            </select>
            
        <div className={styles.inputflex}>
        <p>소지 중인 3티어 카드 수</p> <input value={tier3} type="text" className={`${styles.input} input-tier3`}
        
        onChange={(e) => setTier3(Number(e.target.value))}
        
        ></input> 
        </div>

        <div className={styles.inputflex}>
        <p>소지 중인 4티어 카드 수</p> <input value={tier4} type="text" className={`${styles.input} input-tier4`}
        onChange={(e) => setTier4(Number(e.target.value))}
        ></input>
        </div>

        {tierToggled && (
            <div className={styles.inputflex}>
                <p>소지 중인 5티어 카드 수</p> 
                <input 
                    value={tier5}
                    type="text" 
                    className={`${styles.input} input-tier5`}
                    onChange={(e) => setTier5(Number(e.target.value))}
                />
            </div>
        )}
        <div className={styles.inputflex}>
            <input
            type="checkbox"
            value={sale}
            className={`${styles.checkbox}  checkbox`}
            onClick={() => {
                setSale((current) => !current);
                console.log('Checkbox clicked!');
            }}
            /> 10% 할인 테두리 적용
        </div>
        
        <div className={styles.inputflex}>
        <button className={styles.button}
        onClick={() => {
            onClick();
        }}
        >계산하기</button>
        
        <button className={styles.resetbutton}
        onClick={() => {
            onReset();
        }}
        >초기화</button>
        </div>

        <div className={styles.result}>
        </div>

            <div className={styles.resultarea}>
                <div>
                    <p>필요 3티어 카드 수</p>
                    <p>3티어 → 4티어 강화비용</p>

                    {tierToggled && (
                        <p>4티어 → 5티어 강화비용</p>
                    )}
                    {!tierToggled && (
                        <p>5티어까지 총 강화비용</p>
                    )}
                    {tierToggled && (
                        <p>6티어까지 총 강화비용</p>
                    )}
                </div>
                <div>

                {tierToggled && (
                <>
                    <p>{needcard} 개</p>
                    
                    <p>{sale ? threeup * 0.9 : threeup}루블</p>
                    
                    <p>{sale ? fourup*0.9 : fourup}루블</p>
                    <p>{sale ? 
                       (threeup + fourup + 1000000)
                        * 0.9 
                        : 
                        threeup + fourup + 1000000
                        }루블</p>
                        <p>(6티어 1장 강화비용 100만루블)</p>
                </>
                ) || (
                    <>
                                        <p>{needcard} 개</p>
                    
                    <p>{sale ? threeup * 0.9 : threeup}루블</p>

                    <p>{sale ? threeup + 500000 * 0.9 : threeup + 500000}루블</p>
                    <p>(5티어 1장 강화비용 50만루블)</p>
                    </>
                )}
                </div>
            </div>


        </div>
        </>

    )
}

export default Tier;