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

      {appointments.map((appointment) => (
        <div key={appointment.id} className="AdminBox">
          <p>{appointment.name}</p>
          <p>{appointment.phone}</p>
          <p>{dayjs(appointment.start_time).format("YYYY-MM-DD HH:mm")}</p>
          <p>{dayjs(appointment.start_time).format("YYYY-MM-DD")}</p>
          <p>{dayjs(appointment.start_time).format("h:mm A")}</p>
        </div>
      ))}
    </div>
  );
}

export default Admin;
