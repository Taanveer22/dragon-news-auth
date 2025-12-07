import { NavLink } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex justify-between items-center">
      <div className="">{user.name}</div>
      <div className="text-lg text-gray-500 space-x-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex gap-2 items-center">
        <img src={userIcon} className="w-8" />
        <NavLink to="/auth/login" className="btn btn-sm btn-success">
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
