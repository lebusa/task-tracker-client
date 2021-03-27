import { Link } from "react-router-dom";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About | Tasks Tracker";
  });

  return (
    <div>
      <h5>Version: 1.0.0</h5>
      
      <h6>Developer: M. Lebusa</h6>

      <Link to="/" className="link">
        Tasks
      </Link>
    </div>
  );
};

export default About;
