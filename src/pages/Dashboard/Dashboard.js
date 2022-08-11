import { useSelector, useDispatch } from "react-redux/";
import { logout } from "../../features/AuthSlice";

const Dashboard = () => {
const auth = useSelector((state) => state.auth);
const dispatch = useDispatch();

const handleLogout = () => {
    dispatch(logout());
}
  return (
    <div>
      <h1>Welcome, {auth.authStatus && auth.username}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
