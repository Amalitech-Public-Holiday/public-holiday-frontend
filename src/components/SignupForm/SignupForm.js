import "./SignupForm.scss";
import {useEffect, useState} from "react";

const SignupForm = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [isValid, setIsInvaid] = useState(false);
  const [invalidMsg, setInvalidMsg] = useState({});

  useEffect(() => {
    if (password1) {
      checkPassLength(password1, {error1: "Password must be a mininum of 12 characters long."});
    }
  }, [password1]);

  useEffect(() => {
    if (password2) {
      checkPassLength(password2, {error2: "Password must be a mininum of 12 characters long."});
    }
  }, [password2]);

  const checkPassLength = (password, message) => {
    if (password.length < 12) {
        setInvalidMsg(message);
        setIsInvaid(true);
      } else {
        setIsInvaid(false);
      }
  };

  const handleFullname = ({ target }) => {
    setFullname(target.value);
  };

  const handleEmail = ({ target }) => {
    setEmail(target.value);
  };

  const handlePassword1 = ({ target }) => {
    setPassword1(target.value);
  };

  const handlePassword2 = ({ target }) => {
    setPassword2(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="SignupForm">
      <form autoComplete="true" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullname">Full name:</label>
          <input
            type="text"
            name="fullname"
            value={fullname}
            autoFocus={true}
            onChange={handleFullname}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmail}
            required
          />
        </div>
        <div>
          <label htmlFor="password1">Password:</label>
          <input
            type="password"
            name="password1"
            value={password1}
            autoComplete="true"
            onChange={handlePassword1}
            required
          />
          <span>{isValid && invalidMsg.error1}</span>
        </div>
        <div>
          <label htmlFor="password2">Retype password:</label>
          <input
            type="password"
            name="password2"
            value={password2}
            autoComplete="true"
            onChange={handlePassword2}
            required
          />
          <span>{isValid && invalidMsg.error2}</span>
        </div>
        <div>
          <input type="submit" className="button green" />
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
