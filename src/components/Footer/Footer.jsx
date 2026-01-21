import React, { useEffect } from "react";

function Footer() {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <div className="Footer">
      <h2>Contact Information</h2>
      <p>Email: </p>
      <p>phone Number: </p>

    </div>
  );
}

export default Footer;
