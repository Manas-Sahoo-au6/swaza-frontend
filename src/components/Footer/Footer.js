import React from "react";
import classes from "./Footer.module.css";
import logo from "../../assets/whiteLogo.png";
import facebook from "../../assets/fa-facebook-square.svg";
import google from "../../assets/fa-google-plus.svg";
import twitter from "../../assets/fa-twitter.svg";

const Footer = () => {
  return (
    <div className={classes.MainContainer}>
      <div className={classes.Info}>
        <div className={classes.ContactContainer}>
          <img className={classes.Logo} src={logo} alt="logo" />
          <div className={classes.Contact}>
            <div className={classes.ContactUs}>Contact us @</div>
            <div className={classes.Email}>Swaza@gmail.com</div>
          </div>
        </div>
        <hr className={classes.Separator} />
        <div className={classes.Social}>
          <div className={classes.Icons}>
            <img className={classes.SocialIcon} src={facebook} alt="facebook" />
            <img className={classes.SocialIcon} src={google} alt="google" />
            <img className={classes.SocialIcon} src={twitter} alt="twitter" />
          </div>
          <div className={classes.Copyright}>
            © 2022. Swaza All Rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
