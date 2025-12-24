import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");

  const location = useLocation();
  // console.log(location);
  const navigate = useNavigate();
  // console.log(navigate);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log({ email, password });

    // reset state status
    setErrorMessage("");

    // ==== sign in user function =====
    signInUser(email, password)
      .then(() => {
        toast.success("login done");
        navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        toast.error("login failed");
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
              required
            />
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
        {errorMessage && (
          <p className="text-lg font-medium text-red-500">{errorMessage}</p>
        )}
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
