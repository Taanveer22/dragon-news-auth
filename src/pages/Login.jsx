import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { signInUser, setUser } = useContext(AuthContext);

  const location = useLocation();
  // console.log(location);
  const navigate = useNavigate();
  // console.log(navigate);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({ email, password });

    // ==== sign in user function =====
    signInUser(email, password)
      .then((result) => {
        const userData = result.user;
        setUser(userData);
        // console.log(userData);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-md shrink-0">
        <form onSubmit={handleFormSubmit} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
        <div className="text-lg font-medium text-center">
          <span>Don't have an account? </span>
          <span className="text-red-500">
            <Link to="/auth/register">Register</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
