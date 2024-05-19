import Button from "../components/Button";
import styles from "./SearchSection.module.css";
import doctor from "../assets/hospFeatures/Doctor.svg";
import Ambulance from "../assets/hospFeatures/Ambulance.svg";
import Hospital from "../assets/hospFeatures/Hospital.svg";
import Capsule from "../assets/hospFeatures/Capsule.svg";
import drugstore from "../assets/hospFeatures/Drugstore.svg";
import classNames from "classnames";

function SearchSection() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.itemContainer}>
        <form action="" className={styles.formContainer}>
          <div className={styles.inputWrapper}>
            <input type="text" className={styles.input} placeholder="State" />
          </div>
          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              type="text"
              name=""
              id=""
              placeholder="City"
            />
          </div>
          <Button>Search</Button>
        </form>

        <div className={styles.detailsContainer}>
          <h3>You may be looking for</h3>
          <div className={styles.hospFeatures}>
            <div className={styles.featureBox}>
              <img src={doctor} alt="Doctor" className={styles.featureIcon} />
              <div className={styles.featureTitle}>Doctors</div>
            </div>
            <div className={styles.featureBox}>
              <img
                src={drugstore}
                alt="drugstore"
                className={styles.featureIcon}
              />
              <div className={styles.featureTitle}>Labs</div>
            </div>
            <div
              className={classNames(styles.featureBox, styles.featureBoxActive)}
            >
              <img
                src={Hospital}
                alt="Hospital"
                className={styles.featureIcon}
              />
              <div
                className={classNames(
                  styles.featureTitle,
                  styles.featureTitleActive
                )}
              >
                Hospitals
              </div>
            </div>
            <div className={styles.featureBox}>
              <img src={Capsule} alt="Capsule" className={styles.featureIcon} />
              <div className={styles.featureTitle}>Capsule</div>
            </div>
            <div className={styles.featureBox}>
              <img
                src={Ambulance}
                alt="Ambulance"
                className={styles.featureIcon}
              />
              <div className={styles.featureTitle}>Ambulance</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
