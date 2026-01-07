import React from "react";
import { Link } from "react-router-dom";
import ScheduleForm from "../ScheduleForm/ScheduleForm.jsx";
import SchedulePage from "../SchedulePage/SchedulePage.jsx";

function Home() {
  return (
    <div className="HomePage">
      <h2>This is the nail saloon</h2>

      <div className="HomeBigBox">
        <div className="HomeSmallBox">
          <h3>We have Spas!</h3>
          <img src="" alt="" />
          <p></p>
        </div>

        <div className="HomeSmallBox">
          <h3>We Have Wine!</h3>
          <img src="" alt="" />
          <p></p>
        </div>
      </div>
      <Link to="/form">
        <button>Schedule Now!</button>
      </Link>
    </div>
  );
}

export default Home;
