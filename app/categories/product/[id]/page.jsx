"use client";

import { useState, useEffect, useContext } from "react";
import CartContext from "@/store/shopping-cart-context";
import toast, { Toaster } from "react-hot-toast";
import { productData } from "@/data";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

export default function ProductPage({ params }) {
  const selectedProduct = productData.find((prod) => prod.id === +params.id);

  if (!selectedProduct) {
    return <div className="mx-36 my-20">No product found</div>;
  }

  return (
    <div>
      <ProductCard key={selectedProduct.id} selectedProduct={selectedProduct} />
    </div>
  );
}

function ProductCard({ selectedProduct }) {
  const cartCtx = useContext(CartContext);

  const [currImg, setCurrImg] = useState(selectedProduct.img1);
  const [clicked, setClicked] = useState(false);
  const [currQuantity, setCurrQuantity] = useState(1);

  function handleDecrease() {
    setCurrQuantity(currQuantity - 1);
  }

  function handleIncrease() {
    setCurrQuantity(currQuantity + 1);
  }

  function handleAddToCart(item) {
    setClicked(true);
    console.log("cart added item");
    toast.success("Item added to cart!");
    cartCtx.addItem(item);
  }

  useEffect(() => {
    setClicked(false);
  }, [clicked]);

  return (
    <div>
      <div>
        <Toaster toastOptions={{ duration: 6000 }} />
      </div>
      <div className="px-5 mt-5 xl:px-36 xl:w-full">
        <div className="flex justify-center font-bold text-3xl">
          <h3 className="z-40 font-extrabold">{selectedProduct.productName}</h3>
        </div>

        <div className="mt-10 xl:flex">
          <div className="xl:flex xl:flex-col xl:w-1/2">
            <div className="self-center xl:-mt-10 xl:px-20">
              <img src={currImg} alt={selectedProduct.productName} />
            </div>

            <div className="flex gap-1 w-1/5 mx-20 mt-5 md:mx-40 xl:mx-20">
              <img
                className="hover:border hover:border-gray-400 hover:cursor-pointer hover:shadow-md hover:shadow-gray-600"
                src={selectedProduct.img1}
                alt=""
                onMouseEnter={() => setCurrImg(selectedProduct.img1)}
              />
              <img
                className="hover:border hover:border-gray-400 hover:cursor-pointer hover:shadow-md hover:shadow-gray-600"
                src={selectedProduct.img2}
                alt=""
                onMouseEnter={() => setCurrImg(selectedProduct.img2)}
              />
              <img
                className="hover:border hover:border-gray-400 hover:cursor-pointer hover:shadow-md hover:shadow-gray-600"
                src={selectedProduct.img3}
                alt=""
                onMouseEnter={() => setCurrImg(selectedProduct.img3)}
              />
            </div>
          </div>

          <div className="mt-10 px-10 py-5 flex flex-col gap-5 justify-center bg-[#e5e5e5] xl:w-1/2 xl:pt-40 xl:py-20 xl:-mt-20">
            <p className="text-xl styles.blinker leading-8">
              {selectedProduct.description}
            </p>

            <div className="flex flex-col gap-5 items-center justify-center mt-10 sm:flex sm:flex-row md:justify-between">
              <p className="text-xl font-bold styles.blinker md:text-2xl">
                Quantity
              </p>

              <div className="flex items-center font-bold">
                <button
                  className="border-2 border-black bg-white px-5 py-3 text-xl hover:bg-transparent transition-all duration-200 ease-in"
                  onClick={handleDecrease}
                >
                  <FaMinus size={12} />
                </button>
                <p className="text-xl border-y-2 border-black px-5 py-1">
                  {currQuantity > 1 ? currQuantity : 1}
                </p>
                <button
                  className="border-2 border-black bg-white px-5 py-3 text-xl hover:bg-transparent transition-all duration-200 ease-in"
                  onClick={handleIncrease}
                >
                  <FaPlus size={12} className="font-semibold" />
                </button>
              </div>

              <p className="text-xl font-bold styles.blinker md:text-2xl">
                {currQuantity > 1
                  ? currQuantity * selectedProduct.price
                  : selectedProduct.price}
                .00$
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 mt-10 md:grid-cols-2">
              <button
                className="font-bold text-lg border-2 border-black py-2 hover:cursor-pointer hover:text-white hover:bg-black transition-all duration-300 ease-in-out"
                onClick={() => handleAddToCart(selectedProduct)}
              >
                ADD TO CART
              </button>
              <button className="font-bold text-lg bg-red-700 py-2 text-white hover:cursor-pointer hover:border-2 hover:border-red-700 hover:text-red-700 hover:bg-transparent transition-all duration-300 ease-in-out">
                BUY NOW
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-5 md:grid-cols-3">
          <div className="bg-[#e5e5e5] px-5 py-5 styles.blinker flex flex-col gap-1">
            <p className="font-semibold text-[21px] tracking-wide">Texture:</p>
            <p className="text-[17px]">{selectedProduct.texture}</p>
          </div>

          <div className="bg-[#e5e5e5] px-5 py-5 styles.blinker flex flex-col gap-1">
            <p className="font-semibold text-[21px] tracking-wide">Weight:</p>
            <p className="text-[17px]">{selectedProduct.weight}kg</p>
          </div>

          <div className="bg-[#e5e5e5] px-5 py-5 styles.blinker flex flex-col gap-1">
            <p className="font-semibold text-[21px] tracking-wide">Size:</p>
            <p className="text-[17px]">{selectedProduct.size}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
