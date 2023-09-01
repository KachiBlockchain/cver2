import React from "react";
import { Link } from "react-router-dom";
const Skills = () => {
  return (
    <section id="services">
      {/* CV */}
      <div className="flex flex-col items-center justify-evenly gap-x-8 lg:flex-row px-8">
        <div className="flex order-2 lg:order-1 items-center drop-shadow-2xl z-10 ">
          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="bg-white lg:ml-20   items-center lg:-mb-16 w-[400px] lg:w-[490px] rounded-xl h-[280.786px] pt-10 pl-16 text-black p-4 relative justify-center mb-16"
          >
            <p className="max-w-[300px] font-bold ">Experience</p>
            <p className="max-w-[300px] ">
              ◉ Assisted in various HR functions, including recruitment,
              onboarding, benefits administration, and performance management.
              <br />◉ Collaborated with AI
            </p>
          </div>
        </div>
        <div className="order-1 lg:order-2 my-16">
          {/* left side */}
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="flex flex-1  flex-col justify-start lg:items-start items-center lg:justify-center"
          >
            <h1 className="text-[30px] flex justify-start text-center leading-[44px] text-black md:text-[60px] md:leading-tight lg:text-[40px] lg:leading-[1.2] font-bold md:tracking-[-2px]">
              Tailored CV
            </h1>

            <p className="max-w-[500px] text-[14px] mt-4 text-black">
              Create a standout CV effortlessly with our AI-powered builder.
              Analyze your skills and experience for a personalized,
              attention-grabbing resume that reflects your uniqueness and boosts
              your chances of landing your dream job
            </p>
            <Link to="/login">
              <button className="btn mt-8 self-start btn-md bg-blue-400 rounded-[10px] hover:bg-blue-400 md:btn-lg transition-all ">
                <a href="">Create my resume</a>
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* COVER LETTER */}
      <div className="flex flex-col items-center justify-evenly mt-32 gap-x-8 lg:flex-row px-8 my-16">
        <div>
          {/* left side */}
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="flex flex-1 flex-col my-8 justify-start lg:items-start  items-center lg:order-1 order-2 lg:justify-center"
          >
            <h1 className="text-[30px] flex justify-start text-center leading-[44px] text-black md:text-[60px] md:leading-tight lg:text-[40px] lg:leading-[1.2] font-bold md:tracking-[-2px]">
              Tailored Cover letter
            </h1>

            <p className="max-w-[500px] text-[14px] mt-4 text-black">
              Impress recruiters with our Tailored Cover Letter feature. Our AI
              analyzes your CV and job description to create a compelling and
              unique cover letter that aligns perfectly with the position. Stand
              out as the ideal candidate and showcase your personality with a
              persuasive letter crafted by our intelligent system
            </p>
            <Link to="/login">
              <button className="btn mt-8 self-start btn-md bg-blue-400 rounded-[10px] hover:bg-blue-400 md:btn-lg transition-all ">
                <a href="">Make Cover Letter</a>
              </button>
            </Link>
          </div>
        </div>
        <div className="flex items-center drop-shadow-2xl z-10 ">
          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="bg-white lg:ml-20 lg:order-2 order-1 items-center lg:-mb-16 w-[400px] lg:w-[490px] rounded-xl h-[280.786px]  text-black p-4 relative justify-center my-16"
          >
            <p className="max-w-[300px] font-bold text-center my-4 ">Cover Letter</p>
            <p className="max-w-[400px] ">
              I am delighted to submit my application for the HR Manager role at
              XYZ. As a dedicated and accomplished HR Professional with a
              passion for fostering a positive work culture and driving
              organizational success,
            </p>
          </div>
        </div>
      </div>
      {/* Interview Questions  */}
      <div className="flex flex-col justify-evenly mt-32 gap-x-8 lg:flex-row px-8 my-16">
        <div className="flex items-center drop-shadow-2xl z-10 order-2 lg:order-1">
          <div
            data-aos="zoom-out"
           
            className="bg-white lg:ml-20  items-center lg:-mb-16 w-[400px] lg:w-[490px] rounded-xl h-[280.786px] text-black p-8 relative justify-center my-8"
          >
            <p className="max-w-[300px] font-bold text-center mb-4">Interview Questions</p>
            <p className="max-w-[300px] ">
              Can you describe a situation where you successfully resolved a
              complex employee relations issue? How did you approach the
              problem, and what strategies did you implement to achieve a
              positive outcome for both the employee and the organization?
            </p>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          {/* left side */}
          <div
            data-aos="fade-right"
          
            className=" flex flex-1 flex-col justify-start items-center lg:justify-center"
          >
            <h1 className="text-[30px] flex justify-center  text-center leading-[44px] text-black md:text-[60px] md:leading-tight lg:text-[40px] lg:leading-[1.2] font-bold md:tracking-[-2px]">
              Interview Questions
            </h1>

            <p className="max-w-[500px] text-[14px] mt-4 text-black">
              Ace interviews confidently with our AI-driven tailored questions.
              Impress employers, showcase your skills seamlessly, and secure
              interview success. No more jitters - just the perfect fit for the
              job
            </p>
            <Link to="/login">
              <button className="btn mt-8 self-start btn-md bg-blue-400 rounded-[10px] hover:bg-blue-400 md:btn-lg transition-all ">
                <a href="">Generate Questions</a>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
