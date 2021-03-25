import { useState } from 'react';

const Tasks = ({tasks}) => {
    
    return (
        <>
          {tasks.map((task,i) => <p key={i}>{task.title}</p>)}  
        </>
    )
}

export default Tasks
