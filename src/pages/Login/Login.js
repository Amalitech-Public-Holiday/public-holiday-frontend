import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import "./Login.scss";

const Login = () => {
    return(
        <div className="Login">
            <NavBar>
                <Link to="/signup">Signup</Link>
            </NavBar>
            <h2>Login Page</h2>
        </div>
    );
}

export default Login;