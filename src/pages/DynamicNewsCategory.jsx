import { useLoaderData } from "react-router-dom";
import DynamicNewsCard from "./DynamicNewsCard";

const DynamicNewsCategory = () => {
  const loaderData = useLoaderData();
  console.log(loaderData.data);
  return (
    <div>
      <h1 className="text-center text-sm text-gray-400 mb-3">
        {loaderData.data.length} news data has found on this category
      </h1>
      <div className="flex flex-col gap-6">
        {loaderData.data.map((cardItem) => (
          <DynamicNewsCard
            key={cardItem._id}
            newsData={cardItem}
          ></DynamicNewsCard>
        ))}
      </div>
    </div>
  );
};

export default DynamicNewsCategory;
