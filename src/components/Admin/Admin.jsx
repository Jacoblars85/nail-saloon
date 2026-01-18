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

      <table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Phone Number</th>
      <th>Time</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
   


      {appointments.map((appointment) => (
 <tr key={appointment.id} className="AdminBox">
      <td>{appointment.name}</td>
      <td>{appointment.phone}</td>
      <td><p>{dayjs(appointment.start_time).format("YYYY-MM-DD HH:mm")}</p>
          <p>{dayjs(appointment.start_time).format("YYYY-MM-DD")}</p>
          <p>{dayjs(appointment.start_time).format("h:mm A")}</p></td>
      <td><button>e</button></td>
      <td><button>d</button></td>
    </tr>
      ))}

        </tbody>
</table>
    </div>
  );
}

export default Admin;
