import "../styling/login.css"


function Login() {
  return (
    <div>
      <form action="/login" method="GET" className="login-form">
          <h3>Welcome Back!</h3>
        <label htmlFor="email"></label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="param"
        />
        <br />
        <label htmlFor="password"></label>
        <br />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          className="param"
        />
        <br />
        <div className="wrapper-buttons">
          <input type="submit" value="Login" id="login" />
          <input type="submit" value="Sign in with Google" className="google" />
        </div>
      </form>
    </div>
  );
}

export default Login;
