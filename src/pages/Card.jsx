import { FaRegEye } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import { FaShareNodes } from "react-icons/fa6";

const Card = ({ newsData }) => {
  // console.log(newsData);

  // Check if newsData exists before rendering
  if (!newsData) {
    return <div>Loading news data...</div>;
  }

  return (
    <>
      <div className="card bg-base-100 shadow-sm">
        <div className="card-actions justify-between items-center bg-gray-200 p-2">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <img
                src={newsData?.author?.img || "N/A"}
                className="w-10 h-10 rounded-full"
              />
              <div className="">
                <h1>{newsData?.author?.name || "N/A"}</h1>
                <p>
                  {new Date(
                    newsData?.author?.published_date || "N/A"
                  ).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <FaBookmark></FaBookmark>
            <FaShareNodes></FaShareNodes>
          </div>
        </div>
        <h2 className="card-title my-3">{newsData?.title || "N/A"}</h2>
        <figure>
          <img src={newsData?.image_url || "N/A"} alt="Shoes" />
        </figure>
        <div className="card-body">
          <p>{newsData?.details.slice(0, 200) || "N/A"}</p>
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
                {newsData?.rating?.number || "N/A"}
              </button>
            </div>

            <div className="flex items-center gap-2">
              <FaRegEye></FaRegEye>
              <button className="btn btn-ghost">
                {newsData?.total_view || "N/A"}{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
