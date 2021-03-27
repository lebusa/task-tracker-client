import { Link } from 'react-router-dom';
const About = () => {
    return (
        <div>
            <h3>App: Task Tracker</h3>
            <h5>Version: 1.0.0</h5>
            <h6>Developer: M. Lebusa</h6>

            <Link to="/" className="link">Tasks</Link>
        </div>
    )
}

export default About
