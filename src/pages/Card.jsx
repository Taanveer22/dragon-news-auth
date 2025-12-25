import { FaRegEye } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import { FaShareNodes } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Card = ({ newsData }) => {
  // console.log(newsData);
  const { user } = useContext(AuthContext);
  // console.log(user);

  // Check if newsData exists before rendering
  if (!newsData) {
    return (
      <div className="text-yellow-500 text-4xl font-bold">
        Loading card news data...
      </div>
    );
  }

  return (
    <>
      <div className="card bg-base-300 shadow-sm">
        <div className="card-actions justify-between items-center bg-gray-400 p-2">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <img
                src={newsData?.author?.img || "https://placehold.co/10x10"}
                className="w-10 h-10 rounded-full"
              />
              <div className="">
                <h1>{newsData?.author?.name || "N/A"}</h1>
                <p>
                  {new Date(
                    newsData?.author?.published_date
                  ).toLocaleDateString() || "N/A"}
                </p>
              </div>
            </div>
          </div>

          <div className="text-xl font-medium">
            <p>{user?.displayName}</p>
          </div>

          <div className="flex items-center gap-2">
            <FaBookmark></FaBookmark>
            <FaShareNodes></FaShareNodes>
          </div>
        </div>
        <h2 className="card-title my-3">{newsData?.title || "N/A"}</h2>
        <figure>
          <img src={newsData?.image_url || "https://placehold.co/600x400"} />
        </figure>
        <div className="card-body">
          <p className="text-justify text-sm">
            {newsData?.details.slice(0, 200) || "N/A"}....
          </p>
          <p className="text-blue-500 underline font-medium text-lg">
            <Link to={`/news/${newsData._id}`}>Read More</Link>
          </p>
          <div className="card-actions justify-between">
            <div className="flex items-center gap-2">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="1 star"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="2 star"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="3 star"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="4 star"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="5 star"
                />
              </div>
              <button className="btn btn-ghost">
                {newsData?.rating?.number || 0}
              </button>
            </div>

            <div className="flex items-center gap-2">
              <FaRegEye></FaRegEye>
              <button className="btn btn-ghost">
                {newsData?.total_view || 0}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
