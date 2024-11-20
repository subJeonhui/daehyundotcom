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

function App() {
  const location = useLocation(); // 현재 경로 정보를 가져옴
  const [clickedRoute, setClickedRoute] = useState(location.pathname); // 클릭한 경로 정보 상태

  // 경로가 변경될 때마다 clickedRoute 상태를 업데이트
  useEffect(() => {
    setClickedRoute(location.pathname);
  }, [location]);

  const showHeader = location.pathname !== '/'; // "/main"일 때 Header를 렌더링하지 않도록 설정

  return (
    <>
      {showHeader && <Header />} {/* /main 경로에서는 Header를 렌더링하지 않음 */}

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/유저게시판" onClick={() => setClickedRoute('유저게시판')} element={<Board />} />
        <Route path="/유저게시판/:id" element={<BoardDetail />} />
        <Route path="/티어" onClick={() => setClickedRoute('티어')} element={<Tier />} />
        <Route path="/우체통" onClick={() => setClickedRoute('우체통')} element={<Mail />} />
        <Route path="/환율" onClick={() => setClickedRoute('환율')} element={<Exchange />} />
        <Route path="/권엽" onClick={() => setClickedRoute('권엽')} element={<Discipline />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;