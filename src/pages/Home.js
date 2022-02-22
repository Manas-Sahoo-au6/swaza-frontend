import React from 'react'
import Hero from '../components/Hero/Hero';
import NavBar from '../components/NavBar/NavBar';
import classes from "../styles/home.module.css";
function Home() {
  return (
    <div className={classes.Home}>
        <NavBar />
        <Hero />
    </div>
  )
}

export default Home