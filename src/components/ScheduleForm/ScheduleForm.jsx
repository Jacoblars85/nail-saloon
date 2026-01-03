import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";

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
    <div className="ScheduleForm">
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
        <button>Create Appointment</button>
      </form>
    </div>
  );
}

export default ScheduleForm;
