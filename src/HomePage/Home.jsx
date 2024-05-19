import { Header } from "../components/Header";
import FindSpecialisation from "./FindSpecialisation";
import Hero from "./Hero";
import OfferCards from "./OfferCards";
import MedicalSpecialist from "./MedicalSpecialist";
import PatientCaring from "./PatientCaring";
import LatestNews from "./LatestNews";
import OurFamily from "./OurFamily.jsx";
import Faqs from "../components/Faqs.jsx";
import DownloaMedifyApp from "../components/DownloaMedifyApp.jsx";
import Footer from "../components/Footer.jsx";

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
      <OurFamily />
      <Faqs />
      <DownloaMedifyApp />
      <Footer />
    </div>
  );
}

export default Home;
