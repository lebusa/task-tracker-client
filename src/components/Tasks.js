import Task from './Task';

const Tasks = ({tasks, onDelete}) => {
    
    return (
        <>
          {tasks.map((task,i) => 
          <Task key={i} task={task} onDelete={onDelete}/>
          )}  
        </>
    )
}

export default Tasks
