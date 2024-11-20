import React from 'react';
import styles from './Tier.module.css';
import { useState } from 'react';


function Tier(){
    const [tier3, setTier3] = useState(0);
    const [tier4, setTier4] = useState(0);
    const [tier5, setTier5] = useState(0);
    const [tierToggled, setTierToggled] = useState(true);
    const [sale, setSale] = useState(false);
    
    let needcard = Number(120) - Number(tier3) - Number(tier4 * 4) - Number(tier5 * 20);
    let threeup = (needcard + Number(tier3)) / 4 * 100000;
    let fourup = ((needcard + Number(tier3)) / 4 + Number(tier4)) / 5 * 500000;

    const onClick = () => {
        let needcard = Number(120) - Number(tier3) - Number(tier4 * 4) - Number(tier5 * 20);
        let threeup = (needcard + Number(tier3)) / 4 * 100000;
        let fourup = ((needcard + Number(tier3)) / 4 + Number(tier4)) / 5 * 500000;
        
        setTier3(tier3);
        setTier4(tier4);
        setTier5(tier5);
    }

    const onReset = () => {
        setTier3(0);
        setTier4(0);
        setTier5(0);
    }


    const handleTierToggle = () => {
        setTierToggled((current) => !current);
        if (!tierToggled) {
            // If toggled to false, reset tier5 to 0 when enabling input
            setTier5(0);
        }
    }



    return (
        <>
        <div className={styles.container}>
            <p className={styles.title}>
                티어 계산기
            </p>
        
        <select className={styles.tierselect}>
            <option  value="6tier"
            onClick={() => {
                handleTierToggle();
            }}>6티어</option>

            <option value="5tier"
            ocClick={() => {
                handleTierToggle();
            }}
            >5티어</option>
        </select>
        
        <div className={styles.inputflex}>
        <p>소지 중인 3티어 카드 수</p> <input value={tier3} type="text" className={styles.input}
        onChange={(e) => setTier3(e.target.value)}
        
        ></input> 
        </div>

        <div className={styles.inputflex}>
        <p>소지 중인 4티어 카드 수</p> <input value={tier4} type="text" className={styles.input}
        onChange={(e) => setTier4(e.target.value)}
        
        ></input>
        </div>
        <div className={styles.inputflex}>
        <p>소지 중인 5티어 카드 수</p> <input value={tier5} type="text" className={styles.input}
        onChange={(e) => setTier5(e.target.value)}
        // disabled={tierToggled}
        ></input>
        </div>
        <div className={styles.inputflex}>
            <p>10% 할인 테두리 적용</p>
            <input
            type="checkbox"
            value={sale}
            className={styles.checkbox}
            onClick={() => {
                setSale((current) => !current);
                console.log('Checkbox clicked!');
            }}
            /> 
        </div>
            
        <div className={styles.inputflex}>
        <button className={styles.button}
        onClick={() => {
            onClick();
        }}
        >계산하기</button>
        <button className={styles.button}
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
                    <p>4티어 → 5티어 강화비용</p>
                    <p>6티어까지 총 강화비용</p>
                </div>
                <div>
                    <p>{(Number(120) - Number(tier3) - Number(tier4) * 4 - Number(tier5) * 20)} 개</p>
                    <p>{sale ? threeup/10000*0.9 : threeup/10000}만 루블</p>
                    <p>{sale ? fourup/10000*0.9 : fourup/10000}만 루블</p>
                    <p>{sale ? (Number(threeup) + Number(fourup) + Number(1000000)) /10000 *0.9 : (Number(threeup) + Number(fourup) + Number(1000000)) /10000}만 루블</p>
                </div>
            </div>


        </div>
        </>

    )
}

export default Tier;