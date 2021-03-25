import { FaTrashAlt } from "react-icons/fa";

const Task = ({ task, onDelete, toggleReminder }) => {
  const Emoji = props => (
    <span
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
        {props.symbol}
    </span>);

  const dt = new Date(task.scheduledFor).toLocaleDateString();
  const tm = new Date(task.scheduledFor).toLocaleTimeString();
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => toggleReminder(task.id)}
    >
      <h3>
        {task.title} <Emoji symbol="👌🏾"/>
        <FaTrashAlt className="task-remove" onClick={() => onDelete(task.id)} />
      </h3>
      <p>
        {dt} @ {tm}
      </p>
    </div>
  );
};

export default Task;
