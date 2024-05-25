import HeaderBlue from "../DetailPage/HeaderBlue";
import SearchBar from "../DetailPage/SearchBar";
import DownloaMedifyApp from "../components/DownloaMedifyApp";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import Footer from "./../components/Footer";
import HospitalDetails from "./HospitalDetails";

function MyBookingPage() {
  const mybooking = true;

  return (
    <div>
      <Header />
      <HeaderBlue>My Bookings</HeaderBlue>
      <SearchBar mybooking={mybooking} />
      <HospitalDetails />
      <DownloaMedifyApp />
      <Footer />
    </div>
  );
}

export default MyBookingPage;
