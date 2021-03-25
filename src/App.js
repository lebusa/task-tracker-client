import { useState, useEffect } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";
// import axios from 'axios';

const API_URL = new URL("http://localhost:4000/api/tasks");

function App() {
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  const [tasks, setTasks] = useState([]);


  // fetch tasks from a tasks server api
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromApi = await fetchTasks();
      setTasks(tasksFromApi);
    }
    getTasks();
  }, []);

const fetchTasks = async () => {
      const res = await fetch(API_URL);
      console.log('onto something..')
      return await res.json();
    }

  // toggle task add form
  const toggledAddTask = () => {
    setShowAddTaskForm(!showAddTaskForm);
  }

  // add task, given its object
  const addTask = (task) => {
    const id = (new Date()).getTime();
    const newTask = {...task, id};
    setTasks([...tasks, newTask]);
  };

  // delete task, given its id
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // toggle task, given its id
  const toggleReminder = (taskId) => {
    setTasks(tasks.map((task) => task.id === taskId ? {...task, reminder: ! task.reminder} :  task));
  };

  return (
    <div className="container">
      <Header addTask={toggledAddTask} showAddTask={showAddTaskForm} />
      {showAddTaskForm && <AddTask onAdd={addTask}/>}
      {tasks.length ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          toggleReminder={toggleReminder}
        />
      ) : (
        "No tasks to show"
      )}
      <Footer />
    </div>
  );
}

export default App;
