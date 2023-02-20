import React from "react";
import Card from "../../components/card/Card.jsx";
import SheetMusic from "../../components/sheetMusic/SheetMusic.jsx";
const Home = () => {
  return (
    <div className="bg-red-500 h-screen flex flex-col">
      <Card />
      <SheetMusic />
    </div>
  );
};

export default Home;
