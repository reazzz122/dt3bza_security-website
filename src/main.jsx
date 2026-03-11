import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home.jsx";
import Cybersecurity from "./Cybersecurity.jsx";
import CCTV from "./CCTV.jsx";
import SchoolSecurity from "./SchoolSecurity.jsx";
import Contact from "./Contact.jsx";

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
