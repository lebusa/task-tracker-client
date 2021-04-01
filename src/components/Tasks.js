import { useEffect } from "react";
import Task from "./Task";

const Tasks = ({ tasks, onDelete, toggleReminder }) => {
  useEffect(() => {
    document.title = "Tasks | Tasks Tracker"; // set doc title
  }, []);

  return (
    <>
      {tasks.map((task, i) => (
        <Task
          key={i}
          task={task}
          onDelete={onDelete}
          toggleReminder={toggleReminder}
        />
      ))}
    </>
  );
};

export default Tasks;
