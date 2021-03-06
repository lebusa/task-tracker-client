import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";
import About from "./components/About";

// substitute these with your environment values
const BACKEND_URL = "http://192.168.0.100";
const BACKEND_PORT = "3002";

const API_URL = new URL(`${BACKEND_URL}:${BACKEND_PORT}/api/tasks`);

function App() {
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  const [tasks, setTasks] = useState([]);

  // fetch tasks from a tasks server api
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromApi = await fetchTasks();
      setTasks(
        // take care of mongodb/mongoose doc props _id
        tasksFromApi.map((t) => {
          if(t.hasOwnProperty("_id")) {
            t["id"] = t._id;
            delete t["_id"];
          }
          return t;
        })
      );
    };
    // make a call for tasks
    getTasks();
  }, []);

  // fetch tasks from the server
  const fetchTasks = async () => (await axios.get(API_URL)).data;

  // toggle task add form
  const toggledAddTask = () => {
    setShowAddTaskForm(!showAddTaskForm);
  };

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
    let taskToUpdate = tasks.filter((task) => task.id === taskId)[0];
    taskToUpdate.reminder = !taskToUpdate.reminder;
    await axios.put(`${API_URL}/${taskId}`, {
      reminder: taskToUpdate.reminder,
    });
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, reminder: taskToUpdate.reminder } : task
      )
    );
  };

  return (
    <Router>
      <div className="container">
      <Header addTask={toggledAddTask} showAddTask={showAddTaskForm} />
        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {showAddTaskForm && <AddTask onAdd={addTask} />}
              {tasks.length ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  toggleReminder={toggleReminder}
                />
              ) : (
                "No tasks to show"
              )}
            </>
          )}
        />
        <Route path="/about" component={About} title="About | Tasks Tracker"/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
