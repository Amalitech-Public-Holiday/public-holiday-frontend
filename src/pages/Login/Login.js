import "./Login.scss";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const Login = () => {
    return(
        <div className="Login">
            <NavBar>
                <Link to="/signup">Signup</Link>
            </NavBar>
            <h2>Login to access</h2>
            <Footer/>
        </div>
    );
}

export default Login;