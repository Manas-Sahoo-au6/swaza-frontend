import React from 'react'
import classes from "../../styles/Hero.module.css";
import MaskCoverImage from "../../assets/maskCover.svg"
function Hero() {
  return (
    <div className={classes.Hero}>
      <div className={classes.LeftHeroSection}>
        <div className={'Heading'}>
          The world needs a <br /> <span className={`Heading BlueHeading`}>Solution</span> for low oxygen now
        </div>
        <div className='Description'>
          Swaza is the first nanofluid formulation using FDA-approved components to rapidly deliver oxygen to patients suffering oxygen loss.
        </div>
        <div className={`${classes.GetStartedButton} btn-black`}>
          <div>Get Started</div>
        </div>

      </div>
      <div className={classes.RightHeroSection}>
        <div>
          <img src={MaskCoverImage} alt="MaskCoverImage" />
        </div>
      </div>
    </div>
  )
}

export default Hero