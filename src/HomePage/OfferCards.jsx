import styles from "./OfferCards.module.css";
import get100off from "../assets/offerSectionImgs/image 1-1.png";
import get30off from "../assets/offerSectionImgs/image 1-2.png";
import get100offonDoctor from "../assets/offerSectionImgs/image 1.png";
import centerCircle from "../assets/offerSectionImgs/centercircle.svg";

function OfferCards() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={get30off} alt="get30off" className={styles.image} />
          <img src={get100off} alt="get100off" className={styles.image} />
          <img
            src={get100offonDoctor}
            alt="get100offonDoctor"
            className={styles.image}
          />
        </div>
        <div className={styles.pagination}>
          <div className={styles.circle}></div>
          <img src={centerCircle} alt="" />
          <div className={styles.circle}></div>
        </div>
      </div>
    </div>
  );
}

export default OfferCards;
