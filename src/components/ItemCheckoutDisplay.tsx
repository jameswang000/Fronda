import items from "../planning/data/Items";
import Add from "../svgs/Add";
import Subtract from "../svgs/Subtract";
import {
  useShoppingCartDispatch,
  ShoppingCartActions,
} from "./ShoppingCartContext";

const ItemCheckoutDisplay = ({
  itemId,
  quantity,
}: {
  itemId: number;
  quantity: number;
}) => {
  const dispatch = useShoppingCartDispatch();

  const item = items[itemId];
  return (
    <div className="">
      <div className="flex flex-row">
        <div className="w-[15%] overflow-hidden rounded-lg">
          <img src={item.src} alt={item.alt} />
        </div>
        <div className="pl-2">
          <h2 className="font-normal text-xl">{item.name}</h2>
          <p className="font-normal text-sm text-frondaBorderGray/70">
            {item.description}
          </p>
        </div>
        <div className="flex-1"></div>
        <p className="text-xl font-semibold">{`$${(
          item.price * quantity
        ).toFixed(2)}`}</p>
      </div>
      <div className="flex flex-row justify-end gap-x-9">
        <button
          className="underline text-sm font-normal p-0 hover:opacity-80 hover:cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            dispatch({
              type: ShoppingCartActions.REMOVE_ITEM,
              payload: { itemId: itemId },
            });
          }}
        >
          Remove
        </button>
        <div className="flex flex-row gap-x-4 items-center justify-center rounded-3xl border-black/20 border-1 w-max overflow-hidden">
          <button
            className="flex flex-row items-center h-full pl-4 pr-2
                     bg-frondaBiege hover:opacity-80 hover:cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              dispatch({
                type: ShoppingCartActions.DECREASE_ITEM_QUANTITY,
                payload: { itemId: itemId },
              });
            }}
          >
            <Subtract />
          </button>
          <p className="flex flex-col font-bold text-base justify-center">
            {quantity}
          </p>
          <button
            className="flex flex-row items-center h-full pl-2 pr-4
                     bg-frondaBiege hover:opacity-80 hover:cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              dispatch({
                type: ShoppingCartActions.INCREASE_ITEM_QUANTITY,
                payload: { itemId: itemId },
              });
            }}
          >
            <Add />
          </button>
        </div>
      </div>
      <hr className="border-b-1 border-black/10 mt-3 mb-5" />
    </div>
  );
};

export default ItemCheckoutDisplay;
