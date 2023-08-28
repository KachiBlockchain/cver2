import React from "react";
import { FiPlus } from "react-icons/fi";

import { useNavigate } from "react-router";
import { useUserAuth } from "../../context/UserAuthContext";

const CVtemplate = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <secion className="bg-[#F2F4F9] ">
     
      <div className="container mx-auto mt-32">
       

        <div className="flex flex-col justify-start  mt-32">
          <div  data-aos="fade-up-left" data-aos-duration = '2000' data-aos-delay='100'>
            <h1 className="bold-text">Select Preference</h1>
            <p>Select what you want displayed on your CV</p>
          </div>
          <hr  data-aos="fade-up-left" data-aos-duration = '2000' data-aos-delay='100' className="my-4 border-2 border-black w-96 lg:w-[1100px]" />
          {/* input boxes */}

          <div>
            <div  data-aos="fade-up-right" data-aos-duration = '2000' data-aos-delay='100'>
              <h1 className="bold-text">Experience</h1>
            </div>
            <div className="flex flex-col ">
              <div  data-aos="zoom-in" data-aos-duration = '2000' data-aos-delay='100' className="flex flex-col gap-y-2 ml-8">
                <div className="mt-4">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-indigo-600 h-5 w-5 "
                    />
                    <span className="ml-2 text-gray-700">Google Nigeria</span>
                  </label>
                </div>
                <div className="mt-4">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-indigo-600 h-5 w-5 "
                      defaultChecked={true}
                    />
                    <span className="ml-2 text-gray-700">Paystack</span>
                  </label>
                </div>
                <div className="mt-4">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-indigo-600 h-5 w-5 "
                    />
                    <span className="ml-2 text-gray-700">Zenith Bank</span>
                  </label>
                </div>
                <div className="mt-4">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-indigo-600 h-5 w-5 "
                      defaultChecked={true}
                    />
                    <span className="ml-2 text-gray-700">Chicken Republic</span>
                  </label>
                </div>
                <div className="mt-4">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-indigo-600 h-5 w-5 "
                      defaultChecked={true}
                    />
                    <span className="ml-2 text-gray-700">Mavins Records</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* Certifications */}
          <div  data-aos="zoom-in-up" data-aos-duration = '2000' data-aos-delay='100'>
            <div>
              <h1 className="bold-text">Certifications</h1>
            </div>
            <div className="flex flex-col ">
              <div className="flex flex-col gap-y-2 ml-8">
                <div className="mt-4">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-indigo-600 h-5 w-5 "
                      defaultChecked={true}
                    />
                    <span className="ml-2 text-gray-700">
                      Adobe Premiere Pro Course (Udemy)
                    </span>
                  </label>
                </div>
                <div className="mt-4">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-indigo-600 h-5 w-5 "
                      defaultChecked={true}
                    />
                    <span className="ml-2 text-gray-700">
                      Adobe Illustrator Course (Skillshare)
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* Others */}
          <div  data-aos="zoom-in-right" data-aos-duration = '2000' data-aos-delay='100'>
            <div>
              <h1 className="bold-text">Others</h1>
            </div>
            <div className="flex flex-col ">
              <div className="flex flex-col gap-y-2 ml-8">
                <div className="mt-4">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-indigo-600 h-5 w-5 "
                      defaultChecked={true}
                    />
                    <span className="ml-2 text-gray-700">
                      Portfolio / Website
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </secion>
  );
};

export default CVtemplate;
