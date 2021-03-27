import { useEffect } from "react";
import Task from "./Task";

const Tasks = ({ tasks, onDelete, toggleReminder }) => {
  useEffect(() => {
    // set doc title
    document.title = "Tasks | Tasks Tracker";
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
