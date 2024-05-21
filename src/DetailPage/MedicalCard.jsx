import styles from "./MedicalCard.module.css";
import like from "../assets/DetailPage/like.svg";
import hospitalicon from "../assets/DetailPage/hospitalicon.svg";
import stylesBook from "./Appointment.module.css";
import greenPill from "../assets/AppointmentDetails/greenPill.svg";
import classNames from "classnames";
import arrow from "../assets/AppointmentDetails/arrow.svg";
import { useState } from "react";

function MedicalCard({ hospitalDetails, BookNow }) {
  const [active, setActive] = useState(false);

  return (
    <div
      className={classNames(styles.MedicalCard, {
        [styles.MedicalCardFalse]: !active,
      })}
    >
      <div className={styles.MedicalCardContainer}>
        <div className={styles.HospitalLocationDetailsContainer}>
          <div className={styles.HospitalLocationDetails_icon}>
            <img src={hospitalicon} alt="hopitalicon" />
          </div>
          <div className={styles.HospitalLocationDetails_wrapper}>
            <span className={styles.HospitalLocationDetails_title}>
              Fortis Hospital Richmond Road
            </span>
            <div className={styles.HospitalLocationDetail_Container}>
              <span className={styles.HospitalLocation_Subheading}>
                Banglore, Karnataka
              </span>
              <span className={styles.HospitalLocation_Description}>
                Smilessence Center for Advanced Dentistry + 1 more
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
              <div className={styles.HospitalLocationDetails__likeContainer}>
                <img
                  src={like}
                  alt="like"
                  className={styles.HospitalLocationDetails__like}
                />
                <span>5</span>
              </div>
            </div>
          </div>
          {hospitalDetails && <BookedDateTime />}
          {BookNow && (
            <BookNowContainer setActive={setActive} active={active} />
          )}
        </div>
      </div>
      {active && <Appointment />}
    </div>
  );
}

function BookNowContainer({ setActive, active }) {
  return (
    <div className={styles.bookNowContainer}>
      <span className={styles.bookNowTitle}>Available Today</span>
      <button
        className={styles.buttonLocationDetails}
        onClick={() => setActive(!active)}
      >
        Book Free Center Visit
      </button>
    </div>
  );
}

function Appointment() {
  return (
    <>
      <div className={stylesBook.appointmentWrapper}>
        <div className={stylesBook.borderTop}>
          <img src={greenPill} alt="" className={styles.greenPill} />
        </div>

        <div className={stylesBook.slotFullDetails}>
          <button className={stylesBook.arrowCircle}>
            <img src={arrow} alt="arrow" />
          </button>
          <div
            className={classNames(
              stylesBook.slotContainer,
              stylesBook.slotBlueActive
            )}
          >
            <span className={stylesBook.slotTitle}>Today</span>
            <span className={stylesBook.slotsAvailableText}>
              11 slots available
            </span>
          </div>
          <div className={stylesBook.slotContainer}>
            <span className={stylesBook.slotTitle}>Today</span>
            <span className={stylesBook.slotsAvailableText}>
              11 slots available
            </span>
          </div>
          <div className={stylesBook.slotContainer}>
            <span className={stylesBook.slotTitle}>Today</span>
            <span className={stylesBook.slotsAvailableText}>
              11 slots available
            </span>
          </div>
          <button className={stylesBook.arrowCircle}>
            <img src={arrow} alt="arrow" className={stylesBook.arrowRight} />
          </button>
        </div>

        <div className={stylesBook.dayDetailsContainer}>
          <div className={stylesBook.timePeriods}>
            <span>Afternoon</span>
          </div>
          <div className={stylesBook.timeContainer}>
            <Time />
            <Time />
            <Time />
            <Time />
            <Time />
          </div>
        </div>
      </div>
    </>
  );
}

function Time() {
  return (
    <div className={stylesBook.time}>
      <span>12:00</span>
    </div>
  );
}

function BookedDateTime() {
  return (
    <div className={styles.bookedContainer}>
      <Time />
      <div className={styles.bookedDate}>
        <span>20 April 2024</span>
      </div>
    </div>
  );
}

export default MedicalCard;
