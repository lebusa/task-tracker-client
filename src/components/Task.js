import { FaTrashAlt } from "react-icons/fa";

const Task = ({ task, onDelete, toggleReminder }) => {
  const dt = new Date(task.scheduledFor).toLocaleDateString();
  const tm = new Date(task.scheduledFor).toLocaleTimeString();
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => toggleReminder(task.id)}
    >
      <h3>
        {task.title}
        <FaTrashAlt className="task-remove" onClick={() => onDelete(task.id)} />
      </h3>
      <p>
        {dt} @ {tm}
      </p>
    </div>
  );
};

export default Task;
