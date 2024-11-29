import { Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Main from './Main';
import Footer from './Footer';
import Tier from './Tier';
import Header from './Header';
import Mail from './Mail';
import Exchange from './Exchange';
import Discipline from './Discipline';
import Board from './Board';
import BoardDetail from './BoardDetail';
import Gacha from "./Gacha";
import DailyReward from "./DailyReward";
import { Analytics } from '@vercel/analytics/react';

function App() {
  const location = useLocation(); // 현재 경로 정보를 가져옴
  const [selectedMenu, setSelectedMenu] = useState(null); // 선택된 메뉴 상태

  const showHeader = location.pathname !== '/'; // "/" 경로에서 Header를 렌더링하지 않음

  useEffect(() => {
    // Google Analytics 초기화
    const script = document.createElement('script');
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-WR970GKCD2";
    script.async = true;
    document.body.appendChild(script);

    const inlineScript = document.createElement('script');
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-5VFJNJPHTE');
    `;
    document.body.appendChild(inlineScript);

    // Cleanup: 컴포넌트가 언마운트될 때 스크립트 제거
    return () => {
      document.body.removeChild(script);
      document.body.removeChild(inlineScript);
    };
  }, []);

  return (
    <>
      {showHeader && <Header setSelectedMenu={setSelectedMenu} />} {/* "/" 경로에서는 Header를 렌더링하지 않음 */}

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/티어" element={<Tier />} />
        <Route path="/우체통" element={<Mail />} />
        <Route path="/환율" element={<Exchange />} />
        <Route path="/권엽" element={<Discipline />} />
        <Route path="/상자깡" element={<Gacha />} />
        <Route path="/출석보상" element={<DailyReward />} />
        <Route path="/유저게시판" element={<Board />} />
        <Route path="/유저게시판/:id" element={<BoardDetail />} />
      </Routes>
      <Footer />
      <Analytics />
    </>
  );
}
