import { useSelector, useDispatch } from "react-redux/";
import { logout } from "../../features/AuthSlice";
import NavBar from "../../components/NavBar/NavBar";
import "./Dashboard.scss";

const Dashboard = () => {
const auth = useSelector((state) => state.auth);
const dispatch = useDispatch();

const handleLogout = () => {
    dispatch(logout());
}
  return (
    <div className="Dashboard">
      <NavBar>
        <li>
          <span>{auth.username}</span>
        </li>
        <li>
          <button>Logout</button>
        </li>
      </NavBar>
      <h1>Welcome, {auth.username}</h1>
    </div>
  );
};

export default Dashboard;
