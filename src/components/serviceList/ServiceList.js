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
        <div>
          <div
            class="
                  uk-card uk-card-default uk-card-body uk-box-shadow-medium
                  color2
                  impx-feature-item
                  uk-position-relative
                "
          >
            <h6 class="uk-margin-remove-top uk-margin-bottom impx-text-white">
              Services Priority
            </h6>
            <p class="uk-margin-remove impx-text-lighter">
              Cur igitur, cum de re conveniat, melius nos veriusque quam Stoici
              mallem aut expetendam.
            </p>
            <span
              data-uk-icon="icon: bell; ratio: 8"
              class="feature-icon"
            ></span>
          </div>
        </div>
        <div>
          <div
            class="
                  uk-card uk-card-default uk-card-body uk-box-shadow-medium
                  color3
                  impx-feature-item
                  uk-position-relative
                "
          >
            <h6 class="uk-margin-remove-top uk-margin-bottom impx-text-white">
              Best Facilities
            </h6>
            <p class="uk-margin-remove impx-text-lighter">
              Cur igitur, cum de re conveniat, melius nos veriusque quam Stoici
              mallem aut expetendam.
            </p>
            <span
              data-uk-icon="icon: star; ratio: 8"
              class="feature-icon"
            ></span>
          </div>
        </div>
        <div>
          <div
            class="
                  uk-card uk-card-default uk-card-body uk-box-shadow-medium
                  color4
                  impx-feature-item
                  uk-position-relative
                "
          >
            <h6 class="uk-margin-remove-top uk-margin-bottom impx-text-white">
              Satisfation Guarantee
            </h6>
            <p class="uk-margin-remove impx-text-lighter">
              Cur igitur, cum de re conveniat, melius nos veriusque quam Stoici
              mallem aut expetendam.
            </p>
            <span
              data-uk-icon="icon: heart; ratio: 8"
              class="feature-icon"
            ></span>
          </div>
        </div>

        <div>
          <div
            class="
                  uk-card uk-card-default uk-card-body uk-box-shadow-medium
                  color5
                  impx-feature-item
                  uk-position-relative
                "
          >
            <h6 class="uk-margin-remove-top uk-margin-bottom impx-text-white">
              Beatiful Panorama
            </h6>
            <p class="uk-margin-remove impx-text-lighter">
              Cur igitur, cum de re conveniat, melius nos veriusque quam Stoici
              mallem aut expetendam.
            </p>
            <span
              data-uk-icon="icon: image; ratio: 8"
              class="feature-icon"
            ></span>
          </div>
        </div>

        <div>
          <div
            class="
                  uk-card uk-card-default uk-card-body uk-box-shadow-medium
                  color6
                  impx-feature-item
                  uk-position-relative
                "
          >
            <h6 class="uk-margin-remove-top uk-margin-bottom impx-text-white">
              Enjoy Your Time
            </h6>
            <p class="uk-margin-remove impx-text-lighter">
              Cur igitur, cum de re conveniat, melius nos veriusque quam Stoici
              mallem aut expetendam.
            </p>
            <span
              data-uk-icon="icon: happy; ratio: 8"
              class="feature-icon"
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
