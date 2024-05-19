import styles from "./LatestNews.module.css";
import Detox from "../assets/LatestNews/Detox.png";
import Rebecca from "../assets/doctors/rebecca.png";

function LatestNews() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <span className={styles.subHeading}>Blog & News</span>
          <span className={styles.title}>Read Our Latest News</span>
        </div>

        <div className={styles.news_Cards}>
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
    </div>
  );
}

const NewsCard = () => {
  return (
    <div className={styles.news_Card}>
      <img src={Detox} alt="Detox" className={styles.newsImage} />
      <div className={styles.cardInfo}>
        <div className={styles.cardCatagoryDetails}>
          <span className={styles.cardCatagory}>Medical</span>
          <span className={styles.cardCatagoryDetails__divider}></span>
          <span className={styles.cardCatagory}>March 31, 2022</span>
        </div>

        <span className={styles.cardDescription}>
          6 Tips To Protect Your Mental Health When You’re Sick
        </span>

        <div className={styles.profileContainer}>
          <img src={Rebecca} className={styles.doctorProfile} alt="" />
          <span className={styles.doctorName}>Rebecca Lee</span>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
