import React from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, addTask, showAddTask }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          name={showAddTask ? "Close" : "Add"}
          bgClr={showAddTask ? "rgb(236, 22, 22)" : ""}
          onClick={addTask}
        />
      )}
    </header>
  );
};

// sample default values for title & date?
Header.defaultProps = {
  title: "Task Tracker",
  date: "23 March 2021",
};

Header.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
};

export default Header;

// rgb(236, 22, 22);
