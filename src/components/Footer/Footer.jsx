import React, { useEffect } from "react";

function Footer() {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <footer className="Footer">
      <div>
        <h3>Contact Information</h3>
        <p>Email: </p>
        <p>phone Number: </p>
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
