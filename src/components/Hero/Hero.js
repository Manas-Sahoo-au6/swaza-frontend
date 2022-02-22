import React from "react";
import classes from "./Hero.module.css";
import MaskCoverImage from "../../assets/maskCover.svg";
import RightArrow from "../../assets/arrow-right-small.svg";
function Hero() {
  return (
    <div className={classes.Hero}>
      <div className={classes.LeftHeroSection}>
        <div className={"Heading"}>
          The world needs a <br />
          <span className={`Heading BlueHeading`}>Solution</span> for low oxygen
          now
        </div>
        <div className="Description">
          Swaza is the first nanofluid formulation using FDA-approved components
          to rapidly deliver oxygen to patients suffering oxygen loss.
        </div>
        <div className={classes.GetStartedButton}>
          <div>Get Started</div>
          <div>
            <img src={RightArrow} alt="right arrow" />
          </div>
        </div>
      </div>
      <div className={classes.RightHeroSection}>
        <div>
          <img src={MaskCoverImage} alt="MaskCoverImage" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
