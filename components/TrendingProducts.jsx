"use client";
import { useState } from "react";
import Link from "next/link";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { trendingProductsData } from "../data.js";

const cardWidth = 212;

export default function TrendingProducts() {
  const [scrollX, setScrollX] = useState(0);

  function handleScroll(direction) {
    const container = document.getElementById("trending-products-container");
    const scrollAmount =
      direction === "left" ? -cardWidth - 10 : cardWidth + 10;
    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
    setScrollX(scrollX + scrollAmount);
  }

  return (
    <div className="mt-28 mx-5 xl:px-36">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold font-blinker">Trending Now</h3>
        <div className="flex gap-2">
          <button
            className="text-3xl bg-stone-700 text-white hover:bg-black hover:cursor-pointer p-1"
            onClick={() => handleScroll("left")}
          >
            <BiLeftArrowAlt />
          </button>
          <button
            className="text-3xl bg-stone-700 text-white hover:bg-black hover:cursor-pointer p-1"
            onClick={() => handleScroll("right")}
          >
            <BiRightArrowAlt />
          </button>
        </div>
      </div>

      <div
        id="trending-products-container"
        className="flex gap-5 mt-10 overflow-x-auto overflow-y-auto overscroll-x-none"
      >
        {trendingProductsData.map((product) => {
          return (
            <TrendingProductsCard
              key={product.id}
              id={product.id}
              img={product.img}
              name={product.productName}
              price={product.price}
            />
          );
        })}
      </div>
    </div>
  );
}

function TrendingProductsCard({ id, img, name, price }) {
  return (
    <Link href={`/categories/product/${id}`}>
      <article
        style={{ minWidth: `${cardWidth}px` }}
        className="border-2 border-gray-300 pt-5 pb-3 hover:border-black hover:border-2 transition-all duration-300 ease-in-out"
      >
        <img className="" src={img} alt="product-image" />
        <div className="flex flex-col gap-2 pl-3">
          <p className="font-blinker tracking-wide">{name}</p>
          <p className="font-bold text-xl font-blinker">${price}</p>
        </div>
      </article>
    </Link>
  );
}
