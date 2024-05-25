import styles from "./MedicalCenterDetails.module.css";
import correct from "../assets/DetailPage/correct.svg";
import FreeAppointment from "../assets/DetailPage/FreeAppointment.png";
import { MedicalCard } from "./MedicalCard";
import { useMedify } from "../services/MedifyContextProvider";
import formatText from "../helpers/formattext";

function MeidicalCenterDetails() {
  const { hospitals } = useMedify();

  const BookNow = true;
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.MedicalDetails}>
          <HospitalCountDetails />
          {hospitals.map((hospital, key) => (
            <MedicalCard BookNow={BookNow} hospital={hospital} key={key} />
          ))}
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
  const { hospitals, selectedCity } = useMedify();

  const hospitalCount = hospitals.length;

  // const words = selectedCity.split(" ");
  // const formattedCity = words.map(
  //   (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  // );
  // const capitalizedCity = formattedCity.join(" ");

  const capitalizedCity = formatText(selectedCity);

  return (
    <div className={styles.HospitalCountDetails}>
      <span className={styles.HospitalCountDetails_title}>
        {hospitalCount} medical centers available in {capitalizedCity}
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
