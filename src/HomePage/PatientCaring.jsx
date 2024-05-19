import styles from "./PatientCaring.module.css";
import image from "../assets/patientCaring/image.png";
import image1 from "../assets/patientCaring/image1.png";
import tick from "../assets/patientCaring/tick.svg";
import contact from "../assets/patientCaring/contact.svg";
import classNames from "classnames";

function PatientCaring() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img
            className={classNames(styles.images, styles.image2)}
            src={image}
            alt="image"
          />
          <img
            className={classNames(styles.images, styles.image1)}
            src={image1}
            alt="image1"
          />
          <div className={styles.consultationContainer}>
            <div className={styles.consultationHeading}>
              <img src={contact} alt="contact" />
              <span className={styles.consultationTitle}>
                Free Consultation
              </span>
            </div>
            <span className={styles.consultationDescription}>
              Consultation with the best
            </span>
          </div>
        </div>

        <div className={styles.textContainer}>
          <span className={styles.tagline}>
            HELPING PATIENTS FROM AROUND THE GLOBE!!
          </span>
          <span className={styles.title}>
            Patient <span className={styles.titleBlue}>Caring</span>
          </span>
          <span className={styles.description}>
            Our goal is to deliver quality of care in a courteous, respectful,
            and compassionate manner. We hope you will allow us to care for you
            and strive to be the first and best choice for healthcare.
          </span>
          <div className={styles.tickwrapper}>
            <div className={styles.tickContainer}>
              <img src={tick} alt="tick" />
              <span className={styles.point}>
                Stay Updated About Your Health
              </span>
            </div>

            <div className={styles.tickContainer}>
              <img src={tick} alt="tick" />
              <span className={styles.point}>Check Your Results Online</span>
            </div>

            <div className={styles.tickContainer}>
              <img src={tick} alt="tick" />
              <span className={styles.point}>Manage Your Appointments</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientCaring;
