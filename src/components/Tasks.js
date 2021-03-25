import Task from './Task';

const Tasks = ({tasks}) => {
    
    return (
        <>
          {tasks.map((task,i) => 
          <Task key={i} task={task} />
          )}  
        </>
    )
}

export default Tasks
