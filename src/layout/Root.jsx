import Footer from "../pages/shared/Footer";
import { Outlet } from "react-router";
import Navbar from "../pages/shared/Navbar";

function Root() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
