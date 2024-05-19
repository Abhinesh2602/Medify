import Button from "../components/Button";
import styles from "./Hero.module.css";
import doctorHero from "../assets/doctorsHero.png";
import SearchSection from "./SearchSection";

function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.heroWrapper}>
          <div className={styles.heroTitlesContainer}>
            <h2>Skip the travel! Find Online</h2>
            <h1>
              Medical <span className={styles.centers}>Centers</span>
            </h1>
            <p>
              Connect instantly with a 24x7 specialist or choose to video visit
              a particular doctor.
            </p>
            <Button>Find Centers</Button>
          </div>
          <div>
            <img src={doctorHero} className={styles.heroImgs} alt="fasdf" />
          </div>
        </div>
      </div>
      <div>
        <SearchSection />
      </div>
    </div>
  );
}

export default Hero;
