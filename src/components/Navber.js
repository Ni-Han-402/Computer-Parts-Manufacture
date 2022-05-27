import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assests/images/pc-house-logo.png";
import auth from "../firebase.init";
import useAdmin from "../hooks/useAdmin";

const Navber = ({ children }) => {
  const { pathname } = useLocation();
  const [admin] = useAdmin();
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  const navItem = (
    <>
      <li>
        <NavLink to="/home" className="rounded-lg">
          Home
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/dashboard/my-profile" className="rounded-lg">
            Dashboard
          </NavLink>
        </li>
      )}
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
      <li>
        {user ? (
          <button
            onClick={logout}
            className="btn btn-primary rounded-lg text-base-200"
          >
            LOGOUT
          </button>
        ) : (
          <NavLink
            to="/login"
            className="btn btn-primary rounded-lg text-base-200"
          >
            LOGIN
          </NavLink>
        )}
      </li>
    </>
  );
  return (
    <div className="drawer drawer-end h-auto">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="container mx-auto navbar bg-base-100">
          {pathname.includes("dashboard") && (
            <label
              tabindex="0"
              for="my-drawer-2"
              class="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
          )}
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
            <ul className="menu menu-horizontal gap-x-5">{navItem}</ul>
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
