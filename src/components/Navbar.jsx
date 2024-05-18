import styles from "./Navbar.module.css";
import medifyLogo from "../assets/medifylogo.svg";
export const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <img src={medifyLogo} alt="Medify Logo" />
        </div>
        <div className={styles.logoTitle}>Medify</div>
      </div>
      <div className={styles.navItemContainer}>
        <p>Find Doctors</p>
        <p>Hospitals</p>
        <p>Medicines </p>
        <p>Surgeries</p>
        <p>Software for Provider</p>
        <p>Facilities</p>
        <button>My Bookings</button>
      </div>
    </div>
  );
};
