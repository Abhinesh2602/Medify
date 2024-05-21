import styles from "./MedicalCenterDetails.module.css";
import correct from "../assets/DetailPage/correct.svg";
import FreeAppointment from "../assets/DetailPage/FreeAppointment.png";
import MedicalCard from "./MedicalCard";

function MeidicalCenterDetails() {
  const BookNow = true;
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.MedicalDetails}>
          <HospitalCountDetails />
          <MedicalCard BookNow={BookNow} />
          <MedicalCard BookNow={BookNow} />
          <MedicalCard BookNow={BookNow} />
          <MedicalCard BookNow={BookNow} />
          <MedicalCard BookNow={BookNow} />
        </div>
        <div>
          <img
            src={FreeAppointment}
            className={styles.FreeAppointment}
            alt="FreeAppointment"
          />
        </div>
      </div>
    </div>
  );
}

function HospitalCountDetails() {
  return (
    <div className={styles.HospitalCountDetails}>
      <span className={styles.HospitalCountDetails_title}>
        15 medical centers available in Alaska
      </span>
      <div className={styles.HospitalCountDetails__subHeading}>
        <img src={correct} alt="correct" />
        <span>
          Book appointments with minimum wait-time & verified doctor details
        </span>
      </div>
    </div>
  );
}

export default MeidicalCenterDetails;
