import React from 'react';
import styles from './Header.module.css';
import { useState } from 'react';


function Header(){
    return (
        <div className={styles.menu}>
            <div className={styles.header}>
                <img className={styles.logo} src="./image/logo.png" alt="LOGO"/>
            </div>
            
            <div className={styles.menubar}>
            <a href="/" className={styles.notactive}>
                    메인
                </a>
                
                <a href="/6tier" className={styles.notactive}>
                    티어
                </a>
                
                <a href="/Mail" className={styles.notactive}>
                    우체통
                </a>

          
            </div>
        </div>
    )
}

export default Header;