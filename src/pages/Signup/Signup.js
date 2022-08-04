import "./Signup.scss";
import NavBar from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className="Signup">
            <NavBar>
                <Link to="/login">Login</Link>
            </NavBar>
            <h2>Signup Page</h2>
        </div>
    );
}

export default Signup;