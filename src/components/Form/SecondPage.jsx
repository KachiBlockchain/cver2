import React from "react";
import { FiPlus } from "react-icons/fi";
const SecondPage = () => {
  return (
    <secion className="bg-[#F2F4F9]">
      

      <div  data-aos="zoom-in-left" data-aos-duration = '2000' data-aos-delay='900' className="flex flex-col justify-center items-center mt-32">
        <div>
          <h1 className="bold-text">Personal details</h1>
        </div>
        <hr className="my-4 border-2 border-black w-[1300px]" />
        {/* input boxes */}

        <div>
          <div className="flex flex-col ">
            <div className="flex flex-col lg:flex-row gap-x-8">
              <div>
                <div className="mt-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="inputBox"
                  >
                    First name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="inputBox"
                    type="text"
                    placeholder="Enter Your First name"
                  />
                </div>
              </div>
              <div>
                <div className="mt-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="inputBox"
                  >
                    Last name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="inputBox"
                    type="text"
                    placeholder="Enter your Last name"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-x-8">
              <div>
                <div className="mt-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="inputBox"
                  >
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="inputBox"
                    type="text"
                    placeholder="Enter your Email"
                  />
                </div>
              </div>
              <div>
                <div className="mt-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="inputBox"
                  >
                    Phone number
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="inputBox"
                    type="text"
                    placeholder="Enter your Phone number"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="inputBox"
              >
                Location/Address
              </label>
              <input
                className="shadow appearance-none border rounded w-64 lg:w-[543px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="inputBox"
                type="text"
                placeholder="Enter your Location/Address"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Education */}
      <div  data-aos="zoom-in-right" data-aos-duration = '2000' data-aos-delay='900' className="flex flex-col justify-center items-center my-8">
        <div>
          <h1 className="bold-text">Education</h1>
        </div>
        <hr className="my-4 border-2 border-black w-[1300px]" />
        {/* input boxes */}

        <div>
          <div className="flex flex-col ">
            <div className="flex flex-col lg:flex-row gap-x-8">
              <div>
                <div className="mt-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="inputBox"
                  >
                    School
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="inputBox"
                    type="text"
                    placeholder="Enter Your School"
                  />
                </div>
              </div>
              <div>
                <div className="mt-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="inputBox"
                  >
                    Degree
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="inputBox"
                    type="text"
                    placeholder="Enter your Degree"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-x-8">
              <div>
                <div className="mt-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="inputBox"
                  >
                    Location
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="inputBox"
                    type="text"
                    placeholder="Enter your Location"
                  />
                </div>
              </div>
              <div>
                <div className="mt-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="inputBox"
                  >
                    Period
                  </label>
                  <div className="flex gap-x-4">
                    <input
                      className="shadow appearance-none border rounded w-[119px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="inputBox"
                      type="date"
                      placeholder="Start"
                    />
                    <input
                      className="shadow appearance-none border rounded w-[119px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="inputBox"
                      type="date"
                      placeholder="End"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="textarea"
              >
                Description
              </label>
              <textarea
                className="shadow appearance-none border rounded w-64 lg:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="textarea"
                rows="4"
                placeholder="Enter your text"
              ></textarea>
            </div>
            {/* plue Icon with Add edution  */}
            <div className="flex gap-x-4 items-center">
              <div className="rounded-full flex items-center justify-center bg-blue-200 w-[40px] h-[40px]">
                <FiPlus />
              </div>
              <p>Add Education</p>
            </div>
          </div>
        </div>
      </div>
      {/* Experience */}
      <div  data-aos="zoom-in-left" data-aos-duration = '2000' data-aos-delay='900' className="flex flex-col justify-center items-center my-8">
        <div>
          <h1 className="bold-text">Experience</h1>
        </div>
        <hr className="my-4 border-2 border-black w-[1300px]" />
        {/* input boxes */}

        <div>
          <div className="flex flex-col ">
            <div className="flex flex-col lg:flex-row gap-x-8">
              <div>
                <div className="mt-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="inputBox"
                  >
                    Job title
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="inputBox"
                    type="text"
                    placeholder="Enter Your Job title"
                  />
                </div>
              </div>
              <div>
                <div className="mt-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="inputBox"
                  >
                    Compay
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="inputBox"
                    type="text"
                    placeholder="Enter your Compay"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-x-8">
              <div>
                <div className="mt-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="inputBox"
                  >
                    Location
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="inputBox"
                    type="text"
                    placeholder="Enter your Location"
                  />
                </div>
              </div>
              <div>
                <div className="mt-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="inputBox"
                  >
                    Period
                  </label>
                  <div className="flex gap-x-4">
                    <input
                      className="shadow appearance-none border rounded w-[119px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="inputBox"
                      type="date"
                      placeholder="Start"
                    />
                    <input
                      className="shadow appearance-none border rounded w-[119px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="inputBox"
                      type="date"
                      placeholder="End"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="textarea"
              >
                Description
              </label>
              <textarea
                className="shadow appearance-none border rounded w-64 lg:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="textarea"
                rows="4"
                placeholder="Enter your text"
              ></textarea>
            </div>
            {/* plue Icon with Add edution  */}
            <div className="flex gap-x-4 items-center">
              <div className="rounded-full flex items-center justify-center bg-blue-200 w-[40px] h-[40px]">
                <FiPlus />
              </div>
              <p>Add experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Optional */}
      <div  data-aos="zoom-in-right" data-aos-duration = '2000' data-aos-delay='900' className="flex flex-col justify-center items-center my-8">
        <div>
          <h1 className="bold-text">Optional</h1>
        </div>
        <hr className="my-4 border-2 border-black w-[1300px]" />
        {/* input boxes */}

        <div>
          <div className="flex flex-col ">
            <div className="flex flex-col gap-y-8">
              <div className="mt-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="inputBox"
                >
                  Linkedin profile
                </label>
                <input
                  className="shadow appearance-none border rounded w-64 lg:w-[543px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="inputBox"
                  type="text"
                  placeholder="Enter your Linkedin profile"
                />
              </div>
              <div className="mt-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="inputBox"
                >
                  Portfolio or website
                </label>
                <input
                  className="shadow appearance-none border rounded w-64 lg:w-[543px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="inputBox"
                  type="text"
                  placeholder="Enter your Portfolio or website"
                />
              </div>
              <div className="mt-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="textarea"
                >
                  Certifications
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-64 lg:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="textarea"
                  rows="4"
                  placeholder="Enter your certificates"
                ></textarea>
              </div>
              <button className="bg-blue-400 px-8 py-2 self-start text-white ">Next</button>
            </div>
          </div>
        </div>
      </div>
    </secion>
  );
};

export default SecondPage;
