import "./LoginForm.scss";
import { useState } from "react";
import LoginUser from "../../controllers/login";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

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
          alert(`User ${result.username} has logged in successfully!`);
          setIsDisabled(false);
          setEmail('');
          setPassword('');
        } else if (result.error404) {
          alert(result.error404);
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
          />
        </div>
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
