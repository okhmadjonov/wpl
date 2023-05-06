import React from "react";
import "./Home.scss";
import Banner from "./components/Banner/Banner";
import Recap from "./components/Recap/Recap";
import Footer from "../../components/Footer/Footer";
import Members from "./components/Members/Members";
const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Recap />
      <Members />
      <Footer />
    </div>
  );
};

export default Home;
