import React from "react";
import styles from "./Mail.module.css";


function Mail() {
    // useState로 현재 우체통 칸과 목표 우체통 칸을 저장합니다.
    const [price, setPrice] = React.useState(42);
    const [price2, setPrice2] = React.useState(1002);
    const [ruble, setRuble] = React.useState(0);
    // onClick 함수를 만들어서 현재 우체통 칸과 목표 우체통 칸을 가져옵니다.
    const onClick = () => {
        setRuble(50 * (Number(price2) - Number(price)) * (Number(price) + Number(price2) - 74));
    }

    const options = [];
    for (let i = 42; i <= 4242; i += 10) {
      options.push(i);
    }
  
    return (
      <div className={styles.container}>
        <p className={styles.title}>우체통 계산기</p>
  
        <div className={styles.inputflex}>
          <p>현재 우체통 칸</p>
          <select
          onChange={(e) => setPrice(e.target.value)}
           className={styles.selectbox} id="mail1">
            {options.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
  
        <div className={styles.inputflex}>
          <p>목표 우체통 칸</p>
          <select 
          onChange={(e) => setPrice2(e.target.value)}
          className={styles.selectbox} id="mail2" defaultValue ="1002">
            {options.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>

        <button className={styles.button}
        onClick={() => {
            onClick();
        }}
        >계산하기</button>

            <div className={styles.result}>
            </div>

            <div className={styles.resultarea}>
                <div>
                    <p>필요 루블</p>
                </div>
                <div>
                    <p>{ruble/10000}만 루블({ruble})</p>
                </div>
            </div>

      </div>
    );
  }
  
  export default Mail;