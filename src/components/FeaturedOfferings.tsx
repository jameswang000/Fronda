import AllItemsDisplay from "./AllItemsDisplay";
import items from "../planning/data/Items";

const FeaturedOfferings = () => {
  const featuredItems = items.slice(0, 3);
  return (
    <div className="flex flex-col items-center bg-frondaBiege w-full max-w-[2000px] pt-20">
      <h2 className="font-semibold text-5xl">Seasonal Varieties</h2>
      <p className="font-normal text-2xl mt-5">
        Explore our in-season selection—fresh, vibrant plants at their peak,
        ready to brighten your home.
      </p>
      <div className="w-full pb-4 pt-8 px-[3%]">
        <hr className="border-frondaOrange/50 border-[1px]" />
      </div>
      <AllItemsDisplay displayItems={featuredItems} />
    </div>
  );
};

export default FeaturedOfferings;
