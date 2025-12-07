import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-md shrink-0">
        <form className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input type="text" className="input" placeholder="Name" />
            <label className="label">Photo Url</label>
            <input type="text" className="input" placeholder="Photo Url" />
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
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
