import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Admin() {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <div className="Admin">
      <h2>Admin</h2>
    </div>
  );
}

export default Admin;
