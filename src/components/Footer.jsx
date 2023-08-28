import React from "react";
import { social } from "../data";
import { FiPhoneCall, FiMail } from "react-icons/fi";

import Logo from "../assets/img/footerLogo.png";

const Footer = () => {
  return (
    <footer
      data-aos="fade-up"
      data-aos-duration="2000"
      data-aos-delay="100"
      className="  bg-[#8BC6EC] h-full lg:h-[300px] lg:flex lg:flex-col"
    >
      <div className="container mx-auto mb-[70px] lg:mb-[20px]  flex flex-col lg:flex-row justify-center lg:justify-evenly">
        <div className="flex flex-col lg:mt-12 lg:flex-row lg:justify-evenly justify-center gap-x-8 ">
          <div className="flex flex-1 flex-col  space-x-6 mb-4 lg:space-y-0 ">
            <div className="mt-4 lg:mb-2">
              <img className="" src={Logo} alt="" />
            </div>
          </div>

          <div className="flex  container mx-auto  flex-col lg:flex-row black-footer-text lg:justify-between gap-x-32 lg:mt-0">
            <div className="flex flex-col gap-y-4">
              <h1 className="text-black font-semibold mt-8">Company</h1>
              <p className="text-black">Services</p>
              <p className="text-black">Templates</p>
              <p className="text-black">Pricing</p>
            </div>
            <div className="flex flex-col gap-y-4">
              <h1 className="text-black font-semibold mt-8">Support</h1>
              <p>How it works</p>
              <p>FAQs</p>
            </div>
            <div className="flex flex-col gap-y-4">
              <h1 className="text-black font-semibold mt-8">Contact Us</h1>
              <p className="flex gap-x-2 ">
                {" "}
                <FiPhoneCall className="text-blue-800" /> (+234)8123456789
              </p>
              <p className="flex gap-x-2 ">
                {" "}
                <FiMail className="text-blue-800" /> Contact@cveresumes.com
              </p>
              {/* Social */}
              <div className="flex space-x-4 lg:space-x-6 items-center ">
                {social.map((item, index) => {
                  const { href, icon } = item;
                  return (
                    <div className="border-2 border-blue-800 w-8 h-8 lg:w-8 lg:h-8 rounded-full justify-center items-center flex">
                      <a
                        className="text-blue-600 lg:text-[20px]"
                        href={href}
                        key={index}
                      >
                        {icon}
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-4">
        <div className="lg:ml-16 container mx-auto  flex flex-col lg:flex-row  text-black text-[20px]  gap-x-4  ">
          <p> &copy; Falt Incorporated 2023</p>
          <p>Terms & Conditions</p>
          <p>Refund Policy</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
