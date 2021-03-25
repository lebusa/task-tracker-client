import  { FaTrashAlt } from 'react-icons/fa';

const Task = ({task}) => {
    return (
        <div className="task">
            <h3>
                {task.title}
                <FaTrashAlt className="task-remove"/>
            </h3>
            <p>{task.scheduledFor}</p>
        </div>
    )
}

export default Task
