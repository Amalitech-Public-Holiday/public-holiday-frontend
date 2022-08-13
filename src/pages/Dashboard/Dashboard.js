import "./Dashboard.scss";
import { useSelector, useDispatch } from "react-redux/";
import { logout } from "../../features/AuthSlice";
import NavBar from "../../components/NavBar/NavBar";
import DashboardForm from "../../components/Dashboard/DashboardForm/DashboardForm";
import DashboardResults from "../../components/Dashboard/DashboardResults/DashboardResults";
import HolidayItem from "../../components/HolidayItem/HolidayItem";

const Dashboard = () => {

const holidays = [
  HolidayItem,
  HolidayItem,
  HolidayItem,
  HolidayItem
];
const auth = useSelector((state) => state.auth);
const dispatch = useDispatch();

const handleLogout = () => {
    dispatch(logout());
}
  return (
    <div className="Dashboard">
      <NavBar>
        <li>
          <p>{auth.username}</p>
        </li>
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </NavBar>
      <DashboardForm />
      <DashboardResults>
        <HolidayItem />
        <HolidayItem />
        <HolidayItem />
        <HolidayItem />
        <HolidayItem />
      </DashboardResults>
    </div>
  );
};

export default Dashboard;
