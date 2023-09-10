
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Videos from "./pages/Videos";
import Connect from "./pages/Connect";
import Photos from "./pages/Photos";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="videos" element={<Videos />} />
        <Route path="connect" element={<Connect />} />
        <Route path="photos" element={<Photos />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
