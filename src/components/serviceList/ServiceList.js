import React from "react";
import styles from "./ServiceList.module.css";

const ServiceList = () => {
  return (
    <div
      className={styles.serviceContainer}
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "./assets/home/bg3.jpg"
        })`,
      }}
    >
      <div className={styles.serviceHeader}>
        <h2 className={styles.serviceHeading}>Why Choose Us?</h2>
        <p className={styles.servicePara}>
          The health and safety of our guests is our top priority
        </p>
      </div>

      <div className={styles.serviceItemsContainer}>
        <div className={styles.serviceItemContainer}>
          <div className={styles.serviceItemText}>
            <h6 className={styles.serviceItemHeading}>Best Value for Family</h6>
            <p className={styles.serviceItemPara}>
              Cur igitur, cum de re conveniat, melius nos veriusque quam Stoici
              mallem aut expetendam.
            </p>
            <span className={styles.serviceItemPara}></span>
          </div>
        </div>

        <div className={styles.serviceItemContainer}>
          <div className={styles.serviceItemText}>
            <h6 className={styles.serviceItemHeading}>Services Priority</h6>
            <p className={styles.serviceItemPara}>
              Cur igitur, cum de re conveniat, melius nos veriusque quam Stoici
              mallem aut expetendam.
            </p>
            <span className={styles.serviceItemPara}></span>
          </div>
        </div>

        <div className={styles.serviceItemContainer}>
          <div className={styles.serviceItemText}>
            <h6 className={styles.serviceItemHeading}>Best Facilities</h6>
            <p className={styles.serviceItemPara}>
              Cur igitur, cum de re conveniat, melius nos veriusque quam Stoici
              mallem aut expetendam.
            </p>
            <span className={styles.serviceItemPara}></span>
          </div>
        </div>

        <div className={styles.serviceItemContainer}>
          <div className={styles.serviceItemText}>
            <h6 className={styles.serviceItemHeading}>Best Value for Family</h6>
            <p className={styles.serviceItemPara}>
              Cur igitur, cum de re conveniat, melius nos veriusque quam Stoici
              mallem aut expetendam.
            </p>
            <span className={styles.serviceItemPara}></span>
          </div>
        </div>

        <div className={styles.serviceItemContainer}>
          <div className={styles.serviceItemText}>
            <h6 className={styles.serviceItemHeading}>Best Value for Family</h6>
            <p className={styles.serviceItemPara}>
              Cur igitur, cum de re conveniat, melius nos veriusque quam Stoici
              mallem aut expetendam.
            </p>
            <span className={styles.serviceItemPara}></span>
          </div>
        </div>
        <div className={styles.serviceItemContainer}>
          <div className={styles.serviceItemText}>
            <h6 className={styles.serviceItemHeading}>Best Value for Family</h6>
            <p className={styles.serviceItemPara}>
              Cur igitur, cum de re conveniat, melius nos veriusque quam Stoici
              mallem aut expetendam.
            </p>
            <span className={styles.serviceItemPara}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
