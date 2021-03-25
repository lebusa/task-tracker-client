const AddTask = () => {
  return (
    <form className="add-form">
      <div className="form-control">
        <label>Add Task</label>
        <input type="text" placeholder="Add a task" />
      </div>
      <div className="form-control">
        <label>Add day & time</label>
        <input type="text" placeholder="Add dat & time" />
      </div>
      <div className="form-control form-control-check">
        <label>Set reminder</label>
        <input type="checkbox" />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block"  />
    </form>
  );
};

export default AddTask;
