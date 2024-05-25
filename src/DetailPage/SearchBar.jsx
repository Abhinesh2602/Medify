import classNames from "classnames";
import styles from "./SearchBar.module.css";
import { useMedify } from "../services/MedifyContextProvider";
import { useEffect, useState } from "react";
import getData from "../services/api";

function SearchBar({ mybooking }) {
  const {
    states,
    selectedState,
    setSelectedState,
    cities,
    setSelectedCity,
    selectedCity,
    setHospitals,
  } = useMedify();

  useEffect(() => {
    if (selectedCity && selectedCity) {
      getData(
        setHospitals,
        `/data?state=${selectedState}&city=${selectedCity}`
      );
    }
  }, [selectedCity, selectedState]);

  function handleSubmit(e) {
    e.preventDefault();
    if (selectedState && selectedCity) {
      navigate(`/detail`);
    } else {
      alert("Please select state and city");
    }
  }

  if (mybooking)
    return (
      <div className={styles.wrapper}>
        <div className={styles.mybookingwrapper}>
          <div
            className={classNames(styles.container, styles.mybookingContainer)}
          >
            <form
              action="submit"
              className={classNames(
                styles.formContainer,
                styles.formMybookingHosp
              )}
              onSubmit={handleSubmit}
            >
              <div className={styles.inputWrapper}>
                <input
                  type="text"
                  placeholder="Search By Hospital"
                  className={styles.cityInput}
                />
              </div>
              <button type="submit" className={styles.buttonSearch}>
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    );

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <form
          action="submit"
          className={styles.formContainer}
          onSubmit={handleSubmit}
        >
          <div className={styles.inputWrapper}>
            <select
              className={styles.stateInput}
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
              className={styles.cityInput}
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
          <button className={styles.buttonSearch}>Search</button>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
