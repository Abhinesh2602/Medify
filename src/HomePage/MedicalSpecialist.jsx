import styles from "./MedicalSpecialist.module.css";
import centerCircle from "../assets/offerSectionImgs/centercircle.svg";
import heena from "../assets/doctors/heena.png";
import Ahmad from "../assets/doctors/ahmad.png";
import haha from "../assets/doctors/haha.png.png";

function MedicalSpecialist() {
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>Our Medical Specialist</span>

      <div className={styles.medicalSpecialist__Cards}>
        <div className={styles.medicalSpecialist__Card}>
          <div className={styles.medicalSpecialist__Card_topCard}>
            <div className={styles.medicalSpecialist__Card_innerCard}>
              <img src={heena} alt="heena" className={styles.cardImage} />
            </div>
          </div>
          <div className={styles.medicalSpecialist__CardDetails}>
            <span className={styles.doctorName}>Dr. Heena Sachdeva</span>
            <span className={styles.doctorRole}>Orthopadics</span>
          </div>
        </div>

        <div className={styles.medicalSpecialist__Card}>
          <div className={styles.medicalSpecialist__Card_topCard}>
            <div className={styles.medicalSpecialist__Card_innerCard}>
              <img src={Ahmad} alt="Ahmad" className={styles.cardImage} />
            </div>
          </div>
          <div className={styles.medicalSpecialist__CardDetails}>
            <span className={styles.doctorName}>Dr. Ahmad Khan</span>
            <span className={styles.doctorRole}>Neurologist</span>
          </div>
        </div>

        <div className={styles.medicalSpecialist__Card}>
          <div className={styles.medicalSpecialist__Card_topCard}>
            <div className={styles.medicalSpecialist__Card_innerCard}>
              <img src={haha} alt="Ankur" className={styles.cardImage} />
            </div>
          </div>
          <div className={styles.medicalSpecialist__CardDetails}>
            <span className={styles.doctorName}>Dr. Ankur Sharma</span>
            <span className={styles.doctorRole}>Medicine</span>
          </div>
        </div>
      </div>

      <div className={styles.pagination}>
        <div className={styles.circle}></div>
        <img src={centerCircle} alt="" />
        <div className={styles.circle}></div>
      </div>
    </div>
  );
}

export default MedicalSpecialist;
