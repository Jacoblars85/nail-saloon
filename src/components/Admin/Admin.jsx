import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import dayjs from "dayjs";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


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

      const editAppointment = (appointment) => {
    axios({
      method: "PUT",
      url: `/api/schedule/edit/appointment`,
      data: appointment
    })
      .then((response) => {
        getBookedAppointments()
      })
      .catch((err) => {
        console.log(err);
      });
  };

    const deleteAppointment = (appointmentID) => {
    axios({
      method: "DELETE",
      url: `/api/schedule/appointment`,
      data: appointmentID
    })
      .then((response) => {
        getBookedAppointments()
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
              <td>
                  {dayjs(appointment.start_time).format("YYYY-MM-DD h:mm A")}
              </td>
              <td>
                <button><EditIcon /></button>
              </td>
              <td>
                <button onClick={deleteAppointment(appointment.id)}><DeleteIcon /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
