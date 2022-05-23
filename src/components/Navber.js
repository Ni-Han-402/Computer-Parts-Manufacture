import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assests/images/pc-house-logo.png";

const Navber = ({ children }) => {
  const navItem = (
    <>
      <li>
        <NavLink to="/home" className="rounded-lg">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/reviews" className="rounded-lg">
          Reviews
        </NavLink>
      </li>
      <li>
        <NavLink to="/blog" className="rounded-lg">
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className="rounded-lg">
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="drawer h-auto">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="container mx-auto navbar bg-base-100">
          <div className="flex-1">
            <img className="w-28 md:w-36" src={logo} alt="" />
          </div>
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-none hidden lg:block  gap-5">
            <ul className="menu menu-horizontal gap-x-5">
              {navItem}

              <li className="dropdown lg:dropdown-end dropdown-hover">
                <label
                  tabIndex="0"
                  className="btn btn-primary btn-outline m-1 rounded-lg"
                >
                  LOGIN
                </label>
                <ul
                  tabIndex="0"
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Profile</a>
                  </li>
                  <li>
                    <NavLink to="/login">LOGIN</NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        {children}
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">{navItem}</ul>
      </div>
    </div>
  );
};

export default Navber;
