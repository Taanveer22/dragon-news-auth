import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createNewUser, setUser } = useContext(AuthContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    console.log(form);
    const name = form.get("name");
    const photoUrl = form.get("photo-url");
    const email = form.get("email");
    const password = form.get("password");
    console.log({ name, photoUrl, email, password });

    createNewUser(email, password)
      .then((result) => {
        const userData = result.user;
        setUser(userData);
        // console.log(userData);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
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
            <label className="label">Photo Url</label>
            <input
              name="photo-url"
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
