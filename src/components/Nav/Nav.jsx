import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
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
