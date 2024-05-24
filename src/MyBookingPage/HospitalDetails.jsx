import classNames from "classnames";
import MedicalCard from "../DetailPage/MedicalCard";
import styles from "../DetailPage/MedicalCenterDetails.module.css";
import stylesHosp from "./HospitalDetails.module.css";
import FreeAppointment from "../assets/DetailPage/FreeAppointment.png";

function HospitalDetails() {
  const hospitalDetails = true;
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.MedicalDetails}>
          <MedicalCard hospitalDetails={hospitalDetails} />
          <MedicalCard hospitalDetails={hospitalDetails} />
          <MedicalCard hospitalDetails={hospitalDetails} />
        </div>
        <div>
          <img
            src={FreeAppointment}
            className={classNames(
              styles.FreeAppointment,
              stylesHosp.HospitalDetailsCard
            )}
            alt="FreeAppointment"
          />
        </div>
      </div>
    </div>
  );
}

export default HospitalDetails;
