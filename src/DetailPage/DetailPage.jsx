import DownloaMedifyApp from "../components/DownloaMedifyApp.jsx";
import Faqs from "../components/Faqs.jsx";
import Footer from "../components/Footer.jsx";
import { Header } from "../components/Header";
import HeaderBlue from "./HeaderBlue.jsx";
import MeidicalCenterDetails from "./MedicalCenterDetails.jsx";
import SearchBar from "./SearchBar.jsx";

function DetailPage() {
  return (
    <div>
      <Header />
      <HeaderBlue />
      <SearchBar />
      <MeidicalCenterDetails />
      <Faqs />
      <DownloaMedifyApp />
      <Footer />
    </div>
  );
}

export default DetailPage;
