import styles from "./Button.module.css";

function Button({ children }) {
  return <button className={styles.buttonGlobal}>{children}</button>;
}

export default Button;
