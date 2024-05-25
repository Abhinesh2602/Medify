import styles from "./SearchSection.module.css";
import doctor from "../assets/hospFeatures/Doctor.svg";
import Ambulance from "../assets/hospFeatures/Ambulance.svg";
import Hospital from "../assets/hospFeatures/Hospital.svg";
import Capsule from "../assets/hospFeatures/Capsule.svg";
import drugstore from "../assets/hospFeatures/Drugstore.svg";
import classNames from "classnames";
import { useMedify } from "../services/MedifyContextProvider";
import { useNavigate } from "react-router-dom";

function SearchSection() {
  const {
    states,
    selectedState,
    setSelectedState,
    cities,
    setSelectedCity,
    selectedCity,
  } = useMedify();

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (selectedState && selectedCity) {
      navigate(`/detail`);
    } else {
      alert("Please select state and city");
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.itemContainer}>
        <form
          action=""
          className={styles.formContainer}
          onSubmit={handleSubmit}
        >
          <div className={styles.inputWrapper}>
            <select
              className={styles.input}
              placeholder="State"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
            >
              <option value="" disabled>
                State
              </option>
              {states.map((state, key) => (
                <option key={key}>{state}</option>
              ))}
            </select>
          </div>

          <div className={styles.inputWrapper}>
            <select
              className={styles.input}
              placeholder="City"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              <option value="" disabled>
                City
              </option>
              {cities.map((city, key) => (
                <option key={key} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <button className={styles.inputButton} type="submit">
            Search
          </button>
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
