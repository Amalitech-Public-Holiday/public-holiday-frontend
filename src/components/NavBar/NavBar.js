import { NavLink } from "react-router-dom";

const NavBar = () => {
    return(
        <div className="NavBar">
            <nav>
                <NavLink to="/">Homepage</NavLink>
                <NavLink to="/login">Login</NavLink>
            </nav>
        </div>
    );
}

export default NavBar;