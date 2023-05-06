import React from "react";
import "./Home.scss";
import Banner from "./components/Banner/Banner";
import Recap from "./components/Recap/Recap";
const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Recap />
    </div>
  );
};

export default Home;
