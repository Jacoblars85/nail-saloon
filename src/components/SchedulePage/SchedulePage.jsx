import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ScheduleForm from "../ScheduleForm/ScheduleForm.jsx";

function SchedulePage() {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <div className="SchedulePage">
      <h2>Schedule an Appointment Here!</h2>
<Link to="/form">
      <button>Schedule Now!</button>
</Link>
      {/* <ScheduleForm /> */}
    </div>
  );
}

export default SchedulePage;
