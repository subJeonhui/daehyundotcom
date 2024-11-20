import React from 'react';
import styles from './Header.module.css';
import { useState } from 'react';


function Header(){
    return (
        <div className={styles.menu}>
            <div className={styles.header}>
            <a href="/" className={styles.notactive}>
                <img className={styles.logo} src="./image/logo.png" alt="LOGO"/>
                </a>
            </div>
            
            <div className={styles.menubar}>
                <a href="/상자깡" className={styles.notactive}>
                    상자깡 확률
                </a>                
                <a href="/티어" className={styles.notactive}>
                    티어 계산기
                </a>
                
                <a href="/우체통" className={styles.notactive}>
                    우체통 계산기
                </a>

                <a href="/환율" className={styles.notactive}>
                    환율 계산기
                </a>

                <a href="/권엽" className={styles.notactive}>
                    권엽 계산기
                </a>
                <a href="/유저게시판" className={styles.notactive}>
                유저게시판
                </a>

          
            </div>
        </div>
    )
}

export default Header;