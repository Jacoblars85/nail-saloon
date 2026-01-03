import React from "react";
import { Link } from "react-router-dom";
import ScheduleForm from "../ScheduleForm/ScheduleForm.jsx";
import SchedulePage from "../SchedulePage/SchedulePage.jsx";

function Home() {
  return (
    <div className="HomePage">
      <h2>This is the nail saloon</h2>

<div className="HomeBigBox">
      <div className="HomeLeftBox"></div>

      <div className="HomeRightBox"></div>
</div>
      <Link to="/schedule">
        <button>Schedule Now</button>
      </Link>
    </div>
  );
}

export default Home;
