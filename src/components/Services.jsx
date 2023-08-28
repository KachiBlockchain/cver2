import React from "react";
import smallCredit from "../assets/img/smallCredit.png";
const Services = () => {
  return (
    <section id="pricing" className="section bg-pricing bg-no-repeat bg-cover">
      <div className="container mx-auto">
        {/* section title */}
        <div
          data-aos="fade-up-right"
          data-aos-duration="2000"
          data-aos-delay="900"
          className="flex flex-col items-center"
        >
          <h2 className="section-title text-black ">Our Pricing Plan</h2>
          <p className="black-footer-text pb-2">Explore our Credit Pack</p>
          <p className="black-footer-text pb-2 gap-x-2 flex">
            1 <img src={smallCredit} alt="" /> = 1 CV + 1 Cover
          </p>
        </div>
        {/* item grid */}
        <div className="flex flex-col justify-center mt-16 items-center">
          <div
            data-aos="fade-down-left"
            data-aos-duration="2000"
            data-aos-delay="900"
            className=" gap-x-8 mt-4 lg:flex-row gap-y-2 grid md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center"
          >
            <div className="flex flex-col group relative my-8">
              <div className="bg-white p-8 z-10  rounded-[20px] w-[150px] h-[160px] items-center justify-center flex flex-col shadow-lg shadow-blue-400 ">
                <div className="flex flex-col group-hover:text-[#3171ED] cursor-pointer items-center justify-center text-black">
                  <img src={smallCredit} alt="" />
                  <span className="font-bold"> 5 </span> Credits <br /> ₦1000
                </div>
              </div>
              <div className="hidden items-end text-[24px] font-bold pb-2 group-hover:flex text-white h-16  justify-center bg-[#3171ED] -mt-[22px]  rounded-[20px] shadow-lg">
                Buy
              </div>
            </div>
            <div className="flex flex-col group relative my-8">
              <div className="bg-white p-8 z-10  rounded-[20px] w-[150px] h-[160px] items-center justify-center flex flex-col shadow-lg shadow-blue-400 ">
                <div className="flex flex-col group-hover:text-[#3171ED] cursor-pointer items-center justify-center text-black">
                  <img src={smallCredit} alt="" />
                  <span className="font-bold"> 10 </span> Credits <br /> ₦1800
                </div>
              </div>
              <div className="hidden items-end text-[24px] font-bold pb-2 group-hover:flex text-white h-16  justify-center bg-[#3171ED] -mt-[22px]  rounded-[20px] shadow-lg">
                Buy
              </div>
            </div>
            <div className="flex flex-col group relative my-8">
              <div className="bg-white p-8 z-10  rounded-[20px] w-[150px] h-[160px] items-center justify-center flex flex-col shadow-lg shadow-blue-400 ">
                <div className="flex flex-col group-hover:text-[#3171ED] cursor-pointer items-center justify-center text-black">
                  <img src={smallCredit} alt="" />
                  <span className="font-bold"> 25 </span> Credits <br /> ₦3500
                </div>
              </div>
              <div className="hidden items-end text-[24px] font-bold pb-2 group-hover:flex text-white h-16  justify-center bg-[#3171ED] -mt-[22px]  rounded-[20px] shadow-lg">
                Buy
              </div>
            </div>
            <div className="flex flex-col group relative my-8">
              <div className="bg-white p-8 z-10  rounded-[20px] w-[150px] h-[160px] items-center justify-center flex flex-col shadow-lg shadow-blue-400 ">
                <div className="flex flex-col group-hover:text-[#3171ED] cursor-pointer items-center justify-center text-black">
                  <img src={smallCredit} alt="" />
                  <span className="font-bold"> 50 </span> Credits <br /> ₦6500
                </div>
              </div>
              <div className="hidden items-end text-[24px] font-bold pb-2 group-hover:flex text-white h-16  justify-center bg-[#3171ED] -mt-[22px]  rounded-[20px] shadow-lg">
                Buy
              </div>
            </div>
          </div>
        </div>
        <div className="text-[24px] flex items-center justify-center my-16 font-body text-center text-black">
          {" "}
          Or{" "}
        </div>
        <div className="flex items-center justify-center drop-shadow-2xl z-10 ">
          <div
            data-aos="zoom-out"
            data-aos-duration="2000"
            className="bg-white lg:ml-20  items-center lg:-mb-16 w-[400px] lg:w-[490px] rounded-[40px] shadow-xl h-[280.786px] pt-10 text-black p-4 relative flex flex-col justify-center mb-16"
          >
            <p className="max-w-[300px] font-bold text-[24px] text-center justify-center items-center my-4 ">
              Interview Questions
            </p>
            <p className="max-w-[300px] ">
              We can generate possible interview questions to help you ace those
              interviews confidently with our AI-driven tailored questions.
              Impress employers, showcase your skills seamlessly, and secure
              interview success
            </p>
            <p className="my-8 items-center justify-center text-center">
              ₦2000
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
