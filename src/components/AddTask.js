import { useState } from "react";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(false);

  return (
    <form className="add-form">
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
        <label>Add day & time</label>
        <input type="text" placeholder="Add day & time" 
          value={date}
          onChange={(e) => setDate(e.target.value)}/>
      </div>
      <div className="form-control form-control-check">
        <label>Set reminder</label>
        <input type="checkbox" 
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}/>
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
