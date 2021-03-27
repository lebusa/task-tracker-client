import { Link } from "react-router-dom";
import { useEffect } from "react";

const About = ({numberOfTasks}) => {
  useEffect(() => {
    document.title = "About | Tasks Tracker";
  });

  return (
    <div className="container about">
      <h5>Version: 1.0.0</h5>
      
      <h6>Developer: Motebang Lebusa</h6>
      
      <Link to="/" className="link tasks-link ">
        Tasks {numberOfTasks}
      </Link>
      

      <p>Credits:{" "}
        <Link
          to="https://www.youtube.com/watch?v=w7ejDZ8SWv8"
          rel="noreferrer"
          target="_blank"
          className="link"
        >
          Traversy Media React Crash Course 2021
        </Link>
      </p>

     
    </div>
  );
};

export default About;
