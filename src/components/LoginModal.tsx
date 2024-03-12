import React from "react";
import google from "@/assets/google.png";

import { IoIosClose, IoMdLogIn } from "react-icons/io";
import Facebook from "@/assets/facebook.png";
import LoginImage from "@/assets/LoginImage.jpg";
type Props = {};

export default function LoginModal({}: Props) {
  return (
    // Global Container
    <div className="flex items-center justify-center min-h-screen bg-rose-50">
      {/* Card Container */}
      <div className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
        {/* LeftSide */}
        <div className="p-6 md:p-20">
          {/* Top Content */}
          <h2 className="font-mono  mb-5 text-4xl font-bold">Login</h2>
          <p className="max-w-sm font-sans font-light font-gray">
            Login in your account to upload or download pictures
          </p>
          <input
            placeholder="Enter your email Address"
            type="text"
            className="w-full p-6 border border-gary-300 rounded-md placeholder:font-sans placeholder:font-light"
          />

          {/* Middle Content */}
          <div
            className="flex flex-col items-center justify-between mt-6 
          space-y-6 md:flex-row md:space-y-0"
          >
            <div className="font-thin text-cyan-700">Forgot password</div>

            <button className="w-full md:w-auto flex justify-center items-center p-6 space-x-4 shadow-cyan-100 hover:bg-opacity-90 hover:shadow-lg transition-all hover:-translate-y-0.5 duration-150 font-sans font-bold text-white rounded-md shadow-lg px-9 bg-cyan-700">
              <span>Next</span>
            </button>
          </div>

          {/* Border */}

          <div className="mt-12 border-b border-b-gary-300">
            {/* Botto Content*/}

            <p className="py-6 text-sm font-thin text-center text-gray-400 ">
              or Login with
            </p>

            {/* Bottom Button Container */}

            <div className="flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-4 md:space-y-0">
              <button className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150 md:w-1/2">
                <img src={Facebook} alt="" className="w-9" />
                <span className="font-thin">Facebook</span>
              </button>

              <button className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150 md:w-1/2">
                <img src={google} alt="" className="w-9" />
                <span className="font-thin">Google</span>
              </button>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <img src={LoginImage} alt="" className="w-[430px] hidden  md:block" />
        <div className="group absolute top-3 right-4 justify-center w-10 h-10 hover:-translate-y-0.5 transiiton-all duration-500 md:bg-white md:top-2 bg-gray-200 rounded-full flex items-center">
          <IoIosClose className="text-3xl" />
        </div>
      </div>
    </div>
  );
}
