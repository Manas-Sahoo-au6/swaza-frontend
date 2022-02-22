import React from 'react'
import classes from "../../styles/NavBar.module.css";
import Logo from "../../assets/logo.svg";
import HumbergerIcon from "../../assets/humbergerIcon.svg"
function NavBar() {
  return (
    <div className={classes.NavBar}>
        <div>
          <img src={Logo} alt="swaza-logo" />
        </div>
        <div>
          <img src={HumbergerIcon} alt="HumbergerIcon" />

        </div>
    </div>
  )
}

export default NavBar