import "./LoginForm.scss";
import { useState } from "react";
import LoginUser from "../../controllers/login";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = ({target}) => {
    setEmail(target.value);  
  }

  const handlePassword = ({target}) => {
    setPassword(target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password !== '') {
      LoginUser(email, password).then(result => {
        if (result.status) {
          alert(`User ${result.username} has logged in successfully!`);
          setEmail('');
          setPassword('');
        } else if (result.error404) {
          alert(result.error404);
        } else {
          alert(result.error500);
        }
      })
    }
  }
  return (
    <div className="LoginForm">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" value={email} onChange={handleEmail} autoFocus required/>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" value={password} onChange={handlePassword} required/>
        </div>
        <div>
          <button type="submit" className="button green">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
