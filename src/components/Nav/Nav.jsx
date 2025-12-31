import React, { useState, forwardRef } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { useSelector, useDispatch } from "react-redux";

function Nav() {
  const dispatch = useDispatch();

  const store = useSelector((store) => store);

  return (
    <div className="nav">
      <Link to="/">
        <h1 className="nav-title">Nail Saloon</h1>
      </Link>
      <div className="smallNavBox">
        <Link to="/schedule">
          <h2 className="nav-title">Schedule</h2>
        </Link>
        <Link to="/about">
          <h2 className="nav-title">About Us</h2>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
