import PlantInfo from "./ItemDisplay";
import { Link } from "react-router-dom";

const ItemDisplay = ({
  src,
  alt,
  name,
  description,
  price,
  itemId,
}: PlantInfo) => {
  return (
    <div className="flex flex-col gap-3 border-2 border-frondaGold rounded-lg overflow-hidden p-3 bg-white/50">
      <img
        className="rounded-lg border-[0.5px] border-frondaDarkGreen/50 shadow"
        src={src}
        alt={alt}
      />
      <div>
        <h3 className="text-2xl font-semibold">{name}</h3>
        <p className="text-lg font-normal">{description}</p>
      </div>
      <div className="flex-1"></div>
      <Link
        to={`/shopping/${itemId}`}
        className="bg-frondaDarkGreen py-2 px-7 rounded-md text-2xl font-semibold 
                   text-white text-center self-center w-full
                   hover:opacity-80 hover:cursor-pointer shadow-md
                   transition-all duration-150
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-frondaDarkGreen
                   active:scale-95 active:translate-y-[1px] active:shadow-inner"
      >
        {`View Detail - ${price.toFixed(2)}`}
      </Link>
    </div>
  );
};

export default ItemDisplay;
