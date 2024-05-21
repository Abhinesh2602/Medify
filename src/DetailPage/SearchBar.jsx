import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <form action="submit" className={styles.formContainer}>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              name=""
              id=""
              placeholder="State"
              className={styles.stateInput}
            />
          </div>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              name=""
              id=""
              placeholder="City"
              className={styles.cityInput}
            />
          </div>
          <button className={styles.buttonSearch}>Search</button>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
