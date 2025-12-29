import React, { useState, forwardRef } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { useSelector, useDispatch } from "react-redux";

function Nav(props) {
  const dispatch = useDispatch();

  const store = useSelector((store) => store);

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">Bowsermon</h2>
      </Link>
      {/* If no user is logged in, show these links */}
      {!user.id && (
        // If there's no user, show login/registration links
        <Link className="navLink" to="/login">
          Login / Register
        </Link>
      )}
    </div>
  );
}

export default Nav;
