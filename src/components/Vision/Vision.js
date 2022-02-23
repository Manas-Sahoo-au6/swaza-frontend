import React from "react";
import classes from "./Vision.module.css";
import VisionImage from "../../assets/Placeholder.png";
import SolutionImage from "../../assets/Solution.png";
import Play from "../../assets/play2.svg";
import logo from "../../assets/logo1.svg";

const Vision = () => {
  return (
    <div className={classes.MainContainer}>
      <div className={classes.Vision}>
        <div className={classes.ImageContainer}>
          <img
            className={classes.VisionImage}
            src={VisionImage}
            alt="boy with"
          />
          <img className={classes.PlayImage} src={Play} alt="boy with" />
        </div>
        <div className={classes.VisionText}>
          <img
            className={classes.VisionTextImage}
            src={logo}
            alt="logo without text"
          />
          <div className={classes.VisionTextHeader}>Our Vision</div>
          <div className={classes.VisionTextDescription}>
            Tragically, the short supply of oxygen tanks and ventilators has led
            to deaths around the world over successive surges of COVID19.
          </div>
        </div>
      </div>
      <div className={classes.Solution}>
        <div className={classes.SolutionText}>
          <img
            className={classes.VisionTextImage}
            src={logo}
            alt="logo without text"
          />
          <div className={classes.SolutionHeader}>Our Solution</div>
          <div className={classes.SolutionDescription}>
            It repurposes and optimizes already existing and approved drug
            delivery components into a new nanofluid formulation that enables
            rapid oxygen exchange—even in inflamed or fluid filled lungs.
          </div>
        </div>
        <div className={classes.ImageContainer}>
          <img
            className={classes.SolutionImage}
            src={SolutionImage}
            alt="boy with"
          />
          <img className={classes.PlayImage} src={Play} alt="boy with" />
        </div>
      </div>
    </div>
  );
};

export default Vision;
