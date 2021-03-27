import React from "react";
import { Link } from 'react-router-dom';

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="col"></div>

      <small>
        Credits:{" "}
        <Link
          to="https://www.youtube.com/watch?v=w7ejDZ8SWv8"
          rel="noreferrer"
          target="_blank"
          className="link"
        >
          Traversy Media
        </Link>
      </small>

      <div>Copyright &copy; 2021. Lebusa, M.</div>
      <div>
        <Link to="/about" className="link"> About</Link>
      </div>
    </footer>
  );
};

export default Footer;
