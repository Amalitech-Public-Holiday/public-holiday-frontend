import "./NavBar.scss";

import { NavLink } from "react-router-dom";

const NavBar = (props) => {
    return(
        <div className="NavBar">
            <nav>
                <NavLink to="/">Homepage</NavLink>
                {props.children}
            </nav>
        </div>
    );
}

export default NavBar;