import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

function ScheduleForm() {
  const dispatch = useDispatch();

  const [nameInput, setNameInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [dateInput, setDateInput] = useState(null);
  const [openAppointments, setOpenAppointments] = useState([]);

  useEffect(() => {
    console.log("in useEffect");
    getAppointments();
  }, [dateInput]);

  const getAppointments = () => {
    axios({
      method: "GET",
      url: "/open/appointments",
    })
      .then((response) => {
        console.log("got appointments", response.data);
        setOpenAppointments(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log("dateInput", dateInput);

  const addAppointment = (e) => {
    e.preventDefault();

    let appointmentDetails = {
      nameInput: nameInput,
      phoneInput: phoneInput,
      dateInput: dateInput.$d,
    };

    console.log("appointmentDetails", appointmentDetails);

    // dispatch({
    //   type: "CREATE_APPOINTMENT",
    //   payload: appointmentDetails,
    // });
    setNameInput("");
    setPhoneInput("");
    setDateInput(null);
  };

  return (
    <div>
      <h2>Schedule an Appointment Here!</h2>

      <form className="formPanel" onSubmit={addAppointment}>
        <TextField
          variant="outlined"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          placeholder="Name"
        />

        <TextField
          variant="outlined"
          value={phoneInput}
          onChange={(e) => setPhoneInput(e.target.value)}
          placeholder="Phone Number"
        />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            minDate={dayjs()}
            maxDate={dayjs().add(30, "day")}
            value={dateInput}
            onChange={(dateInput) => setDateInput(dateInput)}
          />
        </LocalizationProvider>

        <div id="timeAvailable" className="TimeAvailable">
          {openAppointments.map((appointment) => (
            <div>
              <p>{appointment}</p>
            </div>
          ))}
        </div>

        <Button type="submit" color="black" variant="outlined">
          Create Appointment
        </Button>
      </form>
    </div>
  );
}

export default ScheduleForm;
