import logo from "../images/Fronda-Logo-Dark.png";

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
              <a href="">My Account</a>
              <a href="">Check Order Status</a>
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-5">
            <h3 className="text-xl font-semibold">Help</h3>
            <div className="flex flex-col gap-2.5 text-base font-normal whitespace-nowrap">
              <a href="">Help Center</a>
              <a href="">Plant Care</a>
              <a href="">Contact Us</a>
              <a href="">Refunds and Redelivery Policy</a>
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-5">
            <h3 className="text-xl font-semibold">About Fronda</h3>
            <div className="flex flex-col gap-2.5 text-base font-normal whitespace-nowrap">
              <a href="">The Fronda Difference</a>
              <a href="">Blog</a>
              <a href="">In the News</a>
              <a href="">Corporate Gifts</a>
              <a href="">Careers</a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-row gap-3.5 justify-end font-normal text-sm px-[10%] whitespace-nowrap flex-wrap">
        <p>Copyright &copy; 2025 Fronda, Inc.</p>
        <p>{"(267)-274-8805"}</p>
        <a href="">Privacy Policy</a>
        <a href="">Terms and Conditions</a>
        <a href="">Accessibility Statement</a>
      </div>
    </div>
  );
};

export default Footer;
