import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import { polyfill } from "seamless-scroll-polyfill";
import Footer from "./Components/Footer/Footer";
import Photos from "./Pages/Photos/Photos";

function App() {
  useEffect(() => {
    polyfill();
  });
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photos" element={<Photos />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
