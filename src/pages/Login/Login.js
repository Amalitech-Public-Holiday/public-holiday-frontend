import "./Login.scss";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import LoginForm from "../../components/LoginForm/LoginForm";
import { Link } from "react-router-dom";

const Login = () => {
    return(
        <div className="Login">
            <NavBar>
                <Link to="/signup">Signup</Link>
            </NavBar>
            <h2 className="text-xlarge">Login to access</h2>
            <LoginForm/>
            <Footer/>
        </div>
    );
}

export default Login;