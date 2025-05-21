import celestialWhisperImage from "../images/Celestial-Whisper.png";
import tranquilVeilImage from "../images/Tranquil-Veil.png";
import greenCascadeImage from "../images/Green-Cascade.png";

const FeaturedOfferings = () => {
  return (
    <div
      className="flex flex-col items-center bg-frondaBiege w-full max-w-[2000px]"
      style={{ paddingTop: "max(5%, 40px)", paddingBottom: "max(5%, 20px)" }}
    >
      <h2 className="font-semibold text-5xl">Seasonal Varieties</h2>
      <p className="font-normal text-2xl mt-5">
        Explore our in-season selection—fresh, vibrant plants at their peak,
        ready to brighten your home.
      </p>
      <div className="w-full">
        <hr className="mt-8 border-frondaOrange/50 border-[1px]" />
      </div>
      <div className="flex flex-row justify-evenly gap-5 mt-5">
        <div className="flex flex-row flex-wrap justify-evenly gap-5 mt-5">
          {[
            {
              src: celestialWhisperImage,
              alt: "Celestial Whisper plant",
              label: "Celestial Whisper",
            },
            {
              src: tranquilVeilImage,
              alt: "Tranquil Veil plant",
              label: "Tranquil Veil",
            },
            {
              src: greenCascadeImage,
              alt: "Green Cascade plant",
              label: "Green Cascade",
            },
          ].map(({ src, alt, label }) => (
            <figure
              key={label}
              className="flex flex-col items-center bg-frondaDarkGreen overflow-hidden rounded-md border-frondaGold border-1 shadow-xl"
            >
              <img src={src} alt={alt} />
              <caption className="text-white text-xl py-2.5 font-bold">
                {label}
              </caption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedOfferings;
