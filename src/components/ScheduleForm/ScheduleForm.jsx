import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import Button from '@mui/material/Button';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function ScheduleForm() {
  const dispatch = useDispatch();

  const [nameInput, setNameInput] = useState("");
  const [numberInput, setNumberInput] = useState("");
  const [dateInput, setDateInput] = useState(null);

  console.log("dateInput", dateInput);

  const addAppointment = (e) => {
    e.preventDefault();

    dispatch({
      type: "CREATE_APPOINTMENT",
      payload: { nameInput: nameInput, numberInput: numberInput, dateInput: dateInput.$d},
    });
    setNameInput("");
    setNumberInput("");
    setDateInput(null);
  };

  return (
    <form className="formPanel" onSubmit={addAppointment}>
      <input
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
        placeholder="Name"
      />
      <input
        value={numberInput}
        onChange={(e) => setNumberInput(e.target.value)}
        placeholder="Phone Number"
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          value={dateInput}
          onChange={(dateInput) => setDateInput(dateInput)}
        />
      </LocalizationProvider>

      <Button variant="outlined">Create Appointment</Button>
    </form>
  );
}

export default ScheduleForm;
