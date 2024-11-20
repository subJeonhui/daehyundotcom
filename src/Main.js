import styles from "./Main.module.css";


function Main() {
  return (
    

    <div className={styles.container}>
      <img className={styles.left} src="./image/LEFT.png" alt="LEFT"/>

      <div className={styles.text}>
        <div className={styles.Big}>마피아 42</div>
        <div className={styles.Small}>대현닷컴 에서 쉽고 간단하게</div>
        <button className={styles.button}>시작하기</button>
      </div>
      <img className={styles.right} src="./image/RIGHT.png" alt="Right"/>
    </div>
  );
}

export default Main;