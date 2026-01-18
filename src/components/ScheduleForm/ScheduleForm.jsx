import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import axios from "axios";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

function ScheduleForm() {
  const dispatch = useDispatch();

  const [nameInput, setNameInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [dateInput, setDateInput] = useState(dayjs());
  const [timeInput, setTimeInput] = useState(null);
  const [openAppointments, setOpenAppointments] = useState([]);

  useEffect(() => {
    getAppointments(dateInput);
  }, [dateInput]);

  const getAppointments = (date) => {
    axios({
      method: "GET",
      url: `/api/schedule/open/appointments/${date}`,
    })
      .then((response) => {
        setOpenAppointments(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addAppointment = (e) => {
    e.preventDefault();

    if (nameInput === "" || phoneInput === "" || timeInput === null) {
      return;
    }
    {
      let appointmentDetails = {
        nameInput: nameInput,
        phoneInput: phoneInput,
        dateInput: dateInput.$d,
        timeInput: dayjs(timeInput).format("YYYY-MM-DD HH:mm"),
      };

      console.log("appointmentDetails", appointmentDetails);

      axios({
        method: "POST",
        url: "/api/schedule/new/appointment",
        data: appointmentDetails,
      })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });

      setNameInput("");
      setPhoneInput("");
      setDateInput(dayjs());
      setTimeInput(null);
    }
  };

  const clicksTime = (e, time) => {
    setTimeInput(time);
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
          size="small"
        />

        <TextField
          variant="outlined"
          value={phoneInput}
          onChange={(e) => setPhoneInput(e.target.value)}
          placeholder="Phone Number"
          size="small"
        />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            minDate={dayjs()}
            maxDate={dayjs().add(30, "day")}
            value={dateInput}
            onChange={(dateInput) => setDateInput(dateInput)}
          />
        </LocalizationProvider>

        <ToggleButtonGroup
          className="TimeAvailable"
          value={timeInput}
          exclusive
          onChange={clicksTime}
        >
          {openAppointments.map((appointment) => (
            <ToggleButton
              key={appointment.slot}
              className="TimeBox"
              value={appointment.slot}
            >
              {dayjs(appointment.slot).format("h:mm A")}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>

        <Button type="submit" color="black" variant="outlined">
          Create Appointment
        </Button>
      </form>
    </div>
  );
}

export default ScheduleForm;
