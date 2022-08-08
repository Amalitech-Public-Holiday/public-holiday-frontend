import "./SignupForm.scss";
import {useEffect, useState} from "react";

const SignupForm = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [isValid, setIsValid] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [notifications, setNotifications] = useState({});
  const [isSubmit, setIsSubmit] = useState(true);

  useEffect(() => {
    if (password1) {
      checkPassLength(password1, "error1", "pass1");
    } else {
      setIsValid({pass1: false});
    }
  }, [password1]);

  useEffect(() => {
    if (password2) {
      checkPassLength(password2, "error2", "pass2");
    } else {
      setIsValid({pass2: false});
    }
  }, [password2]);

  const checkPassLength = (password, errorKey, isValidKey) => {
    const errorMsg = "Password must be a mininum of 12 characters long!";
    if (password.length < 12) {
        setNotifications({[errorKey]:errorMsg});
        setIsValid({[isValidKey]: true});
      } else {
        setIsValid({[isValidKey]: false});
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

    if (fullname && email && password1 && password2 !== "") {
      if (password1  === password2) {
        setIsSubmit(false);
        setTimeout(() => {
          setNotifications(
            {success: "Account creation successful, you can login now!"}
          );
          setIsSuccess(true);
          setFullname("");
          setEmail("");
          setPassword1("");
          setPassword2("");
          setIsSubmit(true);
        }, 2000);
      } else {
        setNotifications({error3: "Password must be the same!"});
        setIsValid({allPass: true});
      }
    }
  }

  return (
    <div className="SignupForm">
      <form autoComplete="true" onSubmit={handleSubmit}>
        {isSuccess && (
          <div className="notification success">{notifications.success}
            <span onClick={() =>(setIsSuccess(false))}>X</span>
          </div>
        )}
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
          {isValid.pass1 && (
            <span className="invalid">{notifications.error1}</span>
          )}
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
          {isValid.pass2 && (
            <span className="invalid">{notifications.error2}</span>
          )}
        </div>
        <div>
          {isValid.allPass && (
            <span className="invalid">{notifications.error3}</span>
          )}
          <button type="submit" className="green">
            {isSubmit ? "Submit" : "Submitting..."}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
