import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Cybersecurity from "./Cybersecurity";
import CCTV from "./CCTV";
import SchoolSecurity from "./SchoolSecurity";
import Contact from "./Contact";
import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cybersecurity" element={<Cybersecurity />} />
        <Route path="/cctv" element={<CCTV />} />
        <Route path="/schools" element={<SchoolSecurity />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
