import DownloaMedifyApp from "../components/DownloaMedifyApp.jsx";
import Faqs from "../components/Faqs.jsx";
import Footer from "../components/Footer.jsx";
import { Header } from "../components/Header";
import HeaderBlue from "./HeaderBlue.jsx";
import MeidicalCenterDetails from "./MedicalCenterDetails.jsx";
import SearchBar from "./SearchBar.jsx";
import { ToastContainer } from "react-toastify";
import styles from "./DetailPage.module.css";
import "react-toastify/dist/ReactToastify.css";
import classNames from "classnames/bind";

function DetailPage() {
  return (
    <div>
      <Header />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
