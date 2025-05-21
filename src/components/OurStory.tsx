import homePageJSON from "../planning/text/Home_Page_Text.json";
import ourStoryImage from "../images/Our-Story-Image.png";

const OurStory = () => {
  return (
    <div
      className="bg-top bg-cover w-full max-w-[2000px]"
      style={{ backgroundImage: `url(${ourStoryImage})` }}
    >
      <div className="bg-gradient-to-b from-frondaBiege to-frondaBiege/0 w-full flex flex-col items-center py-28">
        <div className="flex flex-col items-center w-4/7">
          <h2 className="text-5xl font-semibold">Our Story</h2>
          <div className="text-3xl font-normal mt-9">
            <p className="w-full">{`${homePageJSON.about_us.paragraph1}`}</p>
            <br />
            <p className="w-full">{`${homePageJSON.about_us.paragraph2}`}</p>
            <br />
            <p className="w-full">{`${homePageJSON.about_us.paragraph3}`}</p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
