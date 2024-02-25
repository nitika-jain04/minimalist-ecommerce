import React from "react";
import Link from "next/link";
import { proudProductsData } from "@/data";

export default function ProudProductsPage() {
  return (
    <div className="mx-5 mt-28 xl:px-36">
      <h2 className="text-2xl font-semibold styles.blinker mb-10">
        Products we are proud of
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {proudProductsData.map((product) => {
          return (
            <ProudProductsCard
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

function ProudProductsCard({ id, img, name, price }) {
  return (
    <Link href={`/categories/product/${id}`}>
      <article className="border-2 border-gray-300 pb-2 hover:border-black hover:border-2 transition-all duration-300 ease-in-out">
        <img src={img} alt="product-image" />

        <div className="flex flex-col gap-2 pl-3">
          <p className="styles.blinker text-xl md:text-[17px] tracking-wide">
            {name}
          </p>
          <p className="font-bold text-xl styles.blinker">${price}</p>
        </div>
      </article>
    </Link>
  );
}
