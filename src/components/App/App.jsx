import Home from "../../pages/Home/Home";
import Header from "../Header/Header";
import Event from "../../pages/Event/Event";
import Players from "../../pages/Players/Players";
import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
        <Route path="/Event" element={<Event/>} />
        <Route path="/Players" element={<Players/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
