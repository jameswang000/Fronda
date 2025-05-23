import { Link, ScrollRestoration } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const ErrorPage = () => {
  return (
    <div className="min-w-full flex flex-col items-center bg-frondaSageGreen font-primary">
      <NavBar />
      <div className="flex flex-col items-center py-40 bg-frondaBiege w-full text-frondaDarkGreen gap-y-10 max-w-[2000px] p-[10%] ">
        <h1 className="text-6xl font-bold text-center">
          <span className="mr-1">🌱</span>
          This Page Hasn't Sprouted Yet...
          <span className="ml-1">🌱</span>
        </h1>
        <p className="text-3xl font-normal text-center w-[80%]">
          Looks like this page isn't quite ready to take root. It might bloom
          someday, but for now, let's guide you back to where things are
          growing.
        </p>
        <div className="flex flex-row justify-between items-center gap-[10%] text-white text-3xl font-semibold w-1/2 flex-wrap gap-y-5">
          <Link
            className="flex-1 py-4 px-5 rounded-lg bg-frondaDarkGreen whitespace-nowrap text-center
                       hover:opacity-80 hover:cursor-pointer shadow-md
                       transition-all duration-150
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-frondaDarkGreen
                       active:scale-95 active:translate-y-[1px] active:shadow-inner"
            to="/"
          >
            Return Home
          </Link>

          <Link
            className="flex-1 py-4 px-5 rounded-lg bg-frondaDarkGreen whitespace-nowrap text-center
                       hover:opacity-80 hover:cursor-pointer shadow-md
                       transition-all duration-150
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-frondaDarkGreen
                       active:scale-95 active:translate-y-[1px] active:shadow-inner"
            to="/shopping"
          >
            Shop Plants
          </Link>
        </div>
      </div>
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default ErrorPage;
