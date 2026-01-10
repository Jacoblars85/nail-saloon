import React from "react";
import { Link } from "react-router-dom";
import ScheduleForm from "../ScheduleForm/ScheduleForm.jsx";
import SchedulePage from "../SchedulePage/SchedulePage.jsx";
import Button from "@mui/material/Button";

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
        <Button color="black" variant="outlined">
          Schedule Now!
        </Button>
      </Link>
    </div>
  );
}

export default Home;
