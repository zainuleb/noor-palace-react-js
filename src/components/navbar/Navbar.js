import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../buttons/Button";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link to="/" className={styles.navLogo} onClick={closeMobileMenu}>
          <img src={"./assets/navbar/logo.png"} alt="logo.png" />
        </Link>
        <div className={styles.menuIcon} onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        <ul className={`click ? ${styles.navMenuActive} : ${styles.navMenu}`}>
          <li className={styles.navItem}>
            <Link
              to="/destinations"
              className={styles.navLink}
              onClick={closeMobileMenu}
            >
              Destinations
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              to="/services"
              className={styles.navLink}
              onClick={closeMobileMenu}
            >
              Services
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              to="/restuarant"
              className={styles.navLink}
              onClick={closeMobileMenu}
            >
              Restuarant
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              to="/signin"
              className={styles.navLinkMobile}
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle="btnOut">Sign Up</Button>}
      </div>
    </nav>
  );
};

export default Navbar;
