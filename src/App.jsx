import React, { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import TodoIcon from "./assets/direct-hit.png";
import DoingIcon from "./assets/glowing-star.png";
import DoneIcon from "./assets/check-mark-button.png";
import Cookies from "js-cookie";

// const oldTasks = localStorage.getItem("tasks");
const oldTasks = "tasks";

console.log(oldTasks);
// const oldTasks = Cookies.get(tasks);

const App = () => {
  // const oldTasks = Cookies.get("taskData");

  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    Cookies.set("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);
  // useEffect(() => {
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };
  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app-main">
        <TaskColumn
          columnName="ToDo"
          icon={TodoIcon}
          tasks={tasks}
          status="todo"
          handleDelete={handleDelete}
        />
        <TaskColumn
          columnName="Doing"
          icon={DoingIcon}
          tasks={tasks}
          status="doing"
          handleDelete={handleDelete}
        />
        <TaskColumn
          columnName="Done"
          icon={DoneIcon}
          tasks={tasks}
          status="done"
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
};

export default App;
