import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper";
import "swiper/css/navigation";
import banner1 from "../../../images/banner/banner1.png";
import banner2 from "../../../images/banner/banner2.png";
import banner3 from "../../../images/banner/banner3.png";

const Banner = () => {
  return (
    <div className="w-11/12 mx-auto my-8">
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop
        autoplay
        navigation
        initialSlide={0}
      >
        <SwiperSlide>
          <img
            className=" h-58 border-8 border-gray-400 rounded-lg"
            src={banner1}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" h-58 border-8 border-gray-400 rounded-lg"
            src={banner2}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" h-58 border-8 border-gray-400 rounded-lg"
            src={banner3}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
