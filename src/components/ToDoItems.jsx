import React from "react";
import ToDoItem from "./ToDoItem";
import styles from "./ToDoItems.module.css";

const ToDoItems = ({ toDoItems, onDeleteClick }) => {
  return (
    <div className={styles.itemsContainer}>
      {toDoItems.map((item) => (
        <ToDoItem
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteClick={onDeleteClick}
        ></ToDoItem>
      ))}
    </div>
  );
};

export default ToDoItems;
