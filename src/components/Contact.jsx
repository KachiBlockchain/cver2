import React from "react";
import cv from "../assets/img/63doubleCv.png";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <section
      id="contact"
      className="h-[120vh] lg:h-[100vh] flex items-center bg-hero bg-cover bg-no-repeat  lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row items-start h-full pt-8">
          {/* left side */}
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="900"
            className="flex-1 flex flex-col justify-center items-start lg:items-start"
          >
            <h1 className="text-[30px] flex justify-start leading-[34px] text-black md:text-[60px] md:leading-tight lg:text-[40px] lg:leading-[1.2] font-bold md:tracking-[-2px]">
              Open doors today, with your tailored resume
            </h1>
            <p className="text-black max-w-[480px] text-[14px] p-4 text-start lg:text-left lg:leading-[1.2]">
              Craft a tailored CV with our AI Resume Builder that impresses
              recruiters and lands you exciting opportunities. Unleash your
              potential and secure the job you deserve!"
            </p>
            <Link to="/login">
              <button className="btn btn-md my-8 bg-[#3171ED] rounded-[10px] hover:bg-blue-400 md:btn-lg transition-all ">Create my resume
              </button>
            </Link>
          </div>
          {/* right side */}
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="900"
            className="flex flex-col lg:flex-row  h-full"
          >
            <div>
              <div className="">
                <img className="w-84 lg:w-full" src={cv} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
