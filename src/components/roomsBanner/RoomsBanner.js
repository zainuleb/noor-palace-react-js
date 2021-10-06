import React from "react";
import { Link } from "react-router-dom";
import styles from "./RoomsBanner.module.css";

const RoomsBanner = () => {
  return (
    <>
      <div className={styles.headerContainer}>
        <h2 className={styles.headerTitle}>
          Choose the Best Rooms &amp; Make Reservation
        </h2>
        <p className={styles.headerSub}>Maximize your time in Kalam</p>
      </div>

      <div
        className={styles.roomsContainer}
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "./assets/home/bg1.jpg"
          })`,
        }}
      >
        <div className={styles.bgOverlay}></div>

        <div className={styles.roomsContainer}>
          <div className={styles.roomItemContainer}>
            <div className={styles.roomItemImage}>
              <canvas width="290" height="180"></canvas>
              <img src="./assets/room/1.jpeg" alt="" />
            </div>
            <div className={styles.roomTextContainer}>
              <div className={styles.roomTextHeader}>
                <h4 className={styles.roomTextHeading}>Single Room</h4>
                <p className={styles.roomTextSub}>Guest room, 1 King</p>
              </div>
              <span className={styles.roomPriceTag}>from Rs5000/night</span>
              <ul className={styles.roomFeatureList}>
                <li>
                  <span className={styles.checkIcon}>
                    <i class="far fa-check-square"></i>
                  </span>
                  This room features lounge
                </li>
                <li>
                  <span className={styles.checkIcon}>
                    <i class="far fa-check-square"></i>
                  </span>
                  High-Speed Wi-Fi
                </li>
                <li>
                  <span className={styles.checkIcon}>
                    <i class="far fa-check-square"></i>
                  </span>
                  Business services, for a fee
                </li>
              </ul>
              <div className={styles.roomItemFooter}>
                <Link to="/" className={styles.roomFooterLink}>
                  Read more
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.roomItemContainer}>
            <div className={styles.roomItemImage}>
              <canvas width="290" height="180"></canvas>
              <img src="./assets/room/2.jpeg" alt="" />
            </div>
            <div className={styles.roomTextContainer}>
              <div className={styles.roomTextHeader}>
                <h4 className={styles.roomTextHeading}>Double Room</h4>
                <p className={styles.roomTextSub}>Deluxe King Guest Room</p>
              </div>
              <span className={styles.roomPriceTag}>from Rs15000/night</span>
              <ul className={styles.roomFeatureList}>
                <li>
                  <span className={styles.checkIcon}>
                    <i class="far fa-check-square"></i>
                  </span>
                  Newspaper available
                </li>
                <li>
                  <span className={styles.checkIcon}>
                    <i class="far fa-check-square"></i>
                  </span>
                  Evening turndown service
                </li>
                <li>
                  <span className={styles.checkIcon}>
                    <i class="far fa-check-square"></i>
                  </span>
                  Air-conditioned
                </li>
              </ul>
              <div className={styles.roomItemFooter}>
                <Link to="/" className={styles.roomFooterLink}>
                  Read more &raquo;
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.roomItemContainer}>
            <div className={styles.roomTextContainer}>
              <div className={styles.roomTextHeader}>
                <h4 className={styles.roomTextHeading}>Premiere Room</h4>
                <p className={styles.roomTextSub}>Junior Suite</p>
              </div>
              <span className={styles.roomPriceTag}>from Rs5000/night</span>
              <ul className={styles.roomFeatureList}>
                <li>
                  <span className={styles.checkIcon}>
                    <i class="far fa-check-square"></i>
                  </span>
                  Windows, floor to ceiling
                </li>
                <li>
                  <span className={styles.checkIcon}>
                    <i class="far fa-check-square"></i>
                  </span>
                  Windows, soundproof
                </li>
                <li>
                  <span className={styles.checkIcon}>
                    <i class="far fa-check-square"></i>
                  </span>
                  Plug-In High Tech room
                </li>
              </ul>
              <div className={styles.roomItemFooter}>
                <Link to="/" className={styles.roomFooterLink}>
                  Read more &raquo;
                </Link>
              </div>
            </div>
            <div className={styles.roomItemImage}>
              <canvas width="290" height="180"></canvas>
              <img src="./assets/room/3.jpeg" alt="" />
            </div>
          </div>
          <div className={styles.roomItemContainer}>
            <div className={styles.roomTextContainer}>
              <div className={styles.roomTextHeader}>
                <h4 className={styles.roomTextHeading}>Royal Suite</h4>
                <p className={styles.roomTextSub}>Presidential Suite</p>
              </div>
              <span className={styles.roomPriceTag}>from Rs50000/night</span>
              <ul className={styles.roomFeatureList}>
                <li>
                  <span className={styles.checkIcon}>
                    <i class="far fa-check-square"></i>
                  </span>
                  Cable/satellite
                </li>
                <li>
                  <span className={styles.checkIcon}>
                    <i class="far fa-check-square"></i>
                  </span>
                  Business services, for a fee
                </li>
                <li>
                  <span className={styles.checkIcon}>
                    <i class="far fa-check-square"></i>
                  </span>
                  Wired Internet, for a fee
                </li>
              </ul>
              <div className={styles.roomItemFooter}>
                <Link to="/" className={styles.roomFooterLink}>
                  Read more &raquo;
                </Link>
              </div>
            </div>
            <div className={styles.roomItemImage}>
              <canvas width="290" height="180"></canvas>
              <img src="./assets/room/4.jpeg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomsBanner;
