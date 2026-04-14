import React from "react";
import { NavLink } from "react-router";

const MyNavLink = ({to,children}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${isActive ? "bg-green-800 text-white" : ""}`
      }
    >
       {children}
    </NavLink>
  );
};

export default MyNavLink;
