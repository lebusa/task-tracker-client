import PropTypes from "prop-types";
import React from "react";
import Button from "./Button";

const Header = ({ title, addTask, showAddTask }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button name={showAddTask ? "Close": "Add"} bgClr={showAddTask ? "red" : "green"}onClick={addTask} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
  date: "23 March 2021",
};

Header.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
};

export default Header;
