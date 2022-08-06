import Board from "./views/Board/Board";
import Login from "./views/Login/Login";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/board" element={<Board/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
