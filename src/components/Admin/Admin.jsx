import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Admin() {
    const [appointments, setAppointments] = useState([]);
  

    useEffect(() => {
    getBookedAppointments();
  }, []);

  const getBookedAppointments = () => {
    axios({
      method: "GET",
      url: `/api/schedule/booked/appointments`,
    })
      .then((response) => {
        setAppointments(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="Admin">
      <h2>Admin</h2>
    </div>
  );
}

export default Admin;
