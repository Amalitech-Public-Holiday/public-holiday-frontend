import "./SignupForm.scss";

const SignupForm = () => {
    return (
      <form className="SignupForm">
        <div>
          <label htmlFor="fullname">Full name:</label>
          <input type="text" name="fullname" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="password1">Password:</label>
          <input type="password" name="password1" />
        </div>
        <div>
          <label htmlFor="password2">Retype password:</label>
          <input type="password" name="password2" />
        </div>
        <div>
            <input type="submit"/>
        </div>
      </form>
    );
}

export default SignupForm;