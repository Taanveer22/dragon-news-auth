import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createNewUser, signOutUser, setUser, updateProfileForUser } =
    useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [successText, setSuccessText] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    console.log(form);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log({ name, photo, email, password });

    // ====== reset state status ===
    setErrorMessage("");
    setSuccessText("");

    // ====== validation ====
    if (name.length < 4) {
      setErrorMessage("name should be more than 4 characters");
    }

    if (password.length < 6) {
      setErrorMessage("password should be more then 6 characters");
    }

    // ======= create new user function ============
    createNewUser(email, password)
      .then((result) => {
        const userData = result.user;
        setUser(userData);
        // console.log(userData);
        // update profile for user
        updateProfileForUser({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/");
          })
          .catch((error) => {
            setErrorMessage(error.message);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode, errorMessage);
        setErrorMessage(`${errorCode} : ${errorMessage}`);
      });

    // ======== sign out function ==========
    signOutUser()
      .then(() => {
        setSuccessText("sign out successful");
      })
      .catch(() => {
        setErrorMessage("an error happened to sign out");
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-md shrink-0">
        <form onSubmit={handleFormSubmit} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
            />
            <label className="label">Photo</label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo Url"
            />
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
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </form>
        {errorMessage && (
          <p className="text-lg font-medium text-red-500">{errorMessage}</p>
        )}
        {successText && (
          <p className="text-lg font-medium text-red-500">{successText}</p>
        )}
        <div className="text-lg font-medium text-center">
          <span>Already have an account? </span>
          <span className="text-red-500">
            <Link to="/auth/login">Login</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
