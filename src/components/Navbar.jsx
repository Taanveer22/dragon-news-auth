import { NavLink } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="flex justify-between items-center">

      <h1 className="text-base font-medium">{user && user.email}</h1>

      <div className="text-lg text-gray-500 space-x-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      
      <div className="flex gap-2 items-center">
        <div>
          {user && user?.email ? (
            <div className="flex gap-2 items-center">
              <p>{user.displayName}</p>
              <img src={user.photoURL} className="w-10 rounded-full" />
            </div>
          ) : (
            <img src={userIcon} className="w-10" />
          )}
        </div>
        <div>
          {user && user?.email ? (
            <button onClick={signOutUser} className="btn btn-sm btn-error">
              Signout
            </button>
          ) : (
            <NavLink to="/auth/login" className="btn btn-sm btn-success">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
