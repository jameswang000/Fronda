import items from "../planning/data/Items";
import PlantInfo from "./ItemDisplay";
import {
  ShoppingCartActions,
  useShoppingCartDispatch,
} from "./ShoppingCartContext";

const ItemDetails = ({ itemId }: { itemId: number }) => {
  const item: PlantInfo = items[itemId];
  const dispatch = useShoppingCartDispatch();
  return (
    <div className="flex flex-row bg-frondaBiege w-full justify-center py-20 px-20 gap-5 max-w-[2000px]">
      <div className="w-1/3 overflow-auto">
        <img
          className="w-full border-2 border-frondaGold rounded-lg"
          src={item.src}
          alt={item.alt}
        />
      </div>
      <div className="flex flex-col gap-5 p-10 bg-white/50 w-2/3 border-2 border-frondaGold rounded-lg overflow-auto">
        <h2 className="text-4xl font-bold">{item.name}</h2>
        {item.description}
        <div>
          <button
            className="bg-frondaDarkGreen py-2 px-7 rounded-md text-2xl font-semibold 
                         text-white text-center self-center
                         hover:opacity-80 hover:cursor-pointershadow-md
                         transition-transform transition-shadow duration-150
                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-frondaDarkGreen
                         active:scale-95 active:translate-y-[1px] active:shadow-inner"
            onClick={() => {
              const action = {
                type: ShoppingCartActions.INCREASE_ITEM_QUANTITY,
                payload: { itemId: itemId },
              };
              dispatch(action);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
