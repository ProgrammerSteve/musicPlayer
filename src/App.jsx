import React from "react";
import { Routes, Route } from "react-router-dom";
import "./app.css";
import Home from "./containers/home/Home.jsx";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route index path="/" element={<Home />} />
      </Routes>
    </div>
  );
};
export default App;
