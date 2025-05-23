import logo from "../images/Fronda-Logo-Light.png";
import PersonIcon from "../svgs/PersonIcon";
import ShoppingCartIcon from "../svgs/ShoppingCartIcon";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div
      className="flex flex-row flex-wrap justify-between items-stretch text-3xl font-normal 
                 bg-frondaBiege gap-x-9 gap-y-2 pl-8 pr-14 border-b-1 border-b-frondaBorderGray/50
                 w-full max-w-[2000px]"
    >
      <Link to="/">
        <img
          className="pb-2"
          src={logo}
          alt="A plant stem with leaves overlayed by orange and golden dots to the left of FRONDA in text"
        />
      </Link>
      <div className="flex flex-row flex-wrap gap-y-1 items-stretch">
        <Link
          to="/shopping"
          className="whitespace-nowrap hover:bg-white/30 hover:scale-98 transition-all rounded-lg flex flex-row items-center px-4"
        >
          All Plants
        </Link>
        <Link
          to="/inSeason"
          className="whitespace-nowrap hover:bg-white/30 hover:scale-98 transition-all rounded-lg flex flex-row items-center px-4"
        >
          In-Season
        </Link>
        <Link
          to="newArrivals"
          className="whitespace-nowrap hover:bg-white/30 hover:scale-98 transition-all rounded-lg flex flex-row items-center px-4"
        >
          New Arrivals
        </Link>
        <Link
          to="/plantCare"
          className="whitespace-nowrap hover:bg-white/30 hover:scale-98 transition-all rounded-lg flex flex-row items-center px-4"
        >
          Plant Care
        </Link>
      </div>
      <div className="flex flex-row items-stretch gap-10">
        <Link
          to="/signIn"
          className="flex flex-row items-center gap-1 hover:bg-white/30 hover:scale-98 transition-all rounded-lg whitespace-nowrap px-2"
        >
          <PersonIcon />
          <p>Sign In</p>
        </Link>

        <Link
          to="/cart"
          className="flex flex-row items-center gap-3.5 px-2 whitespace-nowrap hover:bg-white/30 hover:scale-98 transition-all rounded-lg"
        >
          <ShoppingCartIcon />
          <p>Cart</p>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
