import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function SliderComponent({ images }) {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <img
              src={image}
              className="max-w-full h-auto shadow-gray-900 dark:shadow-gray-100"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
