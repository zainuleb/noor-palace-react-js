import React from "react";
import styles from "./BookingForm.module.css";

const BookingForm = () => {
  return (
    <div
      className={styles.formWrapper}
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "./assets/home/transparentBg.png"
        })`,
      }}
    >
      <div className={styles.formHeadingWrap}>
        <h6 className={styles.formHeading}>
          <span>Booking Form</span>
        </h6>
        <form className={styles.formContainer}>
          <div className={styles.formControl}>
            <div className={styles.formInline}>
              <label className={styles.formLabel}>Email</label>
              <span className={styles.formIcon}>
                <i class="far fa-envelope"></i>
              </span>
              <input
                className={styles.formInput}
                type="text"
                placeholder="Your Email"
              />
            </div>
          </div>
          <div className={styles.formControl}>
            <div className={styles.formInline}>
              <label className={styles.formLabel}>Arrival</label>
              <span className={styles.formIcon}>
                <i class="fas fa-plane-arrival"></i>
              </span>
              <input
                className={styles.formInput}
                type="date"
                placeholder="m/dd/yyyy"
              />
            </div>
          </div>
          <div className={styles.formControl}>
            <div className={styles.formInline}>
              <label className={styles.formLabel}>Departure</label>
              <span className={styles.formIcon}>
                <i class="fas fa-plane-departure"></i>
              </span>
              <input
                className={styles.formInput}
                type="date"
                placeholder="m/dd/yyyy"
              />
            </div>
          </div>
          <div className={styles.formControl}>
            <div className={styles.formInline}>
              <label className={styles.formLabel}>Guests</label>
              <span className={styles.formIcon}>
                <i class="fas fa-user-friends"></i>
              </span>
              <select className={styles.formSelect}>
                <option value="">Please select...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>
          <div className={styles.formControl}>
            <div className={styles.formInline}>
              <label className={styles.formLabel}>Rooms</label>
              <span className={styles.formIcon}>
                <i class="fab fa-megaport"></i>
              </span>
              <select className={styles.formSelect}>
                <option value="">Please select...</option>
                <option value="room_1">Single</option>
                <option value="room_2">Double</option>
                <option value="room_3">Primier</option>
                <option value="room_4">Deluxe</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
