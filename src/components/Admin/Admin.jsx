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

  const [openForm, setOpenForm] = useState(false);

  const handleClickFormOpen = () => {
    setOpenForm(true);
  };

  const handleFormClose = () => {
    setOpenForm(false);
  };

  const editAppointment = (event, appointment) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const email = formJson.email;
    console.log(email);
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

  const [openDelete, setOpenDelete] = useState(false);

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

      <Dialog open={openForm} onClose={handleFormClose}>
        <DialogTitle>Edit Information</DialogTitle>
        <DialogContent>
          <DialogContentText>Edit what is nessary</DialogContentText>
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
