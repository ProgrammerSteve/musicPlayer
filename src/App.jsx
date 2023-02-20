import React from "react";
import { Routes, Route } from "react-router-dom";
import "./app.css";
import SongPage from "./pages/SongPage/SongPage.jsx";
const App = () => {
  return (
    <Routes>
      <Route index path="/" element={<SongPage />} />
    </Routes>
  );
};
export default App;
