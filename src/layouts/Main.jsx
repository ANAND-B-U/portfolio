import { Outlet } from "react-router-dom";
import NavBar from "../components/common/navbar/NavBar";
import Footer from "../components/common/footer/Footer";
import ScrollToTop from "../components/common/scrollToTop/ScrollToTop";

const Main = () => {
  return (
    <div className="relative">
      <NavBar />
      <Outlet />
      <div className="bg-black">
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Main;
