import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUsOn = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Find Us On</h1>
      <div className="join join-vertical w-full">
        <button className="btn join-item justify-start">
          <FaFacebook color="blue"></FaFacebook> Facebook
        </button>
        <button className="btn join-item justify-start">
          <FaTwitter color="skyblue"></FaTwitter> Twitter
        </button>
        <button className="btn join-item justify-start">
          <FaInstagram color="red"></FaInstagram> Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUsOn;
