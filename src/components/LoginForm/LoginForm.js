const LoginForm = () => {
  return (
    <div className="LoginForm">
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="fullname" />
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
