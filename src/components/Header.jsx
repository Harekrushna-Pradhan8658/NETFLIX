import React from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "./Constants";

function Header() {
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-bl from-black flex items-center z-50">
      <img
        className="w-44"
        src={LOGO_URL}
        alt="netflix-logo"
      />
      <div className="ml-auto flex items-center gap-4">
      <select
        // value={selectedOption}
        // onChange={handleChange}
        className="border p-2 rounded ml-auto bg-transparent text-stone-50 bg-gradient-to-t from-black"
      >
        <option value="" className="text-black">English</option>
        <option value="option1" className="text-black">हिन्दी</option>
      </select>
      <Link to="/signin">
      <button className="bg-red-700 text-stone-50 px-4 py-2 rounded">
        Sign In
      </button>
      </Link>
      </div>
    </div>
  );
}

export default Header;
