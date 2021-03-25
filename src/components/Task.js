import  { FaTrashAlt } from 'react-icons/fa';

const Task = ({task, onDelete, toggleReminder}) => {
    return (
        <div className="task" onDoubleClick={() => toggleReminder(task.id)}>
            <h3>
                {task.title}
                <FaTrashAlt className="task-remove" onClick={ () => onDelete(task.id)} />
            </h3>
            <p>{task.scheduledFor}</p>
        </div>
    )
}

export default Task
