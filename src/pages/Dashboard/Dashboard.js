import { useSelector } from "react-redux/";

const Dashboard = () => {
    const auth = useSelector((state) => state.auth);

  return (
    <div>
      <h1>Welcome, {auth.authStatus && auth.username}</h1>
    </div>
  );
};

export default Dashboard;
