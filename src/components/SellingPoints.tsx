import homePageJson from "../planning/text/Home_Page_Text.json";
import healingTouchImage from "../images/Healing-Touch-Image.png";
import locallysourcedImage from "../images/Locally-Sourced-Image.png";
import spaceCurated from "../images/Space-Curated-Image.png";
import { Link } from "react-router-dom";

const SellingPoints = () => {
  return (
    <div className="w-full max-w-[2000px] bg-frondaBiege">
      <div className="flex flex-row">
        <div className="flex flex-col items-center justify-center px-[10%] w-1/2 bg-radial from-frondaBiege from-50% to-frondaOrange/90">
          <h3 className="text-4xl font-bold text-center">
            {homePageJson.why_us[0].header}
          </h3>
          <p className="text-3xl font-normal text-center mt-2">
            {homePageJson.why_us[0].paragraph}
          </p>
          <Link
            to="/research"
            className="font-medium text-3xl bg-frondaDarkGreen text-white py-3 px-3.5 mt-6 rounded-md
                                  hover:opacity-80 hover:cursor-pointer shadow-md
                                  transition-all duration-150
                                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-frondaDarkGreen
                                  active:scale-95 active:translate-y-[1px] active:shadow-inner"
          >
            See the Research!
          </Link>
        </div>
        <div className="w-1/2 overflow-hidden bg-frondaDarkGreen">
          <img
            className="w-full"
            src={healingTouchImage}
            alt="Apartment living room decorated with green houseplants"
          />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-1/2 overflow-auto bg-frondaDarkGreen">
          <img
            className="w-full"
            src={locallysourcedImage}
            alt="canvas covered green house farm"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-1/2 px-[10%] bg-radial from-frondaBiege from-30% to-60% to-frondaSageGreen">
          <h3 className="text-4xl font-bold text-center">
            {homePageJson.why_us[1].header}
          </h3>
          <p className="text-3xl font-normal text-center mt-2">
            {homePageJson.why_us[1].paragraph}
          </p>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col items-center justify-center px-[8%] w-1/2 bg-radial from-frondaBiege from-50% to-frondaOrange/90">
          <h3 className="text-4xl font-bold text-center">
            {homePageJson.why_us[2].header}
          </h3>
          <p className="text-3xl font-normal text-center mt-2">
            {homePageJson.why_us[2].paragraph}
          </p>
        </div>
        <div className="w-1/2 overflow-hidden bg-frondaDarkGreen">
          <img className="w-full" src={spaceCurated} alt="succulent in a jar" />
        </div>
      </div>
    </div>
  );
};

export default SellingPoints;
