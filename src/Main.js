import { Link } from "react-router-dom";
import styles from "./Main.module.css";


function Main() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img className={styles.logo} src="./image/logo.png" alt="LOGO"/>
      </div>
      
      <img className={styles.left} src="./image/LEFT.png" alt="LEFT"/>

      <div className={styles.text}>
        <div className={styles.Big}>대현닷컴</div>
        <div className={styles.Small}>마피아42를 쉽고 간단하게</div>
        
        <Link to="/게시판">
        <button className={styles.button}>시작하기</button>
        </Link>
        <div className={styles.Small2}>대현닷컴 기능들을 하나씩 업데이트 해볼께요</div>
      </div>
      <img className={styles.right} src="./image/RIGHT.png" alt="Right"/>
    </div>
  );
}

export default Main;