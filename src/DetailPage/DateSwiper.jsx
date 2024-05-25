// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import stylesBook from "./Appointment.module.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import formatDate from "./../helpers/formatDate";
import classNames from "classnames/bind";
import arrow from "../assets/AppointmentDetails/arrow.svg";
import { useMedify } from "../services/MedifyContextProvider";

export default function Dateswiper() {
  const { dates, activeDateIndex, setActiveDateIndex } = useMedify();
  const slots = [11, 12, 8, 9, 6, 3, 7];

  function handleClick(index) {
    setActiveDateIndex(index);
  }

  return (
    <div className={stylesBook.slotFullDetails}>
      <button className={`${stylesBook.arrowCircle} swiper-button-prev-custom`}>
        <img src={arrow} alt="arrow" />
      </button>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <div>
          {dates.map((date, key) => (
            <SwiperSlide key={key}>
              <div
                className={classNames(
                  stylesBook.slotContainer,
                  key === activeDateIndex && stylesBook.slotBlueActive
                )}
                onClick={() => handleClick(key)}
              >
                <span
                  className={classNames(
                    key === activeDateIndex && stylesBook.slotTitle,
                    stylesBook.slotTitle_otherDay
                  )}
                >
                  {key === 0
                    ? "Today"
                    : key === 1
                    ? "Tommorow"
                    : formatDate(date)}
                </span>
                <span className={stylesBook.slotsAvailableText}>
                  {slots[key]} slots available
                </span>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <button className={`${stylesBook.arrowCircle} swiper-button-next-custom`}>
        <img src={arrow} alt="arrow" className={stylesBook.arrowRight} />
      </button>
    </div>
  );
}
