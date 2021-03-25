import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      title: "'na ke tla pele",
      scheduledFor: "2021-03-15T12:23:44.874Z",
      reminder: false,
      id: 1616687637698,
    },
    {
      title: "'na kea tsamaea",
      scheduledFor: "2021-03-20T12:45:44.874Z",
      reminder: true,
      id: 1616687637694,
    },
    {
      title: "kea sekolong, ke palama schoobase",
      scheduledFor: "2021-03-26T07:45:44.874Z",
      reminder: true,
      id: 1616687637697,
    },
    {
      title: "'na ke popa ntha tse monate",
      scheduledFor: "2021-03-25T16:45:44.874Z",
      reminder: true,
      id: 1616687637696,
    },
    {
      title: "Lintle o setse Botha-Bothe",
      scheduledFor: "2021-03-10T16:04:44.874Z",
      reminder: false,
      id: 1616687637695,
    },
  ]);

  // delete task, given its id
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // toggle task, given its id
  const toggleReminder = (taskId) => {
    //console.log(`toggle reminder...${taskId}`);
    setTasks(tasks.map((task) => task.id === taskId ? {...task, reminder: ! task.reminder} :  task));
  };

  return (
    <div className="container">
      <Header />
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
