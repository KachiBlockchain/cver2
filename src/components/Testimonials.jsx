import React from "react";
import TestimonialSlider from "./TestimonialSlider";

const Testimonials = () => {
  return (
    <section data-aos="flip-left"
    data-aos-duration="2000"
    data-aos-delay="900" id="testimonials" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title text-black before:content-testimonials relative before:absolute before:opacity-40 before:-top[2rem] before:-left-64 before:hidden before:lg:block">
          What our users say
          </h2>
          <p className="max-w-[400px] text-[20px] font-bold my-4 text-black">Don’t just take our word for it. Over 100+ people trust us</p>
        </div>
        <TestimonialSlider />
      </div>
    </section>
  );
};

export default Testimonials;
