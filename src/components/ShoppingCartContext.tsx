/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  ReactNode,
  useContext,
  useReducer,
  Dispatch,
  Reducer,
} from "react";
import plantInfos from "../planning/data/Items";

import { v4 as uuidv4 } from "uuid";

interface ShoppingCartItem {
  cartItemId: string;
  itemId: number;
  quantity: number;
}

enum ShoppingCartActions {
  INCREASE_ITEM_QUANTITY,
  DECREASE_ITEM_QUANTITY,
  REMOVE_ITEM,
  RESET_CART,
}

type Action = {
  type: ShoppingCartActions;
  payload: { itemId: number };
};

type State = ShoppingCartItem[];

// 1. Create contexts with the right generic types:
const ShoppingCartItemsContext = createContext<State | undefined>(undefined);
const ShoppingCartDispatchContext = createContext<Dispatch<Action> | undefined>(
  undefined
);

const getCartTotalItemCount = (items: State) => {
  return items
    .map((item) => item.quantity)
    .reduce((acc, curr) => acc + curr, 0);
};

const getCartTotalValue = (items: State) => {
  return items
    .map((item) => plantInfos[item.itemId].price * item.quantity)
    .reduce((acc, curr) => acc + curr, 0);
};

// 2. Your reducer (unchanged):
const shoppingCartReducer: Reducer<State, Action> = (items, action) => {
  switch (action.type) {
    case ShoppingCartActions.INCREASE_ITEM_QUANTITY:
      if (items.find((item) => item.itemId === action.payload.itemId)) {
        return items.map((item) => {
          if (item.itemId === action.payload.itemId) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        const newItem = {
          cartItemId: uuidv4(),
          itemId: action.payload.itemId,
          quantity: 1,
        };
        return [...items, newItem];
      }
    case ShoppingCartActions.DECREASE_ITEM_QUANTITY:
      return items
        .map((item) => {
          if (item.itemId === action.payload.itemId) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        })
        .filter((item) => item.quantity > 0);
    case ShoppingCartActions.REMOVE_ITEM:
      return items.filter((item) => item.itemId !== action.payload.itemId);
    case ShoppingCartActions.RESET_CART:
      return [];
    default:
      return items;
  }
};

// 3. Safe hooks that throw if used outside a provider:
const useShoppingCartItems = (): State => {
  const ctx = useContext(ShoppingCartItemsContext);
  if (ctx === undefined) {
    throw new Error(
      "useShoppingCartItems must be used within ShoppingCartProvider"
    );
  }
  return ctx;
};

const useShoppingCartDispatch = (): Dispatch<Action> => {
  const ctx = useContext(ShoppingCartDispatchContext);
  if (ctx === undefined) {
    throw new Error(
      "useShoppingCartDispatch must be used within ShoppingCartProvider"
    );
  }
  return ctx;
};

// 4. The provider, which now matches those context types:
const ShoppingCartProvider = ({ children }: { children: ReactNode }) => {
  const [shoppingCartItems, dispatch] = useReducer(
    shoppingCartReducer,
    [] as State
  );

  return (
    <ShoppingCartItemsContext.Provider value={shoppingCartItems}>
      <ShoppingCartDispatchContext.Provider value={dispatch}>
        {children}
      </ShoppingCartDispatchContext.Provider>
    </ShoppingCartItemsContext.Provider>
  );
};

export {
  ShoppingCartActions,
  ShoppingCartProvider,
  useShoppingCartItems,
  useShoppingCartDispatch,
  getCartTotalItemCount,
  getCartTotalValue,
};
export type { ShoppingCartItem };
