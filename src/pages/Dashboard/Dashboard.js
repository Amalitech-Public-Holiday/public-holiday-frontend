import "./Dashboard.scss";
import { useSelector, useDispatch } from "react-redux/";
import { logout } from "../../features/AuthSlice";
import NavBar from "../../components/NavBar/NavBar";
import DashboardForm from "../../components/Dashboard/DashboardForm/DashboardForm";
import DashboardResults from "../../components/Dashboard/DashboardResults/DashboardResults";

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
          {/* <p>{auth.username}</p> */}
          <p>Prince Asamoah Twumasi</p>
        </li>
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </NavBar>
      <DashboardForm />
      <DashboardResults/>
    </div>
  );
};

export default Dashboard;
