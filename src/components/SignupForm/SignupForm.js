import "./SignupForm.scss";

const SignupForm = () => {
  return (
    <div className="SignupForm">
      <form autoComplete="true">
        <div>
          <label htmlFor="fullname">Full name:</label>
          <input type="text" name="fullname" autoFocus={true}/>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="password1">Password:</label>
          <input type="password" name="password1" autoComplete="true"/>
        </div>
        <div>
          <label htmlFor="password2">Retype password:</label>
          <input type="password" name="password2" autoComplete="true"/>
        </div>
        <div>
          <input type="submit" className="button green" />
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
