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
  const [appointments, setAppointments] = useState([]);
  const [nameInput, setNameInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [dateInput, setDateInput] = useState(dayjs());
  const [openForm, setOpenForm] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

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

  // Form Dialog Funcs
  const handleClickFormOpen = (appointment) => {
    setNameInput(appointment.name);
    setPhoneInput(appointment.phone);
    setDateInput(appointment.start_time);
    setOpenForm(true);
  };

  const handleFormClose = () => {
    setOpenForm(false);
  };

  const editAppointment = (event, appointment) => {
    event.preventDefault();

    console.log("appointment in post", appointment);

    handleFormClose();

    axios({
      method: "PUT",
      url: `/api/schedule/edit/appointment`,
      data: appointment,
    })
      .then((response) => {
        getBookedAppointments();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Delete Dialog Funcs
  const handleClickOpenDelete = () => {
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const deleteAppointment = (appointmentID) => {
    axios({
      method: "DELETE",
      url: `/api/schedule/appointment`,
      data: appointmentID,
    })
      .then((response) => {
        getBookedAppointments();
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
                <button onClick={() => handleClickFormOpen(appointment)}>
                  <EditIcon />
                </button>
              </td>

              <td>
                <button onClick={() => handleClickOpenDelete(appointment.id)}>
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
          <Button onClick={handleFormClose}>Cancel</Button>
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
          <Button onClick={handleCloseDelete}>Cancel</Button>
          <Button onClick={() => deleteAppointment(appointment.id)} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Admin;
