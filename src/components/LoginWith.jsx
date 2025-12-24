import { useContext } from "react";
import { BsGoogle } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const LoginWith = () => {
  const { googleSignIn } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        toast.success("google login done");
      })
      .catch(() => {
        toast.error("google login failed");
      });
  };
  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Login With</h1>
      <div className="flex flex-col gap-2">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline btn-ghost text-blue-500"
        >
          <BsGoogle color="blue"></BsGoogle> Login with google
        </button>
        <button className="btn btn-outline btn-ghost">
          <FaGithub></FaGithub> Login with github
        </button>
      </div>
    </div>
  );
};

export default LoginWith;
