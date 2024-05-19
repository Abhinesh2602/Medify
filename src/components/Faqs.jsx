import styles from "./Faqs.module.css";
import happypatients from "../assets/faqs/happypatient.png";
import plus from "../assets/faqs/plus.svg";
import heartinhand from "../assets/faqs/heartinhand.svg";
import smiling from "../assets/faqs/smiling.svg";

function Faqs() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <span className={styles.subHeading}>Get Your Answer </span>
          <span className={styles.title}>Frequently Asked Questions</span>
        </div>

        <div className={styles.infoContainer}>
          <div className={styles.imageContainer}>
            <img
              src={happypatients}
              alt="happypatients"
              className={styles.happypatients}
            />

            <div className={styles.heartImageContainer}>
              <img src={heartinhand} alt="" className={styles.heartImage} />
            </div>

            <div className={styles.happyContainer}>
              <img src={smiling} alt="smiling" className={styles.smileImage} />
              <div className={styles.happyContainerFlex}>
                <span className={styles.happyContainerTitle}>84k+</span>
                <span className={styles.happyContainerSubheading}>
                  HappyPatients
                </span>
              </div>
            </div>
          </div>
          <div className={styles.questionsContainer}>
            <Question>Why choose our medical for your family?</Question>
            <Question>Why we are different from others??</Question>
            <Question>Trusted & experience senior care & love</Question>
            <Question>How to get appointment for emergency cases?</Question>
          </div>
        </div>
      </div>
    </div>
  );
}
function Question({ children }) {
  return (
    <div className={styles.question}>
      <span>{children}</span>
      <img src={plus} alt="plus" />
    </div>
  );
}

export default Faqs;
