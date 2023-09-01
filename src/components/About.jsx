import React from "react";

import paste from "../assets/img/Vectorpaste.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section
      id="howitworks"
      className="h-[120vh] lg:h-[70vh] lg:py-0 overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row container mx-auto justify-evenly ">
        {/* left side */}
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-delay="900"
          className="flex flex-col mt-8 lg:items-start mb-16"
        >
          <h1 className="text-[24px] py-4 flex justify-start text-start leading-[44px] text-black md:text-[60px] md:leading-tight lg:text-[40px] lg:leading-[1.2] font-bold md:tracking-[-2px]">
            How It Works
          </h1>
          <div className="flex items-end justify-start gap-x-4">
            <img src={paste} className="w-8 h-8" alt="" />
            <p className="text-black mt-4 max-w-[480px] text-[18px] text-center lg:text-left lg:leading-[1.2]">
              Paste Your Job
            </p>
          </div>
          <p className="max-w-[500px] text-[14px] mt-4 text-black">
            Jumpstart your journey to a tailored resume by simply pasting your
            job description. Our AI-powered system analyzes the requirements and
            ensures your CV aligns perfectly with the position you desire.
          </p>
        </div>
        {/* right side */}
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-delay="900"
          className="flex flex-col lg:items-center items-start justify-center"
        >
          <label className="text-black font-bold text-[20px] ">Job Title</label>
          <input
            className=" my-4 w-[400px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            type="text"
          />
          <label className="text-black font-bold text-[20px] ">
            Job Description
          </label>
          <textarea className="w-[400px] my-4 h-32 px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
          <Link to="/login">
            <button className="btn items-center justify-center btn-md my-4 bg-blue-400 rounded-[10px] hover:bg-blue-400 md:btn-lg transition-all ">
              <a href="">Create my resume</a>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
