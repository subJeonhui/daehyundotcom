import React from "react";
import styles from "./styles/Discipline.module.css";

function Discipline() {
    const [amount, setAmount] = React.useState(0);
    
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>권엽 계산기</h1>

            <div className={styles.inputflex}>
                <p>명성</p>
                <input type="text" className={styles.input}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                ></input>
            </div>
            
            <div className={styles.result}></div>
            <div className={styles.resultarea}>
                <p>권엽 참감 명성</p>
                <p>{Math.round(20 + 1.5 * Math.sqrt(amount))}</p>
                
            </div>

        </div>
    )
}

export default Discipline;