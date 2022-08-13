import "./LoginForm.scss";
import { useState } from "react";
import LoginUser from "../../controllers/login";
import { useDispatch } from "react-redux/";
import { login } from "../../features/AuthSlice";
import { useNavigate, Link } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [notifications, setNotifications] = useState({});
  const [isError, setIsError] = useState(false);
  const [isSuccess, SetISuccess] = useState(false);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEmail = ({target}) => {
    setEmail(target.value);  
  }

  const handlePassword = ({target}) => {
    setPassword(target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password !== '') {
      setIsDisabled(true);
      LoginUser(email, password).then(result => {
        if (result.status) {
          setNotifications({success: 'Login successful, loading dashboard...'});
          SetISuccess(true);
          dispatch(login(result.username));
          setIsDisabled(false);
          setEmail('');
          setPassword('');
          setTimeout(()=> navigate('/dashboard'), 2000);
        } else if (result.error404) {
          setNotifications({error: result.error404});
          setIsError(true);
          setIsDisabled(false);
        } else {
          alert(result.error500);
          setIsDisabled(false);
        }
      }).catch(error => console.log(error));
    }
  }
  return (
    <div className="LoginForm">
      <form onSubmit={handleSubmit}>
        {isError && (
          <div className="notification error">
            {notifications.error}
            <span onClick={() => setIsError(false)}>X</span>
          </div>
        )}
        {isSuccess && (
          <div className="notification success">
            {notifications.success}
          </div>
        )}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmail}
            autoFocus
            required
            disabled={isDisabled}
            placeholder="Enter registered email"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
            required
            disabled={isDisabled}
            placeholder="Enter registered password"
          />
        </div>
        <p>
          Forgot password? reset <Link to="#">here</Link>
        </p>
        <div>
          <button type="submit" className="button green" disabled={isDisabled}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
