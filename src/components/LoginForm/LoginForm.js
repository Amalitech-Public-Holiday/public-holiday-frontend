import "./LoginForm.scss";
import { useState } from "react";

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
      alert('Signup successful');
      setEmail('');
      setPassword('');
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
