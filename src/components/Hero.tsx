import heroBackground from "../images/Hero-Image.png";

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
        <div className="flex flex-col items-start">
          <h1 className="text-6xl text-left font-bold">
            Nature's Artistry, Cultivated for Your Home
          </h1>
          <p className="text-3xl text-left font-medium mt-2.5 w-[48%]">
            Fronda marries nature and art—each potted plant is a living
            masterpiece that transforms your space into a vibrant gallery of
            natural beauty.
          </p>
          <button className="text-3xl mt-12 py-4 px-14 text-frondaDarkGreen font-bold bg-frondaSageGreen rounded-lg">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
