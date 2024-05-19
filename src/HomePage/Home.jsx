import { Header } from "../components/Header";
import FindSpecialisation from "./FindSpecialisation";
import Hero from "./Hero";
import OfferCards from "./OfferCards";
import MedicalSpecialist from "./MedicalSpecialist";
import PatientCaring from "./PatientCaring";
import LatestNews from "./LatestNews";

function Home() {
  const home = true;
  return (
    <div>
      <Header home={home} />
      <Hero> </Hero>
      <OfferCards />
      <FindSpecialisation />
      <MedicalSpecialist />
      <PatientCaring />
      <LatestNews />
    </div>
  );
}

export default Home;
