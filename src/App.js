import { Route, Routes, useLocation, Link } from "react-router-dom";
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



  const showHeader = location.pathname !== '/'; // "/main"일 때 Header를 렌더링하지 않도록 설정

  return (
    <>
      {showHeader &&  <Header setSelectedMenu={setSelectedMenu} />} {/* /main 경로에서는 Header를 렌더링하지 않음 */}

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/티어"  element={<Tier />} />
        <Route path="/우체통" element={<Mail />} />
        <Route path="/환율" element={<Exchange />} />
        <Route path="/권엽"  element={<Discipline />} />
        <Route path="/상자깡"  element={<Gacha />} />
        <Route path="/출석보상"  element={<DailyReward />} />
        <Route path="/유저게시판"  element={<Board />} />
        <Route path="/유저게시판/:id" element={<BoardDetail />} />
      </Routes>
      <Footer />
      <Analytics />
      <></>
    </>
  );
}

export default App;