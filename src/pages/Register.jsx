import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { createNewUser, signOutUser, updateProfileForUser } =
    useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    // console.log(form);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    // console.log({ name, photo, email, password });

    // ====== reset state status ===
    setErrorMessage("");

    // ====== validation ====
    if (name.length < 4) {
      setErrorMessage("name should be more than 4 characters");
    }

    if (password.length < 6) {
      setErrorMessage("password should be more then 6 characters");
    }

    // ======= create new user function ============
    createNewUser(email, password)
      .then(() => {
        toast.success("register user done");
        // update profile for user
        updateProfileForUser({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/");
            toast.success("profile updated");
          })
          .catch(() => {
            toast.error("profile not updated");
          });
      })
      .catch(() => {
        toast.error("failed to register user");
      });

    // ======== sign out function ==========
    signOutUser()
      .then(() => {
        toast.success("sign out successful");
      })
      .catch(() => {
        toast.error("sign out failed");
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
