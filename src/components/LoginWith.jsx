import { BsGoogle } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const LoginWith = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Login With</h1>
      <div className="flex flex-col gap-2">
        <button className="btn btn-outline btn-ghost text-blue-500">
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
