import React from "react";

const Home = () => {
  return (
    <div className="bg-red-500 h-screen flex flex-col">
      <div>Navbar</div>
      <div className="flex grow min-h-0">
        <div>Filter Sidebar</div>
        <div>Body</div>
      </div>
    </div>
  );
};

export default Home;
