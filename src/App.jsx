import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import "./App.css";
import ToDoItem from "./components/ToDoItem";
import ToDoItems from "./components/ToDoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
function App() {
  const initialToDoItems = [];
  const [toDoItems, setToDoItems] = useState(initialToDoItems);
  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added ${itemName} Date: ${itemDueDate}`);
    const newToDoItems = [
      ...toDoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setToDoItems(newToDoItems);
  };
  const handleDeleteItem = (todoItemName) => {
    const newToDoItems = toDoItems.filter((item) => item.name != todoItemName);
    setToDoItems(newToDoItems);
  };
  return (
    <center className="todo-container">
      <AppName />
      <AddToDo onNewItem={handleNewItem} />
      {toDoItems.length === 0 && <WelcomeMessage />}
      <ToDoItems toDoItems={toDoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;
