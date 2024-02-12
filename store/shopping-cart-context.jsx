"use client";
import { createContext, useEffect, useReducer } from "react";

// function getLocalData() {
//   if (typeof window !== "undefined") {
//     let localCartData = localStorage.getItem("cartItems");

//     if (localCartData === null || localCartData === "[]") {
//       return [];
//     } else {
//       return JSON.parse(localCartData);
//     }
//   } else {
//     // Handle non-browser environment (e.g., server-side rendering)
//     return [];
//   }
// }
const CartContext = createContext({
  items: [],
  // cart: getLocalData(),
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const existingCartIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];

    if (existingCartIndex > -1) {
      const updatedItem = {
        ...state.items[existingCartIndex],
        quantity: state.items[existingCartIndex].quantity + 1,
      };
      updatedItems[existingCartIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === "REMOVE_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    const updatedItems = [...state.items];

    if (existingCartItem.quantity === 1) {
      updatedItems.splice(existingCartItemIndex, 1);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return { ...state, items: updatedItems };
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, {
    items: [],
  });

  function addItem(item) {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  }

  function removeItem(id) {
    dispatchCartAction({ type: "REMOVE_ITEM", id: id });
  }

  // useEffect(() => {
  //   localStorage.setItem("cartItems", JSON.stringify(cart.items));
  // }, [cart.items]);

  const cartContext = {
    items: cart.items,
    addItem: addItem,
    removeItem: removeItem,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
