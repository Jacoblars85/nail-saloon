import React, { useEffect } from "react";

function Footer() {
  useEffect(() => {}, []);

  return (
    <footer className="Footer">
      <div>
        <h3>Contact Information</h3>
        <p>Email: nail.saloon@gmail.com</p>
        <p>Number: 123-456-7890</p>
      </div>
      <div>
        <h3>Important Links</h3>
        <p>Home</p>
        <p>About Us</p>
        <p>Schedule Now</p>
        <p></p>
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
