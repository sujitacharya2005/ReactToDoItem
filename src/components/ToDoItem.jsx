import React from "react";

function ToDoItem({ todoName, todoDate, onDeleteClick }) {
  console.log(todoName + todoDate);
  return (
    <div className="container">
      <div className="row kg-row align-items-center">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2 d-grid">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => onDeleteClick(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;
