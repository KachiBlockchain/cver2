import React from "react";
import cv from "../assets/img/Cver Designs-02 1.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section
      id="home"
      className="h-[200vh] lg:h-[120vh] flex items-center bg-hero bg-cover bg-no-repeat  lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:my-0 lg:flex-row justify-evenly items-start h-full pt-32">
          {/* left side */}
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="900"
            className="flex-1 flex flex-col justify-start items-center lg:items-start"
          >
            <h1 className="text-[40px] mb-4 flex justify-start text-center leading-[44px] text-black md:text-[60px] md:leading-tight lg:text-[40px] lg:leading-[1.2] font-bold md:tracking-[-2px]">
              Ctrl + V, that’s all you have to do
            </h1>
            <p className="text-black mb-4 max-w-[480px] text-[24px] text-center lg:text-left lg:leading-[1.2]">
              Our AI analyzes job descriptions and generates personalized CVs
              and cover letters with one click.
            </p>
            <label className="text-black font-bold text-[20px] ">
              Job Title
            </label>
            <input
              className=" my-4 w-[400px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              type="text"
            />
            <label className="text-black font-bold text-[20px] text-start items-start ">
              Job Description
            </label>
            <textarea className="w-[400px] my-4 h-32 px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
            <Link to="/login">
            <button className="btn btn-md bg-blue-800 rounded-[10px]  hover:bg-blue-400 md:btn-lg transition-all ">
              <a href="">Create my resume</a>
            </button>
            </Link>
          </div>
          {/* right side */}
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="900"
            className="flex my-8 lg:mt-0 flex-col lg:flex-row  h-full"
          >
            <div className="items-center flex justify-center">
              <img
                className="w-84 flex items-center justify-center mt-8 lg:-mt-8 lg:w-full"
                src={cv}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
