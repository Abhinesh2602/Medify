import HeaderBlue from "../DetailPage/HeaderBlue";
import MedicalCard from "../DetailPage/MedicalCard";
import SearchBar from "../DetailPage/SearchBar";
import DownloaMedifyApp from "../components/DownloaMedifyApp";
import { Navbar } from "../components/Navbar";
import Footer from "./../components/Footer";
import HospitalDetails from "./HospitalDetails";

function MyBookingPage() {
  const mybooking = true;
  return (
    <div>
      <Navbar />
      <HeaderBlue />
      <SearchBar mybooking={mybooking} />
      <HospitalDetails />
      <DownloaMedifyApp />
      <Footer />
    </div>
  );
}

export default MyBookingPage;
