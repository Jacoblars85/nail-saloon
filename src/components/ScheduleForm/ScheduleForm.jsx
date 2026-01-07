import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// export default function FirstComponent() {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DatePicker />
//     </LocalizationProvider>
//   );
// }

function ScheduleForm() {
  const dispatch = useDispatch();

  const [nameInput, setNameInput] = useState("");
  const [numberInput, setNumberInput] = useState("");

  const addAppointment = (e) => {
    e.preventDefault();

    dispatch({
      type: "CREATE_APPOINTMENT",
      payload: { nameInput: nameInput, numberInput: numberInput },
    });
    setNameInput("");
    setNumberInput("");
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
      <input
        value={numberInput}
        onChange={(e) => setNumberInput(e.target.value)}
        placeholder="Calender"
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker />
    </LocalizationProvider>
      <button>Create Appointment</button>
    </form>
  );
}

export default ScheduleForm;
