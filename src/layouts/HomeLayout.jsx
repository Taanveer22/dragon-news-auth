import LeftNavbar from "../components/LeftNavbar";
import RightNavbar from "../components/RightNavbar";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="poppins-font">
      {/* ========== header ============== */}
      <header>
        <Header></Header>
      </header>

      {/* ======= latest news ============= */}
      <div className="w-11/12 mx-auto mb-6">
        <LatestNews></LatestNews>
      </div>

      {/* ========= navbar =============== */}
      <nav className="w-11/12 mx-auto mb-6">
        <Navbar></Navbar>
      </nav>

      {/* ================ main =================== */}
      <main className="w-11/12 mx-auto grid gap-6 grid-cols-1 sm:grid-cols-12">
        <aside className="sm:col-span-3">
          <LeftNavbar></LeftNavbar>
        </aside>
        <section className="sm:col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="sm:col-span-3">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
