import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import dayjs from "dayjs";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function Admin() {
  const [allAppointments, setAllAppointments] = useState([]);
  const [todaysAppointments, setTodaysAppointments] = useState([]);
  const [appointmentId, setAppointmentId] = useState(0);
  const [nameInput, setNameInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [dateInput, setDateInput] = useState(dayjs());
  const [openForm, setOpenForm] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  useEffect(() => {
    getBookedAppointments();
    getTodaysAppointments(dayjs());
  }, []);

  const getTodaysAppointments = (date) => {
    console.log('date', date);
    
    axios({
      method: "GET",
      url: `/api/schedule/todays/appointments/${date}`,
    })
      .then((response) => {
        setTodaysAppointments(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getBookedAppointments = () => {
    axios({
      method: "GET",
      url: `/api/schedule/booked/appointments`,
    })
      .then((response) => {
        setAllAppointments(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Form Dialog Funcs
  const handleClickFormOpen = (appointment) => {
    setAppointmentId(appointment.id);
    setNameInput(appointment.name);
    setPhoneInput(appointment.phone);
    setDateInput(dayjs(appointment.start_time).format("MM-DD-YYYY h:mm A"));
    setOpenForm(true);
  };

  const handleFormClose = () => {
    setAppointmentId(0);
    setNameInput("");
    setPhoneInput("");
    setDateInput(dayjs());
    setOpenForm(false);
  };

  const editAppointment = (event) => {
    event.preventDefault();

    let appointmentDetails = {
      appointmentId: appointmentId,
      nameInput: nameInput,
      phoneInput: phoneInput,
      dateInput: dayjs(dateInput).format("YYYY-MM-DD HH:mm"),
    };

    console.log("appointmentDetails in post", appointmentDetails);

    axios({
      method: "PUT",
      url: `/api/schedule/edit/appointment`,
      data: appointmentDetails,
    })
      .then((response) => {
        getBookedAppointments();
      })
      .catch((err) => {
        console.log(err);
      });

    handleFormClose();
  };

  // Delete Dialog Funcs
  const handleClickOpenDelete = (appointment) => {
    setAppointmentId(appointment.id);
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setAppointmentId(0);
    setOpenDelete(false);
  };

  const deleteAppointment = () => {
    axios({
      method: "DELETE",
      url: `/api/schedule/appointment`,
      data: appointmentId,
    })
      .then((response) => {
        getBookedAppointments();
      })
      .catch((err) => {
        console.log(err);
      });

    handleCloseDelete();
  };

  return (
    <div className="Admin">
      <h2>Admin</h2>

      <h3>Todays Appointments</h3>

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
          {todaysAppointments.map((appointment) => (
            <tr key={appointment.id} className="AdminBox">
              <td>{appointment.name}</td>
              <td>{appointment.phone}</td>
              <td>
                {dayjs(appointment.start_time).format("MM-DD-YYYY h:mm A")}
              </td>
              <td>
                <button onClick={() => handleClickFormOpen(appointment)}>
                  <EditIcon />
                </button>
              </td>

              <td>
                <button onClick={() => handleClickOpenDelete(appointment)}>
                  <DeleteIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button>sort</button>

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
          {allAppointments.map((appointment) => (
            <tr key={appointment.id} className="AdminBox">
              <td>{appointment.name}</td>
              <td>{appointment.phone}</td>
              <td>
                {dayjs(appointment.start_time).format("MM-DD-YYYY h:mm A")}
              </td>
              <td>
                <button onClick={() => handleClickFormOpen(appointment)}>
                  <EditIcon />
                </button>
              </td>

              <td>
                <button onClick={() => handleClickOpenDelete(appointment)}>
                  <DeleteIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Form Dialog */}
      <Dialog open={openForm} onClose={handleFormClose}>
        <DialogTitle>Edit Information</DialogTitle>
        <DialogContent>
          <form onSubmit={editAppointment} id="subscription-form">
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="name"
              label="Name"
              fullWidth
              variant="standard"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="phoneNumber"
              name="phone number"
              label="Phone Number"
              fullWidth
              variant="standard"
              value={phoneInput}
              onChange={(e) => setPhoneInput(e.target.value)}
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="date"
              name="date"
              label="Date and Time"
              fullWidth
              variant="standard"
              value={dateInput}
              onChange={(e) => setDateInput(e.target.value)}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFormClose} color="">
            Cancel
          </Button>
          <Button type="submit" form="subscription-form">
            Edit
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Dialog */}
      <Dialog
        open={openDelete}
        onClose={handleCloseDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you want to delete this appointment?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Once you delete it, it will be gone for good.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDelete} color="">
            Cancel
          </Button>
          <Button onClick={() => deleteAppointment()} autoFocus color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Admin;
