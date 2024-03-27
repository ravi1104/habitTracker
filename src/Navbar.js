import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/" className="nav-img"><img src="./logo.png" alt="logo"></img></Link>
        <Link to='/Habit-Detail/today' className="nav-link">Details</Link>
        <Link to='/' className="nav-link">WeekView</Link>
      </div>
      <Outlet />

    </>
  );
};

export default Navbar;
