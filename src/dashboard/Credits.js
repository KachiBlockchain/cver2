import React, { useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import smallCredit from "../assets/img/smallCredit.png";

import credit from "../assets/img/credit2.png";
import { Link, Navigate } from "react-router-dom";

const Credits = () => {
  const [open, setOpen] = useState(false);
  const showDropDown = () => {
    setOpen(!open);
  };
  const handleLogout = async () => {
    try {
      await logOut();
      Navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const {logOut, user, firstName } = useUserAuth();
  return (
    <div className=" bg-white">
      <div className="flex justify-between items-center">
        <div className="py-[20px]">
          <h1 className="text-black text-[28px] my-4 font-bold">Credits</h1>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-evenly gap-2 pt-2">
          <img className="w-4 h-4 " src={credit} alt="" />
          <p>25 </p>
          <p> Credits</p>
          <img src="" alt="" />

          {
            <>
              {/* <p>{user}</p> */}
              <div
                className="flex flex-col lg:flex-row items-center  relative"
                onClick={showDropDown}
              >
                <div className="h-[50px] w-[50px] rounded-full bg-[#4e73df] cursor-pointer flex items-center justify-center relative">
                  <img src={user.photoURL} className="rounded-full" alt="" />
                </div>
                <p className="text-[14px] text-black font-semibold px-4">
                  {firstName}
                </p>
                {open && (
                  <div className="relative inline-block group">
                    <div className="absolute top-[60px] -left-[300px] flex flex-col  bg-white border border-gray-300 shadow-md p-8 rounded-md items-center justify-center ">
                      <img
                        src={user.photoURL}
                        alt="Sample Image"
                        className="rounded-full my-10 cursor-pointer"
                        id="imageId"
                      />
                      <ul className="list-none items-center justify-center flex flex-col text-black text-[18px]">
                        <li className="hover:bg-gray-100 px-3 py-2 cursor-pointer">
                          {user.displayName}
                        </li>
                        <li className="hover:bg-gray-100 px-3 py-2 cursor-pointer">
                          {user.email}
                        </li>
                        <li className="hover:bg-gray-100 px-3 py-2 cursor-pointer">
                          <Link to="/dashboard">Dashboard </Link>
                        </li>
                        <li
                          onClick={handleLogout}
                          className="hover:bg-gray-100 px-3 py-2 cursor-pointer"
                        >
                          Logout
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </>
          }
        </div>
      </div>
      <section id="pricing" className="section bg-pricing bg-no-repeat bg-cover">
      <div className="container mx-auto">
        {/* section title */}
        <div
          className="flex flex-col items-center"
        >
          <h2 className="section-title text-black ">Our Pricing Plan</h2>
          <p className="black-footer-text pb-2">Explore our Credit Pack</p>
          <p className="black-footer-text pb-2 gap-x-2 flex">
            1 <img className="w-4 h-4" src={smallCredit} alt="" /> = 1 CV + 1
            Cover
          </p>
          <p className="black-footer-text pb-2 gap-x-2 flex">
            2 <img className="w-4 h-4" src={smallCredit} alt="" /> = 1 Set of
            Interview Questions
          </p>
        </div>
        {/* item grid */}
        <div className="flex flex-col justify-center mt-4 items-center">
          <div className=" gap-x-8 mt-4 lg:flex-row gap-y-2 grid grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center"
          >
            <div className="flex flex-col group relative my-8">
              <div className="bg-white p-8 z-10  rounded-[20px] w-[150px] h-[160px] items-center justify-center flex flex-col shadow-lg shadow-blue-400 ">
                <div className="flex flex-col group-hover:text-[#3171ED] transition ease-in-out duration-700 cursor-pointer items-center justify-center text-black">
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
                <div className="flex flex-col group-hover:text-[#3171ED] transition ease-in-out duration-700 cursor-pointer items-center justify-center text-black">
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
                <div className="flex flex-col group-hover:text-[#3171ED] transition ease-in-out duration-700 cursor-pointer items-center justify-center text-black">
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
                <div className="flex flex-col group-hover:text-[#3171ED] transition ease-in-out duration-700 cursor-pointer items-center justify-center text-black">
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
      </div>
    </section>
    </div>
  );
};

export default Credits;
