import bunny from "../assets/signup_bunny.png";
import "../styling/shared.css";

function Shared() {
    
  const [loginPage, setLoginPage] = useState(true);

  return (
    <div className="shared-login-signup">
      <h1>The Mind Game</h1>
      <div className="flex-img-form">
        <img src={bunny} alt="Mr. Bunny" />

        <div className="shared-form">
          <div className="wrapper">
            <p className="login-text">Login</p>
            <p className="signup-text">Signup</p>
            <label
              onChange={() => {
                setLoginPage(!loginPage);
              }}
              className="switch"
            >
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
          <h1>{loginPage ? "Login" : "Singup"}</h1>
        </div>
      </div>
    </div>
  );
}

export default Shared;
