import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Cybersecurity from "./Cybersecurity.jsx";
import CCTV from "./CCTV.jsx";
import SchoolSecurity from "./SchoolSecurity.jsx";
import Contact from "./Contact.jsx";
import DT3App from "./DT3App.jsx";
import "./styles.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cybersecurity" element={<Cybersecurity />} />
        <Route path="/cctv" element={<CCTV />} />
        <Route path="/schools" element={<SchoolSecurity />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dt3app" element={<DT3App />} />
      </Routes>
    </HashRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>
);
