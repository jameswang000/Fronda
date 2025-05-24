import ItemCheckoutDisplay from "./ItemCheckoutDisplay";
import {
  useShoppingCartItems,
  useShoppingCartDispatch,
  getCartTotalItemCount,
  getCartTotalValue,
  ShoppingCartActions,
} from "./ShoppingCartContext";

const ShoppingCartPage = () => {
  const cartItems = useShoppingCartItems();
  const dispatch = useShoppingCartDispatch();
  const cartTotalItemsCount = getCartTotalItemCount(cartItems);
  const cartTotalValue = getCartTotalValue(cartItems);
  const tax = cartTotalValue < 35 && cartTotalValue > 0 ? 5.99 : 0;

  return (
    <div className="flex flex-col gap-12 bg-frondaBiege w-full max-w-[2000px] pt-15 pb-24 px-[15%] min-h-96 font-secondary">
      <h1 className="text-4xl font-bold">
        Cart{" "}
        <span className="font-normal pl-1">{`(${cartTotalItemsCount} Items)`}</span>
      </h1>
      <div className="flex flex-row gap-5">
        <div className="w-3/5 border-1 border-frondaBorderGray/30 rounded-lg py-5 px-6 overflow-auto">
          {cartItems.map((item) => {
            return (
              <ItemCheckoutDisplay
                itemId={item.itemId}
                quantity={item.quantity}
              />
            );
          })}
        </div>
        <div className="flex flex-col w-2/5 border-1 border-frondaBorderGray/30 rounded-lg py-5 px-6 overflow-auto">
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch({
                type: ShoppingCartActions.RESET_CART,
                payload: { itemId: -1 },
              });
            }}
            className="w-full bg-frondaGold rounded-3xl py-2.5 text-xl font-bold
                       hover:opacity-80 hover:cursor-pointer shadow-md
                       transition-all duration-150
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-frondaDarkGreen
                       active:scale-95 active:translate-y-[1px] active:shadow-inner"
          >
            Continue to checkout
          </button>
          <div className="mt-10 flex flex-row justify-between text-xl font-semibold">
            <p>{`Subtotal (${cartTotalItemsCount} items)`}</p>
            <p className="">{`$${cartTotalValue.toFixed(2)}`}</p>
          </div>
          <hr className="border-black/10 mt-1 mb-5" />
          <div className="flex flex-row justify-between text-sm font-medium text-frondaBorderGray/50">
            <p>{"Shipping (below $35 order minimum)"}</p>
            <p>{tax === 0 ? "$0.00" : `$${tax}`}</p>
          </div>
          <div className="flex flex-row justify-between text-xl font-semibold mt-3">
            <p>Taxes</p>
            <p>Calculated at checkout</p>
          </div>
          <hr className="border-black/10 mt-2 mb-5" />
          <div className="flex flex-row justify-between text-xl font-semibold">
            <p>Estimated Total</p>
            <p>{`$${(tax + cartTotalValue).toFixed(2)}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
