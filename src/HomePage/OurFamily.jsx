import styles from "./OurFamily.module.css";
import lovehand from "../assets/FamilyIcons/lovehand.svg";
import drugstore from "../assets/FamilyIcons/drugstore.svg";
import hospitalg from "../assets/FamilyIcons/hospitalg.svg";
import doctorGreen from "../assets/FamilyIcons/doctorGreen.svg";
import classNames from "classnames";

function OurFamily() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <span className={styles.tagline}>
            CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
          </span>
          <span className={styles.title}>Our Families </span>
          <span className={styles.description}>
            We will work with you to develop individualised care plans,
            including management of chronic diseases. If we cannot assist, we
            can provide referrals or advice about the type of practitioner you
            require. We treat all enquiries sensitively and in the strictest
            confidence.{" "}
          </span>
        </div>

        <div className={styles.cardsContainer}>
          <div className={classNames(styles.firstCard, styles.cards)}>
            <div className={styles.cardInsights}>
              <img src={lovehand} alt="lovehand" />
              <span className={styles.metrics}>5000+</span>
              <span className={styles.metricTitle}>Happy Patients</span>
            </div>

            <div className={styles.cardInsights}>
              <img src={drugstore} className={styles.image} alt="drugstore" />
              <span className={styles.metrics}>1000+</span>
              <span className={styles.metricTitle}>Laboratories</span>
            </div>
          </div>

          <div className={styles.cards}>
            <div className={styles.cardInsights}>
              <img src={hospitalg} alt="hospitalg" />
              <span className={styles.metrics}>200+</span>
              <span className={styles.metricTitle}>Hospitals</span>
            </div>

            <div className={styles.cardInsights}>
              <img
                src={doctorGreen}
                className={styles.DoctorImage}
                alt="doctorGreen"
              />
              <span className={styles.metrics}>700+</span>
              <span className={styles.metricTitle}>Expert Doctors</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurFamily;
