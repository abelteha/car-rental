import { Car, ShoppingCart } from "phosphor-react";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex flex-row justify-between items-center h-20 bg-black gap-5 sticky top-0 sm:px-[10%] px-5">
      <Link to="/" className="flex items-center group">
        <Car className="text-white text-2xl sm:text-3xl mr-1 group-hover:text-gray-200" />
        <h1 className="text-white text-2xl sm:text-3xl font-extrabold group-hover:text-gray-200">
          | CarRental
        </h1>
      </Link>

      <div className="flex gap-5">
        <Link
          to="/"
          className="text-white text-xl sm:text-2xl hover:text-gray-300 transition"
        >
          Cars
        </Link>
        <Link
          to="/booked"
          className="text-white text-xl sm:text-2xl hover:text-gray-300 transition"
        >
          Booked
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
