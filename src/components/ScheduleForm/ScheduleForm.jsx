import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";

function ScheduleForm() {
  const [nameInput, setNameInput] = useState("");
  const [numberInput, setNumberInput] = useState("");

  const dispatch = useDispatch();

  const addAppointment = (e) => {
    e.preventDefault();

    dispatch({
      type: "CREATE_AIRLINE",
      payload: nameInput,
    });
    setAirlineInput("");
  };

  return (
    <div>
      <form onSubmit={addAppointment}>
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
        <button>Add Appointment</button>
      </form>
    </div>
  );
}

export default ScheduleForm;
