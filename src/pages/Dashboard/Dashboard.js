import "./Dashboard.scss";
import { useSelector, useDispatch } from "react-redux/";
import { logout } from "../../features/AuthSlice";
import NavBar from "../../components/NavBar/NavBar";
import DashboardForm from "../../components/Dashboard/DashboardForm/DashboardForm";
import DashboardResults from "../../components/Dashboard/DashboardResults/DashboardResults";
import HolidayItem from "../../components/HolidayItem/HolidayItem";

const Dashboard = () => {

const auth = useSelector((state) => state.auth);
const holidays = useSelector(state => state.holiday.holidays);
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
        {
          holidays.length === 0 ?
          <p style={{textAlign: "center"}}>No holidays available</p> :
          holidays.map(holiday => <HolidayItem key={holiday.name} data={holiday}/>)
        }
      </DashboardResults>
    </div>
  );
};

export default Dashboard;
