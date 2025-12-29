import React, { useState, forwardRef } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { useSelector, useDispatch } from "react-redux";

function Nav() {
  const dispatch = useDispatch();

  const store = useSelector((store) => store);

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">Nail Saloon</h2>
      </Link>
    </div>
  );
}

export default Nav;
