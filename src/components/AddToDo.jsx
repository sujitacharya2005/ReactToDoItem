import React from "react";
import { useState } from "react";

function AddToDo({ onNewItem }) {
  const [todoName, setToDoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setToDoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setToDoName("");
    setDueDate("");
  };
  return (
    <div className="container">
      <div className="row kg-row align-items-center">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter toodo Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2 d-grid">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
