import { useLoaderData } from "react-router-dom";

const DynamicNewsCategory = () => {
  const loaderData = useLoaderData();
  console.log(loaderData.data);
  return (
    <div>
      <h1>This category has {loaderData.data.length} news data</h1>
    </div>
  );
};

export default DynamicNewsCategory;
