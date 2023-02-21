import React from "react";
import { Routes, Route } from "react-router-dom";
import "./app.css";
import SongPage from "./pages/SongPage/SongPage.jsx";
import Home from "./pages/home/Home.jsx";

const App = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/song" element={<SongPage />} />
    </Routes>
  );
};
export default App;
