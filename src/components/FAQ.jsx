import React from "react";
import { FiPlus } from "react-icons/fi";

const FAQ = () => {
  return (
    <div data-aos="flip-right"
    data-aos-duration="2000"
    data-aos-delay="900" className="flex flex-col items-center justify-center my-16">
      <h1 className="text-[40px] flex justify-start leading-[44px] text-black md:text-[60px] md:leading-tight lg:text-[40px] lg:leading-[1.2] text-center  font-bold md:tracking-[-2px]">
        Frequently Asked Questions
      </h1>
      <p className="text-black max-w-[480px] text-[24px] text-center lg:text-left mt-4 lg:leading-[1.2]">
        Still have questions? It’s okay, we anticipated that
      </p>
      <div className="border-2 w-[400px] lg:w-[600px] h-16 items-center container bg-white mt-4 rounded-xl flex justify-between">
        <p className="text-black">What is an AI Resume Builder?</p> <FiPlus className="text-blue-800"/>
      </div>
      <div className="border-2 w-[400px] lg:w-[600px] h-16 items-center container bg-white mt-4 rounded-xl flex justify-between">
        <p className="text-black">How does the AI Resume Builder work?</p> <FiPlus className="text-blue-800"/>
      </div>
      <div className="border-2 w-[400px] lg:w-[600px] h-16 items-center container bg-white mt-4 rounded-xl flex justify-between">
        <p className="text-black">Is my data safe and secure?</p> <FiPlus className="text-blue-800"/>
      </div>
      <div className="border-2 w-[400px] lg:w-[600px] h-16 items-center container bg-white mt-4 rounded-xl flex justify-between">
        <p className="text-black">Can I edit the generated resume?</p> <FiPlus className="text-blue-800"/>
      </div>
      <div className="border-2 w-[400px] lg:w-[600px] h-16 items-center container bg-white mt-4 rounded-xl flex justify-between">
        <p className="text-black">Can I use the AI Resume Builder for multiple job applications?</p> <FiPlus className="text-blue-800"/>
      </div>
      <div className="border-2 w-[400px] lg:w-[600px] h-16 items-center container bg-white mt-4 rounded-xl flex justify-between">
        <p className="text-black">Is there a cost to use the AI Resume Builder?</p> <FiPlus className="text-blue-800"/>
      </div>
    </div>
  );
};

export default FAQ;
