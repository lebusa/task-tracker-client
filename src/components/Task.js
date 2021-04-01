import { FaTrashAlt } from "react-icons/fa";

const Task = ({ task, onDelete, toggleReminder }) => {
  const time = new Date(task.scheduledFor);
  const dt = time.toLocaleDateString();
  const tm = time.toLocaleTimeString();
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => toggleReminder(task.id)}
    >
      <h3>
        {task.title} 
        <FaTrashAlt className="task-remove" onClick={() => onDelete(task.id)} />
      </h3>
      <small>
        {dt} @ {tm}
      </small>
    </div>
  );
};

export default Task;
