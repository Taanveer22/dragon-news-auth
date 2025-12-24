import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Privacy from "../components/Privacy";

const AuthLayout = () => {
  return (
    <div className="bg-base-300">
      <header className="w-11/12 mx-auto py-5">
        <Navbar></Navbar>
      </header>
      <div>
        <Privacy></Privacy>
      </div>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayout;
