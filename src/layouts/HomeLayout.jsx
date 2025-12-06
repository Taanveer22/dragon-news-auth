import CenterContent from "../components/dynamic/CenterContent";
import LeftNavbar from "../components/dynamic/LeftNavbar";
import RightNavbar from "../components/dynamic/RightNavbar";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

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
      <main className="w-11/12 mx-auto grid gap-6 sm:grid-cols-12">
        <aside className="col-span-3">
          <LeftNavbar></LeftNavbar>
        </aside>
        <section className="col-span-3">
          <CenterContent></CenterContent>
        </section>
        <aside className="col-span-3">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
