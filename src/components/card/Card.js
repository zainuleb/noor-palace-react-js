import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const Card = ({ src, content, label, path }) => {
  return (
    <div className={styles.cardItem}>
      <Link to={path} className={styles.cardLink}>
        <figure className={styles.cardFigure} data-category={label}>
          <img src={src} alt={label} className={styles.cardImage} />
        </figure>
        <div className={styles.cardInfo}>
          <h5 className={styles.cardText}>{content}</h5>
        </div>
      </Link>
    </div>
  );
};

export default Card;
