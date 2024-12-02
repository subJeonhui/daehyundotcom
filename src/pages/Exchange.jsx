import React from "react";
import styles from "./styles/Exchange.module.css";

function Exchange() {
    const [amount, setAmount] = React.useState(0);
    const [nowExchange, setNowExchange] = React.useState(0);

    const [type, setType] = React.useState("runa");



    const handleChange = (event) => {
        setType(event.target.value);
    };

    return (
        <>
            <div className={styles.container}>
                <p className={styles.title}>환율 계산기</p>

                <select
                    className={styles.selectbox}
                    id="currency1"
                    value={type}
                    onChange={handleChange}
                >
                    <option value="runa">루나</option>
                    <option value="ruble">루블</option>
                </select>

                <div className={styles.inputflex}>
                    <p>{type === "runa" ? "구매 루나" : "구매 루블"}</p>
                    <input type="text" value={amount} className={styles.input}
                    onChange={(e) => setAmount(e.target.value)}
                    ></input>
                </div>

                <div className={styles.inputflex}>
                    <p>현재 환율</p>
                    <input type="text" className={styles.input}
                    value={nowExchange}
                    onChange={(e) => setNowExchange(e.target.value)}
                    ></input>
                </div>

                <div className={styles.result}>

                <div className={styles.resultarea}>
                <p>
                {type === "runa" ? "지불 루블" : "지불 루나(수수료포함)"}
                </p>

                <p>
                    {type === "runa" 
                        ? Math.ceil(Number(amount) / Number(nowExchange) * 1000000) 
                        : Math.ceil(Number(amount) * Number(nowExchange) / 1000000 * 135 / 100)}
                    {type === "runa" ? "루블" : "루나"}
                </p>

                </div>
                </div>

            </div>
        </>
    );
}

export default Exchange;
