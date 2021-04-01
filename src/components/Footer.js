import React from "react";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div>Copyright &copy; 2021. Lebusa, M.</div>
      <div>
        <Link to="/about" className="link">
          About
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
