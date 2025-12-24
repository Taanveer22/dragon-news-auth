import { NavLink } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  // console.log(user);
  const handleSignOutUser = () => {
    signOutUser()
      .then(() => {
        toast.success("sign out successful");
      })
      .catch(() => {
        toast.error("sign out failed");
      });
  };

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-base font-medium">
        {user ? user.displayName : "Signed out user"}
      </h1>

      <div className="text-lg text-gray-500 space-x-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>

      <div className="flex gap-2 items-center">
        <div>
          {user && user?.email ? (
            <img src={user.photoURL} className="w-10 rounded-full" />
          ) : (
            <img src={userIcon} className="w-10" />
          )}
        </div>
        <div>
          {user && user?.email ? (
            <button
              onClick={handleSignOutUser}
              className="btn btn-sm btn-error"
            >
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
