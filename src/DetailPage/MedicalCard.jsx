import styles from "./MedicalCard.module.css";
import like from "../assets/DetailPage/like.svg";
import hospitalicon from "../assets/DetailPage/hospitalicon.svg";
import stylesBook from "./Appointment.module.css";
import greenPill from "../assets/AppointmentDetails/greenPill.svg";
import classNames from "classnames";
import { useEffect, useState } from "react";
import formattext from "./../helpers/formattext";
import Dateswiper from "./DateSwiper";
import { useMedify } from "../services/MedifyContextProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MedicalCard({ hospital }) {
  const [active, setActive] = useState(false);

  const { setBookedHospital, book } = useMedify();

  const hospitalName = hospital["Hospital Name"]
    .split(" ")
    .slice(0, 3)
    .join(" ");
  const address = hospital.Address;
  const hospitalType = hospital["Hospital Type"];
  const hospitalRating = hospital["Hospital overall rating"];
  const zipcode = hospital["ZIP Code"];
  const city = formattext(hospital.City);
  const state = hospital.State;

  useEffect(() => {
    const bookHospDetails = {
      hospitalName: hospitalName,
      address: address,
      hospitalType: hospitalType,
      hospitalRating: hospitalRating,
      zipcode: zipcode,
      city: city,
      state: state,
    };
    setBookedHospital(bookHospDetails);
  }, [book, hospital, setBookedHospital]);

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
          <BookNowContainer setActive={setActive} active={active} />
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
  const { setBook, bookedHospitalTime } = useMedify();

  function handleBook() {
    if (bookedHospitalTime) {
      setBook((book) => !book);
    } else {
      toast.error("Please Fill Details!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  return (
    <>
      <div className={stylesBook.appointmentWrapper}>
        <div className={stylesBook.borderTop}>
          <img src={greenPill} alt="" className={styles.greenPill} />
        </div>

        <Dateswiper />

        <div className={stylesBook.dayDetailsContainer}>
          <div className={stylesBook.timePeriods}>
            <span>Morning</span>
          </div>
          <div className={stylesBook.timeContainer}>
            <Time time={"11:30 AM"} />
          </div>
        </div>

        <div className={stylesBook.dayDetailsContainer}>
          <div className={stylesBook.timePeriods}>
            <span>Afternoon</span>
          </div>
          <div className={stylesBook.timeContainer}>
            <Time time={"12:00 PM"} />
            <Time time={"12:30 PM"} />
            <Time time={"01:30 PM"} />
            <Time time={"02:00 PM"} />
            <Time time={"02:30 PM"} />
          </div>
        </div>

        <div className={stylesBook.dayDetailsContainer}>
          <div className={stylesBook.timePeriods}>
            <span>Evening</span>
          </div>
          <div className={stylesBook.timeContainer}>
            <Time time={"06:00 PM"} />
            <Time time={"06:30 PM"} />
            <Time time={"07:00 PM"} />
            <Time time={"07:30 PM"} />
          </div>
        </div>
        <div className={stylesBook.BooknowbtnContainer}>
          <button className={stylesBook.BookNowBtn} onClick={handleBook}>
            Book Now
          </button>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </>
  );
}

function Time({ time, disableClick }) {
  const { selectedTime, setSelectedTime, setBookedHospitalTime } = useMedify();

  function handleClick() {
    setBookedHospitalTime(time);
    setSelectedTime(time);
  }
  const select = selectedTime === time;

  return (
    <div
      className={
        disableClick
          ? stylesBook.time
          : classNames(stylesBook.time, select && stylesBook.timeBlue)
      }
      onClick={!disableClick ? handleClick : undefined}
    >
      <span
        className={` ${stylesBook.timeText} ${
          select && stylesBook.timeBlueText
        } `}
      >
        {time}
      </span>
    </div>
  );
}

function BookedDateTime({ children }) {
  return <div className={styles.bookedContainer}>{children}</div>;
}

export { MedicalCard, BookedDateTime, Time };
