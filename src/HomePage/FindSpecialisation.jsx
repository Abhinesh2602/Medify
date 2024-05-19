import styles from "./FindSpecialisation.module.css";
import dentistry from "../assets/hospFeatures/Drugstore.svg";
import Immune from "../assets/specialisation/Immune.svg";
import BloodSample from "../assets/specialisation/Blood Sample.svg";
import HeartRate from "../assets/specialisation/Heart Rate.svg";
import HeartRateMonitor from "../assets/specialisation/Heart Rate Monitor.svg";

import Stethoscope from "../assets/specialisation/Stethoscope.svg";
import XRay from "../assets/specialisation/X-Ray.svg";
import Button from "../components/Button";

function FindSpecialisation() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Find By Specialisation</div>
      <div className={styles.specilisationCards}>
        <div className={styles.specialisation__card}>
          <img
            src={dentistry}
            alt="dentistry"
            className={styles.specialisation__cardImage}
          />
          <span className={styles.specialisation__cardTitle}>Dentistry</span>
        </div>

        <div className={styles.specialisation__card}>
          <img
            src={Stethoscope}
            alt="Stethoscope"
            className={styles.specialisation__cardImage}
          />
          <span className={styles.specialisation__cardTitle}>Primary Care</span>
        </div>

        <div className={styles.specialisation__card}>
          <img
            src={HeartRate}
            alt="HeartRate"
            className={styles.specialisation__cardImage}
          />
          <span className={styles.specialisation__cardTitle}>Cardiology</span>
        </div>

        <div className={styles.specialisation__card}>
          <img
            src={HeartRateMonitor}
            alt="HeartRateMonitor"
            className={styles.specialisation__cardImage}
          />
          <span className={styles.specialisation__cardTitle}>
            MRI Resonance
          </span>
        </div>

        <div className={styles.specialisation__card}>
          <img
            src={BloodSample}
            alt="BloodSample"
            className={styles.specialisation__cardImage}
          />
          <span className={styles.specialisation__cardTitle}>Blood Test</span>
        </div>

        <div className={styles.specialisation__card}>
          <img
            src={Immune}
            alt="Immune"
            className={styles.specialisation__cardImage}
          />
          <span className={styles.specialisation__cardTitle}>Piscologist </span>
        </div>

        <div className={styles.specialisation__card}>
          <img
            src={dentistry}
            alt="Laboratory"
            className={styles.specialisation__cardImage}
          />
          <span className={styles.specialisation__cardTitle}>Laboratory </span>
        </div>

        <div className={styles.specialisation__card}>
          <img
            src={XRay}
            alt="XRay"
            className={styles.specialisation__cardImage}
          />
          <span className={styles.specialisation__cardTitle}>X-Ray </span>
        </div>
      </div>
      <Button>View All</Button>
    </div>
  );
}

export default FindSpecialisation;
