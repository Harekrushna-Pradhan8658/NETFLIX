import React, { useState } from "react";
import { IMG_URL, LOGO_URL } from "./Constants";
import { Link } from "react-router-dom";

function Signin() {
  const [learnMore, setLearnMore] = useState(true);

  const handleClick = () => {
    setLearnMore(!learnMore);
  };

  return (
    <div>
      <div className="relative h-screen w-screen bg-black bg-opacity-60">
        <div className="absolute w-full px-8 py-4 bg-gradient-to-b from-black flex items-center z-10">
          <img className="w-44" src={LOGO_URL} alt="netflix-logo" />
        </div>
        <div className="absolute inset-0 -z-10">
          <img
            className="w-full h-full object-cover"
            src={IMG_URL}
            alt=""
          ></img>
        </div>

        <div className="absolute inset-0 flex items-center justify-center  ">
          <div className="w-[450px] p-12 bg-black bg-opacity-60 rounded-lg shadow-lg">
            <p className="text-3xl font-bold text-white mb-6">Sign In</p>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Email or mobile number"
                className="text-white bg-black bg-opacity-40 py-3 px-5 border border-gray-300"
              />
              <input
                type="password"
                placeholder="Password"
                className="text-white bg-black bg-opacity-40 py-3 px-5 border border-gray-300"
              />
              <button className="py-2 px-10 bg-red-600 text-white rounded">
                Sign In
              </button>
              <p className="text-gray-400 flex justify-center items-center text-lg font-semibold ">
                OR
              </p>
              <button className="py-2 px-10 bg-gray-400 font-bold bg-opacity-35 text-white rounded">
                Use a sign-in code
              </button>
              <p className="text-gray-400 flex justify-center items-center font-semibold underline cursor-pointer">
                Forgot password?
              </p>
              <label className="text-white text-base flex">
                <input
                  type="checkbox"
                  className="m-1 appearance-none border border-white rounded-sm h-[18px] w-[18px] bg-transparent cursor-pointer checked:appearance-auto"
                />
                Remember me
              </label>
              <div className="text-gray-300 font-semibold">
                New to Netflix?
                <Link to="/" className="text-white font-bold hover:underline">
                  Sign up now.
                </Link>
              </div>
              <p className="text-gray-500 text-xs font-semibold">
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.
              </p>
              <div onClick={handleClick}>
                {learnMore ? (
                  <p className="text-blue-600 text-sm underline cursor-pointer font-semibold">
                    Learn more.
                  </p>
                ) : (
                  <p className="text-gray-500 text-xs font-semibold">
                    The information collected by Google reCAPTCHA is subject to
                    the Google{" "}
                    <Link to="" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link to="" className="text-blue-600 hover:underline">
                      Terms of Service
                    </Link>
                    , and is used for providing, maintaining, and improving the
                    reCAPTCHA service and for general security purposes (it is
                    not used for personalised advertising by Google).
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-[#212121] h-auto w-full  text-white">
        <div className="p-10">
        <p className="p-4">Questions? Call 000-800-919-1743 (Toll-Free)</p>
        <div className="flex justify-evenly">
          <div className="m-2  p-2">
            <div className="text-slate-200 py-2 underline">FAQ</div>
            <div className="text-slate-200 py-2 underline">Terms of Use</div>
            <div className="py-2">
              <select className=" p-2 w-[120px] rounded ml-auto bg-transparent text-stone-50 bg-gradient-to-t from-black border-2 border-white ">
                <option value="" className="text-black">
                  English
                </option>
                <option value="option1" className="text-black">
                  हिन्दी
                </option>
              </select>
            </div>
          </div>
          <div>
          <div className="text-slate-200 py-2 underline">
              Help Centre
            </div>
            <div className="text-slate-200 py-2 underline">
              Cookie Perferences
            </div>
          </div>
          <div>
            <div className="text-slate-200 py-2 underline">
            Corporate Information
            </div>
          </div>
          <div>
          <div className="text-slate-200 py-2 underline">
          Privacy
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
