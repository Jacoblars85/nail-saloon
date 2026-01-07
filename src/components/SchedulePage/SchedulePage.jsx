import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ScheduleForm from "../ScheduleForm/ScheduleForm.jsx";
import Button from "@mui/material/Button";

function SchedulePage() {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <div className="SchedulePage">
      <h2>Schedule an Appointment Here!</h2>
      <p>We accept walk ins or you can set up an appointment!</p>
      <Link to="/form">
        <Button variant="outlined">Schedule Now!</Button>
      </Link>
    </div>
  );
}

export default SchedulePage;
