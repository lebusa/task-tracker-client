const tasks = [
    {
        title: "'na ke tla pele",
        scheduledFor: "2021-03-15T12:23:44.874Z",
        reminder: false
    },
    {
        title: "'na kea tsamaea",
        scheduledFor: "2021-03-20T12:45:44.874Z",
        reminder: true
    },
    {
        title: "'na ke popa ntha tse monate",
        scheduledFor: "2021-03-25T16:45:44.874Z",
        reminder: true
    },
    {
        title: "Lintle o setse Botha-Bothe",
        scheduledFor: "2021-03-10T16:04:44.874Z",
        reminder: false
    },
];

const Tasks = () => {
    return (
        <>
          {tasks.map((task,i) => <p key={i}>{task.title}</p>)}  
        </>
    )
}

export default Tasks
