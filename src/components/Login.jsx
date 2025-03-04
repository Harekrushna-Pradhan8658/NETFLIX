import React from "react";
import Header from "./Header";
import { IMG_URL } from "./Constants";

const Login = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Header />
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src={IMG_URL}
          alt=""
        ></img>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-bl from-black ">
        <p className="text-white text-4xl font-bold text-center drop-shadow-lg ">
          Unlimited movies, TV shows <br /> and more
        </p>
        <p className="text-white font-semibold mb-4 text-center drop-shadow-lg ">
          Starts at ₹149. Cancel at any time.
        </p>
        <p className="text-white font-semibold mb-4 text-center drop-shadow-lg">
          Ready to watch? Enter your email to create or restart your <br />
          membership.
        </p>
        <form className="flex items-center gap-4">
          <input
            type="email"
            placeholder="Email address"
            className="py-4 px-10 border border-gray-300 rounded bg-transparent text-white bg-gradient-to-br from-black"
          />
          <button className="py-4 px-10 bg-red-600 text-white rounded">
            Get Started {">"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
