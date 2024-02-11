"use client";

import { IoMdClose } from "react-icons/io";
import { useContext, useState } from "react";
import CartContext from "@/store/shopping-cart-context";

export default function Billing({ isOpen, handleClick }) {
  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  const cartTotal = cartCtx.items.reduce((totalCartAmount, item) => {
    return totalCartAmount + item.price * item.quantity;
  }, 0);

  return (
    <div>
      {cartCtx.items.length < 1 ? (
        <EmptyCart isOpen={isOpen} handleClick={handleClick} />
      ) : (
        <div>
          {cartCtx.items.map((item) => {
            return (
              <CartItems
                key={item.id}
                item={item}
                handleClick={handleClick}
                totalCartItems={totalCartItems}
                cartTotal={cartTotal}
                isOpen={isOpen}
                cartCtx={cartCtx}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

function EmptyCart({ isOpen, handleClick }) {
  return (
    <div
      className={`p-8 xl:w-1/3 h-screen absolute top-0 right-0 bg-white ${
        isOpen ? "animate-slide-in" : "animate-slide-out"
      }`}
    >
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-lg">Your Shopping Cart(0)</h2>
        <IoMdClose
          className="text-2xl font-bold"
          onClick={() => handleClick(false)}
        />
      </div>

      <div className="flex flex-col gap-5 items-center mt-40">
        <img className="w-1/3" src="/emptycart.png" alt="emptycart" />
        <p className="font-bold font-blinker text-lg">Your cart is empty</p>
        <button
          className="border border-black px-4 py-2 text-base bg-gray-100 hover:cursor-pointer hover:bg-gray-200"
          onClick={() => handleClick(false)}
        >
          Keep Browsing
        </button>
      </div>
    </div>
  );
}

function CartItems({
  item,
  handleClick,
  totalCartItems,
  cartTotal,
  isOpen,
  cartCtx,
}) {
  const [currQuantity, setCurrQuantity] = useState(1);
  function handleRemoveItem() {
    cartCtx.removeItem(item.id);
  }

  function handleDecrease() {
    setCurrQuantity(currQuantity - 1);
    cartCtx.removeItem(item.id);
  }

  function handleIncrease() {
    setCurrQuantity(currQuantity + 1);
    cartCtx.addItem(item);
  }

  return (
    <div
      className={`p-8 xl:w-1/3 h-screen absolute top-0 right-0 bg-white ${
        isOpen ? "animate-slide-in" : "animate-slide-out"
      }`}
    >
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-lg">
          Your Shopping Cart({totalCartItems})
        </h2>
        <IoMdClose
          className="text-2xl font-bold"
          onClick={() => handleClick(false)}
        />
      </div>

      <div className="flex flex-col h-full justify-between">
        <div>
          {cartCtx.items.map((cartItem) => (
            <div key={cartItem.id} className="flex border border-black mb-4">
              <img
                className="w-32"
                src={cartItem.img1}
                alt={cartItem.productName}
              />

              <div className="bg-gray-100 w-full p-3">
                <div className="flex flex-col gap-10">
                  <div className="flex justify-between">
                    <p className="font-medium text-xl">
                      {cartItem.productName}
                    </p>
                    <p className="font-bold text-xl">
                      {cartItem.price * cartItem.quantity}$
                    </p>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex gap-1 border black items-center">
                      <button
                        className="border border-black bg-black text-white p-1"
                        onClick={handleDecrease}
                      >
                        -
                      </button>
                      <p className="p-1">{cartItem.quantity}</p>
                      <button
                        className="border border-black bg-black text-white p-1"
                        onClick={handleIncrease}
                      >
                        +
                      </button>
                    </div>

                    <IoMdClose
                      className="text-2xl font-bold"
                      onClick={() => handleRemoveItem(cartItem.id)}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <div className="border-t-2 border-dashed border-black"></div>

          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl">Subtotal</p>

            <div className="flex justify-between items-center">
              <p className="font-bold text-xl">{cartTotal}$</p>
              <button className="border-2 border-black p-4">
                Go to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
