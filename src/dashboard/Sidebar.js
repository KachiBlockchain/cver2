import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { VscCreditCard } from "react-icons/vsc";
import { BiHome } from "react-icons/bi";
import { LuFileQuestion } from "react-icons/lu";
import { SlLogout } from "react-icons/sl";
import { CgFileDocument } from "react-icons/cg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const menus = [
    { name: "Home", link: "/", icon: BiHome },
    { name: "My Resumes", link: "/", icon: CgFileDocument },
    { name: "My Cover Letters", link: "/", icon: IoDocumentTextOutline },
    { name: "Interview Questions", link: "/", icon: LuFileQuestion, margin: true },
    { name: "Credits", link: "/", icon: VscCreditCard },
    { name: "Logout", link: "/", icon: SlLogout },
     ];

  const [open, setOpen] = useState(true);
  return (
    <>
      <div>
        <div
          className={`bg-sidebarbg mt-[95px] bg-cover bg-no-repeat h-[2850px] md:h-[1050px] ${
            open ? "w-72" : "w-16"
          } duration-500 text-[#4B68A0] px-4`}
        >
          <div className="py-3 flex justify-end">
            <HiMenuAlt3
              size={26}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>
          <div className="mt-4 flex flex-col gap-4 relative">
            {menus?.map((menu, i) => (
              <Link
                to={menu?.link}
                key={i}
                className={` ${
                  menu?.margin && "mt-5"
                } group flex items-center text-xl gap-3.5 font-medium p-2 my-2 hover:bg-white rounded-md`}
              >
                <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                <h2
                  style={{ transitionDelay: `${i + 3}00ms` }}
                  className={`whitespace-pre duration-500 ${
                    !open && " opacity-0 translate-x-28 overflow-hidden "
                  } text-[#4B68A0]`}
                >
                  {menu?.name}
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-blue-300 font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit `}
                >
                  {menu?.name}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
