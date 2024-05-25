import styles from "./MedicalCard.module.css";
import like from "../assets/DetailPage/like.svg";
import hospitalicon from "../assets/DetailPage/hospitalicon.svg";
import "react-toastify/dist/ReactToastify.css";
import { BookedDateTime, Time } from "./MedicalCard";
import formatDate from "./../helpers/formatDate";

function BookedMedicalCard({ hospitalDetails }) {
  const { city, state, address, hospitalName, hospitalRating, zipcode } =
    hospitalDetails.hospital;

  const time = hospitalDetails.time;
  const date = formatDate(hospitalDetails.date);

  return (
    <div className={styles.bookedCard}>
      <div className={styles.MedicalCardContainer}>
        <div className={styles.HospitalLocationDetailsContainer}>
          <div className={styles.HospitalLocationDetails_icon}>
            <img src={hospitalicon} alt="hopitalicon" />
          </div>
          <div className={styles.HospitalLocationDetails_wrapper}>
            <span className={styles.HospitalLocationDetails_title}>
              {hospitalName}
            </span>
            <div className={styles.HospitalLocationDetail_Container}>
              <span className={styles.HospitalLocation_Subheading}>
                {city}, {state}
              </span>
              <span className={styles.HospitalLocation_Description}>
                {address}, {zipcode}
              </span>
            </div>
            <div className={styles.HospitalOfferDetails_Container}>
              <span className={styles.HospitalLocation_Offer}>FREE</span>
              <span className={styles.HospitalLocation_OfferPriceDiscount}>
                ₹500
              </span>
              <span className={styles.HospitalLocation_OfferDescription}>
                Consultation fee at clinic
              </span>
            </div>
            <div className={styles.divider}>
              {hospitalRating !== "Not Available" ? (
                <div className={styles.HospitalLocationDetails__likeContainer}>
                  <img
                    src={like}
                    alt="like"
                    className={styles.HospitalLocationDetails__like}
                  />
                  <span>{hospitalRating}</span>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <BookedDateTime>
          <Time time={time} disableClick={false} />
          <div className={styles.bookedDate}>
            <span>{date}</span>
          </div>
        </BookedDateTime>
      </div>
    </div>
  );
}

export default BookedMedicalCard;
