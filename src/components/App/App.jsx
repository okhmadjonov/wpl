import Home from "../../pages/Home/Home";
import Header from "../Header/Header";
import Event from "../../pages/Event/Event";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
