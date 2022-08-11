import "./LoginForm.scss";
import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = ({target}) => {
    setEmail(target.value);  
  }

  return (
    <div className="LoginForm">
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" value={email} onChange={handleEmail} autoFocus/>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" />
        </div>
        <div>
          <input type="submit" className="button green" />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
