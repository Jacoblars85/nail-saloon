import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Footer() {
  useEffect(() => {}, []);

  return (
    <footer className="Footer">
      <div>
        <h3>Links</h3>
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/about">
          <p>About Us</p>
        </Link>
        <Link to="/schedule">
          <p>Schedule Now</p>
        </Link>
      </div>
      
      <div>
        <h3>Contact Information</h3>
        <p>Email: nail.saloon@gmail.com</p>
        <p>Number: 123-456-7890</p>
      </div>

      <div>
        <h3>Hours</h3>
        <p>weekdays: 10-6</p>
        <p>weekends: 10-6</p>
        <p>Holidays: Closed</p>
      </div>
    </footer>
  );
}

export default Footer;
