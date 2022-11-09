import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import logo1 from "../../../../images/logo/logo-5.png";
import { AuthContext } from "../../../../Context/AuthProvider";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const hndleUserLogout = () => {
    logOutUser()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="navbar bg-gray-600 flex ">
        <div className="grow">
          <div className=" block sm:hidden">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100  w-32"
              >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/FAQ">FAQ</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center gap-4 mx-6">
            <div className="">
              <img className="w-40 min-w-[10rem] rounded" src={logo1} alt="" />
            </div>
            {/* <div className="">
              <h2 className=" text-3xl font-semibold">Shahi Kitchen</h2>
            </div> */}
          </div>

          <div className="hidden sm:block text-white">
            <ul className="flex">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `text-red-600 mr-4` : `hover:text-red-600 mr-4`
                  }
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `text-red-600 mr-4` : `hover:text-red-600 mr-4`
                  }
                  to="/services"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `text-red-600 mr-4` : `hover:text-red-600 mr-4`
                  }
                  to="/FAQ"
                >
                  FAQ
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `text-red-600 mr-4` : `hover:text-red-600 mr-4`
                  }
                  to="/blog"
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        {/* end */}
        {!user?.uid ? (
          <div className="text-white">
            <Link to="/login">
              <button className=" normal-case mr-2 text-xl">Login</button>
            </Link>
            <FaUserAlt className="text-xl" />
          </div>
        ) : (
          <div className="">
            <div className="dropdown dropdown-end  ">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} alt="" title="" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-sm w-32"
              >
                <li>
                  <a className="">Profile</a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button onClick={hndleUserLogout}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
