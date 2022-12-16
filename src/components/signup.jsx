import google from "../assets/google-logo.png";

function Signup() {
  return (
    <div>
      <form action="../signup" method="POST">
        <label htmlFor="name"></label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          placeholder="First name"
          className="param"
        />
        <br />

        <label htmlFor="player"></label>
        <br />
        <input
          type="text"
          id="player"
          name="player"
          placeholder="Player name"
          className="param"
        />
        <br />

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

        <label htmlFor="confirm-password"></label>
        <br />
        <input
          type="password"
          id="confirm-password"
          name="confirm-password"
          placeholder="Confirm password"
          className="param"
        />
        <br />
        <div className="wrapper-buttons">
          <input type="submit" value="Let's Go!" id="signup" />
          <input type="submit" value="Sign up with Google" className="google" />
        </div>
      </form>
    </div>
  );
}

export default Signup;
