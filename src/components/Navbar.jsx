import styles from "./Navbar.module.css";
import medifyLogo from "../assets/medifylogo.svg";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <Link to="/" className={styles.logoContainer}>
        <div className={styles.logo}>
          <img src={medifyLogo} alt="Medify Logo" />
        </div>
        <div className={styles.logoTitle}>Medify</div>
      </Link>
      <div className={styles.navItemContainer}>
        <Link to="/detail" className={styles.navItem}>
          Find Doctors
        </Link>
        <span className={styles.navItem}>Hospitals</span>
        <span className={styles.navItem}>Medicines </span>
        <span className={styles.navItem}>Surgeries</span>
        <span className={styles.navItem}>Software for Provider</span>
        <span className={styles.navItem}>Facilities</span>
        <Link to="/my-bookings" className={styles.buttonText}>
          <button className={styles.navButton}>
            <span>My Bookings</span>
          </button>
        </Link>
      </div>
    </div>
  );
};
