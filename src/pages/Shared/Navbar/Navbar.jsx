import { Link, NavLink } from "react-router-dom";
import { PiUserCircleFill } from "react-icons/pi";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Result } from "postcss";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/career">Career</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 mt-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="gap-5 menu-horizontal px-1 text-xl ">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <div
          className="text-5xl mr-3 tooltip"
          data-tip={user?.email || "No email"}
        >
          <PiUserCircleFill></PiUserCircleFill>
        </div>
        {user ? (
          <button
            onClick={handleSignOut}
            className="bg-[#403F3F] text-white px-4 py-2"
          >
            Sign Out
          </button>
        ) : (
          <Link to="/login">
            <button className="bg-[#403F3F] text-white px-4 py-2">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
