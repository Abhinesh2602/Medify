import { toast } from "react-toastify";
import generateDates from "../helpers/generateDates";
import getData from "./api";
import { createContext, useContext, useEffect, useState } from "react";
import formatDate from "./../helpers/formatDate";
import { v4 as uuid4 } from "uuid";
import sampleTestObj from "../helpers/data";

const MedifyContext = createContext();

const MedifyProvider = ({ children }) => {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [activeDateIndex, setActiveDateIndex] = useState(0);
  const [hospitals, setHospitals] = useState([]);
  const [bookedHospital, setBookedHospital] = useState("");
  const [
    bookedHospitalAppointmentDetails,
    setBookedHospitalAppointmentDetails,
  ] = useState([]);

  const [bookedHospitalTime, setBookedHospitalTime] = useState("");

  const [book, setBook] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null); // Add this line

  const dates = generateDates(7);

  useEffect(() => {
    getData(setStates, "/states");
  }, []);

  useEffect(() => {
    if (book && bookedHospital && bookedHospitalTime) {
      const hospitalDetails = {
        id: uuid4(),
        date: dates[activeDateIndex],
        city: selectedCity,
        state: selectedState,
        hospital: bookedHospital,
        time: bookedHospitalTime,
      };

      setBookedHospitalAppointmentDetails((prevDetails) => [
        ...prevDetails,
        hospitalDetails,
      ]);

      toast.success(` Booked on ${formatDate(dates[activeDateIndex])}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    setBook(false);
  }, [
    book,
    bookedHospital,
    bookedHospitalTime,
    dates,
    activeDateIndex,
    selectedCity,
    selectedState,
  ]);

  useEffect(() => {
    if (selectedState !== "") getData(setCities, `/cities/${selectedState}`);
  }, [selectedState]);

  return (
    <MedifyContext.Provider
      value={{
        states,
        selectedState,
        setSelectedState,
        selectedCity,
        setSelectedCity,
        cities,
        hospitals,
        setHospitals,
        dates,
        activeDateIndex,
        setActiveDateIndex,
        bookedHospitalAppointmentDetails,
        setBookedHospitalAppointmentDetails,
        book,
        setBook,
        bookedHospitalTime,
        setBookedHospitalTime,
        setBookedHospital,
        selectedTime,
        setSelectedTime,
      }}
    >
      {children}
    </MedifyContext.Provider>
  );
};

const useMedify = () => {
  const context = useContext(MedifyContext);
  if (context === undefined) {
    throw new Error("Context used outside the provider");
  }
  return context;
};

export { MedifyProvider, useMedify };
