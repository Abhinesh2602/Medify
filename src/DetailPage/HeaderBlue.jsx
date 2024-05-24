import styles from "./HeaderBlue.module.css";
function HeaderBlue({ children }) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.textStyles}>{children}</span>
    </div>
  );
}

export default HeaderBlue;
