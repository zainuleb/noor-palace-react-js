import React from "react";
import Card from "../card/Card";
import styles from "./CardCollection.module.css";

const CardCollection = () => {
  return (
    <div className={styles.cardsCollection}>
      <h2>Check out these EPIC Destinations</h2>
      <div className={styles.cardsContainer}>
        <div className={styles.cardsWrapper}>
          <div className={styles.cardItems}>
            <Card
              src="./assets/home/1.jpg"
              content="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <Card
              src="./assets/home/2.jpg"
              content="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </div>
          <div className={styles.cardItems}>
            <Card
              src="./assets/home/3.jpg"
              content="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />
            <Card
              src="./assets/home/4.jpg"
              content="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/products"
            />
            <Card
              src="./assets/home/5.jpg"
              content="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-up"
            />
            <Card
              src="./assets/home/6.jpeg"
              content="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-up"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCollection;
