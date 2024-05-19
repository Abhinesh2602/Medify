import styles from "./Footer.module.css";
import medifyLogo from "../assets/medifylogo.svg";
import facebook from "../assets/Footer/facebook.svg";
import pinterest from "../assets/Footer/pinterest.svg";
import twitter from "../assets/Footer/twitter.svg";
import youtube from "../assets/Footer/youtube.svg";
import arrow from "../assets/Footer/arrow.svg";
import { Children } from "react";

function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.socialContainer}>
          <div className={styles.logoContainer}>
            <div className={styles.logo}>
              <img src={medifyLogo} alt="Medify Logo" />
            </div>
            <div className={styles.logoTitle}>Medify</div>
          </div>

          <div className={styles.socialFlex}>
            <img src={facebook} alt="facebook" />
            <img src={pinterest} alt="pinterest" />
            <img src={twitter} alt="twitter" />
            <img src={youtube} alt="youtube" />
          </div>
        </div>

        <div className={styles.menu}>
          <MenuItem>About Us</MenuItem>
          <MenuItem>Our Pricing</MenuItem>
          <MenuItem>Our Gallery</MenuItem>
          <MenuItem>Appointment</MenuItem>
          <MenuItem>Privacy Policy</MenuItem>
        </div>

        <div className={styles.menu}>
          <MenuItem>Orthology</MenuItem>
          <MenuItem>Neurology</MenuItem>
          <MenuItem>Dental Care</MenuItem>
          <MenuItem>Opthalmology</MenuItem>
          <MenuItem>Cardiology</MenuItem>
        </div>

        <div className={styles.menu}>
          <MenuItem>About Us</MenuItem>
          <MenuItem>Our Pricing</MenuItem>
          <MenuItem>Our Gallery</MenuItem>
          <MenuItem>Appointment</MenuItem>
          <MenuItem>Privacy Policy</MenuItem>
        </div>
      </div>
      <div className={styles.sectionDivider}></div>
      <span className={styles.websiteCredits}>
        Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
      </span>
    </div>
  );
}

function MenuItem({ children }) {
  return (
    <div className={styles.menuItem}>
      <img src={arrow} alt="arrow" />
      <span className={styles.menuitemText}>{children}</span>
    </div>
  );
}

export default Footer;
