import React from "react";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import NavBar from "../../components/NavBar/NavBar";
import Team from "../../components/Team/Team";
import Usage from "../../components/Usage/Usage";
import Vision from "../../components/Vision/Vision";
import classes from "./index.module.css";
function Home() {
  return (
    <div className={classes.Home}>
      <div className={classes.HeaderContainer}>
        <NavBar />
        <Hero />
      </div>
      <div className={classes.Banner}>
        <div className={classes.BannerHeading}>Impact we Make in Our Story</div>
        <div className={classes.BannerDescription}>
          Tragically, the short supply of oxygen tanks and ventilators has led
          to deaths around the world over successive surges of COVID19.
        </div>
      </div>
      <Vision />
      <Usage />
      <Team />
      <Footer/>
    </div>
  );
}

export default Home;
