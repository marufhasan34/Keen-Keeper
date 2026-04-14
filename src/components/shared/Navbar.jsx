import React from "react";
import { ImStatsDots } from "react-icons/im";
import { IoTimeOutline } from "react-icons/io5";
import { RiHome2Line } from "react-icons/ri";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="bg-base-100 mt-3 mb-9 shadow-sm">
      <div className="navbar container mx-auto">
        <div className="flex-1">
          <a className="text-green-800 font-semibold text-xl">
            <span className="font-bold text-black">Keen</span>Kepper
          </a>
        </div>
        <div className="flex-none">
          <div className="flex gap-4">
            <ul className="menu  menu-horizontal px-1">
              <li className="mr-3">
                <NavLink to={"/"} className={({isActive}) => `${isActive ? "bg-green-800 text-white" : ""}`}>
                  <RiHome2Line /> Home
                </NavLink>
              </li>
              <li className="mr-3">
                <NavLink className={({isActive}) => `${isActive ? "bg-green-800 text-white" : ""}`} to={"/timeLine"}>
                  <IoTimeOutline />
                  timeline
                </NavLink>
              </li>
              <li>
                <NavLink className={({isActive}) => `${isActive ? "bg-green-800 text-white" : ""}`} to={"/stats"}>
                 <ImStatsDots /> Stats
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
