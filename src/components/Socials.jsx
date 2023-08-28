import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useUserAuth } from "../context/UserAuthContext";

const Socials = () => {
  const { logOut, user, firstName } = useUserAuth();
  const [open, setOpen] = useState(false);

  const showDropDown = () => {
    setOpen(!open);
  };
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  // const userEmail = user.email

  return (
    <div className="flex flex-col items-center justify-center lg:flex-row space-y-6 lg:space-y-0 space-x-6">
      {user ? (
        <>
          {/* <p>{user}</p> */}
          <div
            className="flex items-center gap-[15px] relative"
            onClick={showDropDown}
          >
            <p className="text-[24px] text-black font-bold px-4">{firstName}</p>
            <div className="h-[50px] w-[50px] rounded-full bg-[#4e73df] cursor-pointer flex items-center justify-center relative">
              <img src={user.photoURL} className="rounded-full" alt="" />
            </div>
            {open && (
              // <div className="bg-blue-100 items-center justify-center flex flex-col border h-[120px] w-[150px] absolute bottom-[-135px] z-20 right-0 p-[20px] space-y-[10px]">
              //   <p className="cursor-pointer hover:text-[blue] font-semibold ">
              //     Profile
              //   </p>
              //   <p className="cursor-pointer hover:text-[blue] font-semibold ">
              //     Settings
              //   </p>
              //   <p
              //     onClick={handleLogout}
              //     className="cursor-pointer hover:text-[blue] font-semibold "
              //   >
              //     Log out
              //   </p>
              // </div>

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
      ) : (
        <>
          <Link to="/login">
            <button className="btn text-blue-400 hover:text-white border-2 border-blue-500 rounded-xl flex justify-center items-center">
              Login
            </button>
          </Link>
          <Link to="/login">
            <button className="btn  flex justify-center bg-blue-800 rounded-xl items-center text-white">
              Create my resume
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Socials;
