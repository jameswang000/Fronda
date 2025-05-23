import { Outlet, ScrollRestoration } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-w-full flex flex-col items-center bg-frondaSageGreen font-primary">
      <NavBar />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default Layout;
