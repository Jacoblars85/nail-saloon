import React, { useEffect } from "react";

function Footer() {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <footer className="Footer">
      <div>
        <h2>Contact Information</h2>
        <p>Email: </p>
        <p>phone Number: </p>
      </div>
      <div>
        <h2>Hours</h2>
        <p>weekdays: 10-6</p>
        <p>weekends: 10-6</p>
        <p>Holidays: Closed</p>
      </div>
    </footer>
  );
}

export default Footer;
