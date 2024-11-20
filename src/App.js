import { Route, Routes } from "react-router-dom";
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <><Routes>
      <Route path="/" element={<Main />} />
      {/* <Route path="/footer" element={<Footer />} /> */}

    
    </Routes>
    <Footer /></>
  );
}

export default App;