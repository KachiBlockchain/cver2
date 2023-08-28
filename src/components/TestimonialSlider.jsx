import React from "react";

import { testimonials } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "../swiper.css";

import { Autoplay, Pagination } from "swiper/modules";

const TestimonialSlider = () => {
  return (
    <>
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay, Pagination]}
      >
        {testimonials.map((item, index) => {
          const { authorImg, authorText, authorName, authorPosition } = item;
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col lg:flex-row gap-4 container mx-auto items-center justify-center lg:gap-32">
                <div className="w-20 h-20 lg:w-[100px] lg:h-[100px]">
                  <img className="rounded-2xl" src={authorImg} alt="" />
                </div>
                <div className="flex flex-col">
                  <h5 className="font-body text-2xl text-black mb-8 font-normal">
                    {authorText}
                  </h5>
                  <div>
                    <p className="text-lg text-blue-800">{authorName}</p>
                    {/* <p>{authorPosition}</p> */}
                    <img src={authorPosition} alt="" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default TestimonialSlider;
