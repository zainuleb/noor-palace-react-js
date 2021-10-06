import React from "react";
import styles from "./Button.module.css";

const STYLES = ["btnPrim", "btnOut"];
const SIZE = ["btnMd", "btnLg"];

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  // eslint-disable-next-line
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  // eslint-disable-next-line
  const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];

  return (
    <button
      className={`${styles.btn} ${styles.checkButtonStyle} ${styles.checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
