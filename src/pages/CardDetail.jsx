import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNavbar from "../components/RightNavbar";

const CardDetail = () => {
  const loaderData = useLoaderData();
  // console.log(loaderData.data[0]);
  const detailData = loaderData.data[0];
  console.log(detailData);
  return (
    <div>
      {/* ========== header ============== */}
      <header>
        <Header></Header>
      </header>

      {/* ====== main ============ */}
      <main className="w-11/12 mx-auto grid gap-8 grid-cols-1 sm:grid-cols-12">
        <section className="sm:col-span-9">
          <h1 className="text-xl font-medium mb-3">News Detail</h1>
          <div className="card bg-base-100 shadow-sm mb-6">
            <figure className="px-10 pt-10">
              <img src={detailData?.image_url || "N/A"} />
            </figure>
            <div className="card-body justify-start">
              <h2 className="card-title">{detailData?.title || "N/A"}</h2>
              <p className="text-justify">{detailData?.details || "N/A"}</p>
              <div className="card-actions">
                <Link
                  to={`/category/${detailData?.category_id}`}
                  className="btn btn-error"
                >
                  All News In This Category
                </Link>
              </div>
            </div>
          </div>
        </section>
        <aside className="sm:col-span-3">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default CardDetail;
