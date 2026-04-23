import React from "react";
import { ImStatsDots } from "react-icons/im";
import { IoTimeOutline } from "react-icons/io5";
import { RiHome2Line } from "react-icons/ri";
import { NavLink } from "react-router";
import MyNavLink from "./MyNavLink";

const Navbar = () => {
  return (
    <div className="bg-base-100 mt-3  shadow-sm">
      <div className="navbar container flex-col md:flex-row items-center  mx-auto">
        <div className="flex-1 mb-5 md:mb-0">
          <a className="text-green-800 font-semibold text-xl">
            <span className="font-bold text-black">Keen</span>Kepper
          </a>
        </div>
        <div className="flex-none">
          <div className="flex gap-4">
            <ul className="menu flex-col md:flex-row menu-horizontal px-1">
              <li className="md:mr-3 text-lg text-gray-500 font-semibold">
                <MyNavLink to={"/"}>
                  <RiHome2Line /> Home
                </MyNavLink>
              </li>
              <li className="md:mr-3 text-lg  text-gray-500 font-semibold">
                <MyNavLink to={"/timeLine"}>
                  <IoTimeOutline />
                  timeline
                </MyNavLink>
              </li>
              <li className="font-semibold  text-gray-500 text-lg">
                <MyNavLink to={"/stats"}>
                  <ImStatsDots /> Stats
                </MyNavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
