"use client";

import { useState, useEffect, useContext } from "react";
import CartContext from "@/store/shopping-cart-context";
import { productData } from "@/data";

export default function ProuctPage({ params }) {
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

  function handleAddToCart() {
    setClicked(true);
    cartCtx.addItem(selectedProduct);
  }

  useEffect(() => {
    let timeout;
    if (clicked) {
      timeout = setTimeout(() => {
        setClicked(false);
      }, 3000);
    }

    return () => clearTimeout(timeout);
  }, [clicked]);

  return (
    <div>
      {clicked && (
        <div>
          <p>
            Item added to cart <span>🎉</span>
          </p>
        </div>
      )}
      <div className="px-5 mt-5 xl:px-36 xl:w-full">
        <div className="flex justify-center font-bold text-3xl">
          <h3 className="z-40">{selectedProduct.productName}</h3>
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

          <div className="mt-10 px-5 py-5 flex flex-col gap-5 justify-center bg-gray-200 xl:w-1/2 xl:pt-40 xl:py-20 xl:-mt-20">
            <p className="text-lg font-blinker">
              {selectedProduct.description}
            </p>

            <div className="flex flex-col gap-5 items-center justify-center mt-10 sm:flex sm:flex-row md:justify-between">
              <p className="text-xl font-bold font-blinker md:text-2xl">
                Quantity
              </p>

              <div className="flex items-center font-bold">
                <button
                  className="border-2 border-black bg-white px-5 py-2 text-xl hover:bg-transparent transition-all duration-200 ease-in"
                  onClick={handleDecrease}
                >
                  -
                </button>
                <p className="text-xl border-y-2 border-black px-5 py-2">
                  {currQuantity > 1 ? currQuantity : 1}
                </p>
                <button
                  className="border-2 border-black bg-white px-5 py-2 text-xl hover:bg-transparent transition-all duration-200 ease-in"
                  onClick={handleIncrease}
                >
                  +
                </button>
              </div>

              <p className="text-xl font-bold font-blinker md:text-2xl">
                {currQuantity > 1
                  ? currQuantity * selectedProduct.price
                  : selectedProduct.price}
                .00$
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 mt-10 md:grid-cols-2">
              <button
                className="font-bold text-lg border-2 border-black py-2 hover:cursor-pointer hover:text-white hover:bg-black transition-all duration-200 ease-in-out"
                onClick={handleAddToCart}
              >
                ADD TO CART
              </button>
              <button className="font-bold text-lg bg-red-700 py-2 text-white hover:cursor-pointer hover:border-2 hover:border-red-700 hover:text-red-700 hover:bg-transparent transition-all duration-200 ease-in-out">
                BUY NOW
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-5 md:grid-cols-3">
          <div className="bg-gray-200 px-5 py-5">
            <p className="font-bold text-xl font-blinker">Texture:</p>
            <p className="text-base font-blinker">{selectedProduct.texture}</p>
          </div>

          <div className="bg-gray-200 px-5 py-5">
            <p className="font-bold text-xl font-blinker">Weight:</p>
            <p className="text-base font-blinker">{selectedProduct.weight}kg</p>
          </div>

          <div className="bg-gray-200 px-5 py-5">
            <p className="font-bold text-xl font-blinker">Size:</p>
            <p className="text-base font-blinker">{selectedProduct.size}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

//   return (
//     <>
//       {clicked && (
//         <div className="flex justify-center absolute top-5 left-96 animate-bounce z-50">
//           <p className="text-white bg-green-700 font-bold font-blinker p-3 text-xl italic max-w-fit">
//             Item added to cart <span className="ml-2">🎉</span>
//           </p>
//         </div>
//       )}
//       <div className="mx-36 mb-28 mt-1 relative">
//         <div className="flex justify-center">
//           <h3 className="font-extrabold tracking-tight text-3xl font-blinker mt-8 z-10">
//             {selectedProduct.productName}
//           </h3>
//         </div>

//         <div className="flex">
//           <div className="flex flex-col">
//             <div className="w-1/2 p-32 -mt-20">
//               <img src={currImg} alt={selectedProduct.productName} />
//             </div>

//             <div className="flex gap-1 w-1/3 -mt-16 m-20">
//               <img
//                 className="w-1/3 hover:border hover:border-gray-400 hover:shadow-md hover:shadow-gray-400"
//                 src={selectedProduct.img1}
//                 alt=""
//                 onMouseEnter={() => setCurrImg(selectedProduct.img1)}
//               />
//               <img
//                 className="w-1/3 hover:border hover:border-gray-400 hover:shadow-md hover:shadow-gray-400"
//                 src={selectedProduct.img2}
//                 alt=""
//                 onMouseEnter={() => setCurrImg(selectedProduct.img2)}
//               />
//               <img
//                 className="w-1/3 hover:border hover:border-gray-400 hover:shadow-md hover:shadow-gray-400"
//                 src={selectedProduct.img3}
//                 alt=""
//                 onMouseEnter={() => setCurrImg(selectedProduct.img3)}
//               />
//             </div>
//           </div>

//           <div className="flex flex-col gap-16 w-1/2 px-16 pt-40 pb-16 bg-gray-200 absolute top-5 right-0">
//             <p className="font-blinker leading-7 text-base tracking-wide">
//               {selectedProduct.description}
//             </p>

//             <div className="flex justify-between items-center">
//               <p className="font-bold text-2xl">Quantity</p>

//               <div className="flex items-center font-bold">
//                 <button
//                   className="border-2 border-black bg-white px-5 py-2 text-xl hover:bg-transparent transition-all duration-200 ease-in"
//                   onClick={handleDecrease}
//                 >
//                   -
//                 </button>
//                 <p className="text-xl border-y-2 border-black px-5 py-2">
//                   {currQuantity > 1 ? currQuantity : 1}
//                 </p>
//                 <button
//                   className="border-2 border-black bg-white px-5 py-2 text-xl hover:bg-transparent transition-all duration-200 ease-in"
//                   onClick={handleIncrease}
//                 >
//                   +
//                 </button>
//               </div>

//               <p className="font-bold font-blinker text-2xl">
//                 {currQuantity > 1
//                   ? currQuantity * selectedProduct.price
//                   : selectedProduct.price}
//                 .00$
//               </p>
//             </div>

//     <div className="flex gap-5">
//       <button
//         className="w-1/2 font-bold text-lg border-2 border-black py-2 hover:cursor-pointer hover:text-white hover:bg-black transition-all duration-200 ease-in-out"
//         onClick={handleAddToCart}
//       >
//         ADD TO CART
//       </button>
//       <button className="w-1/2 font-bold text-lg bg-red-700 text-white hover:cursor-pointer hover:border-2 hover:border-red-700 hover:text-red-700 hover:bg-transparent transition-all duration-200 ease-in-out">
//         BUY NOW
//       </button>
//     </div>
//   </div>
// </div>

//         <div className="flex gap-10 w-full mt-24">
//           <div className="flex flex-col gap-3 w-1/3 bg-gray-200 p-5">
//             <p className="font-bold text-xl">Texture:</p>
//             <p>{selectedProduct.texture}</p>
//           </div>

//           <div className="flex flex-col gap-3 w-1/3 bg-gray-200 p-5">
//             <p className="font-bold text-xl">Weight:</p>
//             <p>{selectedProduct.weight}kg</p>
//           </div>

//           <div className="flex flex-col gap-3 w-1/3 bg-gray-200 p-5">
//             <p className="font-bold text-xl">Size:</p>
//             <p>{selectedProduct.size}</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
