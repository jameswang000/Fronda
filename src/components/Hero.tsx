import heroBackground from "../images/Hero-Image.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="bg-cover bg-center text-white w-full max-w-[2000px]"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div
        className="bg-black/30 backdrop-blur-xs 
                      flex flex-col py-[20%] px-[10%]"
      >
        <div className="flex flex-col items-start font-primary">
          <h1 className="text-6xl text-left font-bold">
            Nature's Artistry, Cultivated for Your Home
          </h1>
          <p className="text-3xl text-left font-normal mt-2.5 w-[48%]">
            Fronda marries nature and art—each potted plant is a living
            masterpiece that transforms your space into a vibrant gallery of
            natural beauty.
          </p>
          <Link
            to="/shopping"
            className="text-3xl mt-12 py-4 px-14 text-frondaDarkGreen font-bold bg-frondaSageGreen rounded-lg
                       hover:opacity-80 hover:cursor-pointer shadow-md
                       transition-all duration-150
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-frondaDarkGreen
                       active:scale-95 active:translate-y-[1px] active:shadow-inner"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
