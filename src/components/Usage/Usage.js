import React from "react";
import classes from "./Usage.module.css";
import VideoBanner from "../../assets/video.png";

const Usage = () => {
  return (
    <div className={classes.MainContainer}>
      <div className={classes.Container}>
        <div className={classes.Header}>
          We've created the product that will help your startup look better
        </div>
        <img className={classes.Video} src={VideoBanner} alt="video herer" />
        <div className={classes.Usage}>
          <div className={classes.UsageText}>
            <div className={classes.UsageTextHeader}>
              Asthma - Pediatric and Adult
            </div>
            <div className={classes.UsageTextDescription}>
              Startup Design Framework contains components which can easily be
              integrated into almost any design.
            </div>
          </div>
          <div className={classes.UsageText}>
            <div className={classes.UsageTextHeader}>COVID-19</div>
            <div className={classes.UsageTextDescription}>
              Startup Design Framework contains components which can easily be
              integrated into almost any design.
            </div>
          </div>
          <div className={classes.UsageText}>
            <div className={classes.UsageTextHeader}>Smoke inhalation</div>
            <div className={classes.UsageTextDescription}>
              Startup Design Framework contains components which can easily be
              integrated into almost any design.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usage;
