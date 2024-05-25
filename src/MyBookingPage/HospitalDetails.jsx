import classNames from "classnames";
import styles from "../DetailPage/MedicalCenterDetails.module.css";
import stylesHosp from "./HospitalDetails.module.css";
import FreeAppointment from "../assets/DetailPage/FreeAppointment.png";
import { useMedify } from "../services/MedifyContextProvider";
import BookedMedicalCard from "../DetailPage/BookedMedicalCard";

function HospitalDetails() {
  const { bookedHospitalAppointmentDetails } = useMedify();

  const hospitalDetails = true;

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.MedicalDetails}>
          {bookedHospitalAppointmentDetails.map((hosp) => (
            <BookedMedicalCard key={hosp.id} hospitalDetails={hosp} />
          ))}
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
