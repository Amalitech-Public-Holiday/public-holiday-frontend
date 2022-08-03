import "./Homepage.scss";
import { Link } from "react-router-dom";

const Homepage = () => {
    return (
      <div className="Homepage">
        <h1>Welcome to React Public Holidays</h1>
        <p>Discover holidays in countries with a month and/or day in a year.</p>
        <div className="buttons">
          <div className="row">
            <Link to="#" className="button blue column">Signup</Link>
            <Link to="#" className="button column">Login</Link>
          </div>
        </div>
      </div>
    );
}

export default Homepage;