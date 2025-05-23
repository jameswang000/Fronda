import logo from "../images/Fronda-Logo-Dark.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="flex flex-col bg-frondaDarkGreen 
                 w-full max-w-[2000px] text-white pb-3 pt-12
                 gap-y-12"
    >
      <div className="flex flex-row justify-between px-[10%] flex-wrap gap-y-10">
        <div>
          <img
            src={logo}
            alt="A plant stem with leaves overlayed by orange and golden dots to the left of FRONDA in text"
          />
        </div>
        <div className="flex flex-row gap-x-15 flex-wrap gap-y-2.5">
          <div className="flex flex-col flex-1 gap-5">
            <h3 className="text-xl font-semibold">My Account</h3>
            <div className="flex flex-col gap-2.5 text-base font-normal whitespace-nowrap">
              <Link to="/account">My Account</Link>
              <Link to="/account/orderStatus">Check Order Status</Link>
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-5">
            <h3 className="text-xl font-semibold">Help</h3>
            <div className="flex flex-col gap-2.5 text-base font-normal whitespace-nowrap">
              <Link to="/helpCenter">Help Center</Link>
              <Link to="/plantCare">Plant Care</Link>
              <Link to="/contactUs">Contact Us</Link>
              <Link to="/refunds">Refunds and Redelivery Policy</Link>
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-5">
            <h3 className="text-xl font-semibold">About Fronda</h3>
            <div className="flex flex-col gap-2.5 text-base font-normal whitespace-nowrap">
              <Link to="/about">The Fronda Difference</Link>
              <Link to="/about/blog">Blog</Link>
              <Link to="/about/news">In the News</Link>
              <Link to="/about/charity">Corporate Gifts</Link>
              <Link to="/about/careers">Careers</Link>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-row gap-3.5 justify-end font-normal text-sm px-[10%] whitespace-nowrap flex-wrap">
        <p>Copyright &copy; 2025 Fronda, Inc.</p>
        <p>{"(267)-274-8805"}</p>
        <Link to="/documents/privacyPolicy">Privacy Policy</Link>
        <Link to="/documents/termsAndConditions">Terms and Conditions</Link>
        <Link to="/documents/accessibilityStatement">
          Accessibility Statement
        </Link>
      </div>
    </div>
  );
};

export default Footer;
