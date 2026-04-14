import React from "react";
import { ImStatsDots } from "react-icons/im";
import { IoTimeOutline } from "react-icons/io5";
import { RiHome2Line } from "react-icons/ri";
import { NavLink } from "react-router";
import MyNavLink from "./MyNavLink";

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
                <MyNavLink to={"/"}>
                  <RiHome2Line /> Home
                </MyNavLink>
              </li>
              <li className="mr-3">
                <MyNavLink to={"/timeLine"}>
                  <IoTimeOutline />
                  timeline
                </MyNavLink>
              </li>
              <li>
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
