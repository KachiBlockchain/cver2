import React, { useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import add from "../assets/img/addicon.png";
import hrmanager from "../assets/img/hrmanagerrole.png";
import credit from "../assets/img/credit2.png";
import { Link, Navigate } from "react-router-dom";

const Questions = () => {
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
          <h1 className="text-black text-[28px] my-4 font-bold">Interview Questions</h1>
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
      <div className="flex">
        <img src={add} alt="" />
        <img className="w-[200px] h-[290px]" src={hrmanager} alt="" />
      </div>
    </div>
  );
};

export default Questions;
