import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if(!title) {
        alert(`Please add a title for the task`);
        return;
    }
    onAdd( { title, scheduledFor:date, reminder } );

    // clear the fields
    setTitle('');
    setDate('');
    setReminder(false);
  }

  return (
    <form className="add-form" onSubmit={onSubmit} >
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & time</label>
        <input type="date" placeholder="Add day & time" 
          value={date}
          onChange={(e) => setDate(e.target.value)}/>
      </div>
      <div className="form-control form-control-check">
        <label>Set reminder</label>
        <input 
          type="checkbox" 
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}/>
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
