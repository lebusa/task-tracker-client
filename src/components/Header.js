import React from "react";
import { useLocation } from 'react-router-dom';
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, addTask, showAddTask }) => {
  const location = useLocation();
  return (
    <header className="header" style={{}}>
      <h1>{title}</h1>
      {location.pathname === "/" && <Button name={showAddTask ? "Close": "Add"} bgClr={showAddTask ? "red" : ""}onClick={addTask} />}
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
