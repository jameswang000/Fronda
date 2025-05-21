import logo from "../images/Fronda-Logo-Light.png";
import PersonIcon from "../svgs/PersonIcon";
import ShoppingCartIcon from "../svgs/ShoppingCartIcon";

const NavBar = () => {
  return (
    <div
      className="flex flex-row flex-wrap justify-between items-center text-3xl font-normal 
               bg-frondaBiege gap-x-9 gap-y-2 py-1 pl-8 pr-14 border-b-1 border-b-frondaBorderGray/50
                 w-full max-w-[2000px]"
    >
      <img
        className="pb-2"
        src={logo}
        alt="A plant stem with leaves overlayed by orange and golden dots to the left of FRONDA in text"
      />
      <div className="flex flex-row gap-9 flex-wrap gap-y-1">
        <a className="whitespace-nowrap" href="">
          All Plants
        </a>
        <a className="whitespace-nowrap" href="">
          In-Season
        </a>
        <a className="whitespace-nowrap" href="">
          New Arrivals
        </a>
        <a className="whitespace-nowrap" href="">
          Plant Care
        </a>
      </div>
      <div className="flex flex-row items-center gap-10">
        <div className="flex flex-row items-center gap-1">
          <PersonIcon />
          <a className="whitespace-nowrap" href="">
            Sign In
          </a>
        </div>
        <div className="flex flex-row items-center gap-3.5">
          <ShoppingCartIcon />
          <a className="whitespace-nowrap" href="">
            Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
