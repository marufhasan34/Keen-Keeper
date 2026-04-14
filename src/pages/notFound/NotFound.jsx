import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      
      <h1 className="text-7xl font-extrabold text-red-500">404</h1>

      <h2 className="text-2xl md:text-3xl font-semibold mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-500 mt-2 max-w-md">
        Sorry, the page you are looking for doesn’t exist.
      </p>

      <Link to="/">
        <button className="mt-6 px-6 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition">
          Go Home
        </button>
      </Link>

      <img
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
        alt="404"
        className="w-72 md:w-96 mt-8"
      />
    </div>
  );
};

export default NotFound;