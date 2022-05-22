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
    <div class="drawer">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        <div class="max-w-screen-xl mx-auto lg:px-12 navbar bg-base-100">
          <div class="flex-1">
            <img className="w-28 md:w-36" src={logo} alt="" />
          </div>
          <div class="flex-none lg:hidden">
            <label for="my-drawer-3" class="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-6 h-6 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div class="flex-none hidden lg:block  gap-5">
            <ul class="menu menu-horizontal gap-x-5">
              {navItem}

              <li class="dropdown lg:dropdown-end dropdown-hover">
                <label
                  tabindex="0"
                  class="btn btn-primary btn-outline m-1 rounded-lg"
                >
                  LOGIN
                </label>
                <ul
                  tabindex="0"
                  class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
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

      <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">{navItem}</ul>
      </div>
    </div>
  );
};

export default Navber;
