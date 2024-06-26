import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { fetchHabits } from "./redux/reducers/habit-reducer";
const Navbar = () => {
  const dispatch = useDispatch();
  dispatch(fetchHabits())
  return (
    <>
      <div className="navbar">
        <Link to="/" className="nav-img"><img src="logo.png" alt="logo"></img></Link>
        <Link to='/Habit-Detail/today' className="nav-link">Details</Link>
        <Link to='/' className="nav-link">WeekView</Link>
      </div>
      <Outlet />

    </>
  );
};

export default Navbar;
