import { Link } from "react-router-dom";
import { useEffect } from "react";

const About = ({numberOfTasks}) => {
  useEffect(() => {
    document.title = "About | Tasks Tracker";
  });

  return (
    <div className="container about">
      <h4>Version: 1.0.0</h4>
      
      <h4>Developer: Motebang Lebusa</h4>
      
      Go to <Link to="/" className="">
        Tasks {numberOfTasks}
      </Link>
      

      <p>Credits:{" "}
        <Link
          to={{pathname: "https://www.youtube.com/watch?v=w7ejDZ8SWv8"}}
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
