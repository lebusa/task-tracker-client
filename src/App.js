import { useState, useEffect } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";
import axios from 'axios';

const API_URL = new URL("http://localhost:4000/api/tasks");

function App() {
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  const [tasks, setTasks] = useState([]);


  // fetch tasks from a tasks server api
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromApi = await fetchTasks();
      setTasks(tasksFromApi.map( t => { 
        let newTask =   {...t, id:t._id}
        delete newTask['_id'];
        return newTask;
      }));
    }
    getTasks();
  }, []);

const fetchTasks = async () => (await axios.get(API_URL)).data;

  // toggle task add form
  const toggledAddTask = () => {
    setShowAddTaskForm(!showAddTaskForm);
  }

  // add task, given its object
  const addTask = async (task) => {
    const newTask = (await axios.post(API_URL, task)).data;
    setTasks([...tasks, newTask]);
  };

  // delete task, given its id
  const deleteTask = async (taskId) => {
    await axios.delete(`${API_URL}/${taskId}`);
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // toggle task, given its id
  const toggleReminder = async (taskId) => {
    let taskToUpdate = tasks.filter( task => task.id === taskId)[0];
    taskToUpdate.reminder = !taskToUpdate.reminder;
    await axios.put(`${API_URL}/${taskId}`, {reminder: taskToUpdate.reminder});
    setTasks(tasks.map((task) => task.id === taskId ? {...task, reminder: taskToUpdate.reminder } :  task));
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
