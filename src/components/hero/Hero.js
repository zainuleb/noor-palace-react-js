import React from "react";
import Button from "../buttons/Button";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <img src={"./assets/hero/banner.jpg"} alt="banner.jpg" />
      <h1>The North Awaits</h1>
      <p>What are you waiting for?</p>
      <div className={styles.heroBtns}>
        <Button className={styles.btn} buttonStyle="btnOut" buttonSize="btnLg">
          Book a Trip
        </Button>
        {/*  <Button
          className={styles.btn}
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button> */}
      </div>
    </div>
  );
};

export default Hero;
