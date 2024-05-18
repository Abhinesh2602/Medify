import styles from "./Header.module.css";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.message}>
        The health and well-being of our patients and their health care team
        will always be our priority, so we follow the best practices for
        cleanliness.
      </div>
      <Navbar />
    </div>
  );
};
