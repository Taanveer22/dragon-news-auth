import { useLoaderData } from "react-router-dom";
import Card from "../pages/Card";

const CenteredContent = () => {
  const loaderData = useLoaderData();
  // console.log(loaderData.data);
  return (
    <>
      <h1 className="text-center text-xl font-semibold mb-3">
        Dragon News Center
      </h1>
      <p className="text-center text-sm text-gray-400 mb-3">
        {loaderData?.data.length} news data has found on this category
      </p>
      <div className="flex flex-col gap-6">
        {loaderData?.data.map((cardItem) => (
          <Card key={cardItem._id} newsData={cardItem}></Card>
        ))}
      </div>
    </>
  );
};

export default CenteredContent;
