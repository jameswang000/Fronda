import homePageJson from "../planning/text/Home_Page_Text.json";
import healingTouchImage from "../images/Healing-Touch-Image.png";
import locallysourcedImage from "../images/Locally-Sourced-Image.png";
import spaceCurated from "../images/Space-Curated-Image.png";

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
          <button className="font-medium text-3xl bg-frondaDarkGreen text-white py-3 px-3.5 mt-6 rounded-md">
            See the Research!
          </button>
        </div>
        <img
          className="w-1/2"
          src={healingTouchImage}
          alt="Apartment living room decorated with green houseplants"
        />
      </div>
      <div className="flex flex-row">
        <img className="w-1/2" src={locallysourcedImage} alt="canvas covered green house farm"/>
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
        <img className="w-1/2" src={spaceCurated} alt="succulent in a jar" />
      </div>
    </div>
  );
};

export default SellingPoints;
