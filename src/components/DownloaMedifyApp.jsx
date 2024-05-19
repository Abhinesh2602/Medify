import styles from "./DownloaMedifyApp.module.css";
import mockup1 from "../assets/downloadMedifyApp/appmockup1.png";
import mockup2 from "../assets/downloadMedifyApp/appmockup2.png";
import arrow from "../assets/downloadMedifyApp/arrow.svg";
import googleplay from "../assets/downloadMedifyApp/downloadPlaystore.png";
import appleplay from "../assets/downloadMedifyApp/downloadAppstore.png";
import Button from "./Button";

function DownloaMedifyApp() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.mockups}>
          <img src={mockup1} alt="" className={styles.mockup2} />
          <img src={mockup2} alt="" className={styles.mockup1} />
        </div>
        <img src={arrow} alt="arrow" className={styles.arrow} />
        <div className={styles.downloadDetails}>
          <span className={styles.title}>
            Download <span className={styles.titleBlue}>Medify</span> App
          </span>
          <span className={styles.downloadSubheading}>
            Get the link to download the app
          </span>
          <div className={styles.input}>
            <span className={styles.countryCode}>+91</span>
            <input type="number" placeholder="Enter phone number" />
            <Button>Send SMS</Button>
          </div>
          <div className={styles.appLogos}>
            <img src={googleplay} alt="googleplay" className={styles.applogo} />
            <img src={appleplay} alt="appleplay" className={styles.applogo} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloaMedifyApp;
