import { Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactGA from "react-ga";
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

const TRACKING_ID = "G-5VFJNJPHTE"; // Google Analytics Tracking ID

function App() {
  const location = useLocation(); // 현재 경로 정보를 가져옴
  const [selectedMenu, setSelectedMenu] = useState(null); // 선택된 메뉴 상태

  const showHeader = location.pathname !== '/'; // "/" 경로에서 Header를 렌더링하지 않음

  useEffect(() => {
    // Google Analytics 초기화
    ReactGA.initialize(TRACKING_ID);

    // 페이지 변경 시마다 Google Analytics에 페이지 뷰를 기록
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

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

export default App;
