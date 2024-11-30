import React, {useState} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import styles from './styles/Header.module.css';
import HeaderItemLink from "./HeaderItemLink.jsx";
import Container from "./base/Container.jsx";
import Logo from '../assets/images/Logo.svg?react';

function Header() {
    const {pathname} = useLocation();
    const path = decodeURIComponent(pathname);

    const headerItem = [
        {href: "/상자깡", title: "상자깡 확률"},
        {href: "/티어", title: "티어 계산기"},
        {href: "/우체통", title: "우체통 계산기"},
        {href: "/환율", title: "환율 계산기"},
        {href: "/권엽", title: "권엽 계산기"},
        {href: "/출석보상", title: "출석보상 계산기"},
        // {href: "/유저게시판", title: "유저게시판"}
    ]

    return (
        <div className={styles.menu}>

            <Container className={styles.header}>
                <Link to="/">
                    <Logo className={styles.logo}/>
                </Link>
            </Container>
            
            <div className={styles.menubar}>
            <Container direction={'row'} gap={20}>
                {headerItem.map((item, index) => (
                    <HeaderItemLink path={path} {...item}/>
                ))}
            </Container>
            </div>
            
            {/* <a href='rice'  className={selected === 'rice' ? styles.active : styles.notactive}
                onClick={() => handleMenuClick('rice')}
                >
                    추석이벤트 연습 사이트
                </a> */}

            {/* <Link
                    to="/rice"
                    className={selected === 'rice' ? styles.active : styles.notactive}
                    onClick={() => handleMenuClick('rice')}
                >
                    추석이벤트 연습 사이트
                </Link> */}
        </div>
    );
}

export default Header;
