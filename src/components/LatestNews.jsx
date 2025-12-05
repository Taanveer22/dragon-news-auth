import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-2 font-semibold text-lg bg-base-300 p-2">
      <button className="btn btn-sm btn-error">Latest</button>
      <Marquee pauseOnHover={true} speed={100} className="space-x-10">
        <Link>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
          veniam?
        </Link>
        <Link>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
          veniam?
        </Link>
        <Link>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
          veniam?
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
