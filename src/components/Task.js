import  { FaTrashAlt } from 'react-icons/fa';

const Task = ({task, onDelete}) => {
    return (
        <div className="task">
            <h3>
                {task.title}
                <FaTrashAlt className="task-remove" onClick={ () => onDelete(task.id)} />
            </h3>
            <p>{task.scheduledFor}</p>
        </div>
    )
}

export default Task
