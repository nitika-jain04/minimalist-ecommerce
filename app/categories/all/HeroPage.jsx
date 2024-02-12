import { MdArrowBackIos } from "react-icons/md";
import Link from "next/link";
import { allData } from "../../../data";

export default function HeroPage() {
  return (
    <div className="px-5 xl:px-36">
      <div className="flex justify-between items-center mt-20">
        <div className="flex items-center">
          <MdArrowBackIos />
          <Link href="/">Home</Link>
        </div>

        <div className="w-full text-center">
          <h1 className="font-bold text-2xl font-blinker">ALL</h1>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mt-10">
        <button className="border-2 border-gray-400 px-3 font-blinker hover:border-2 hover:border-gray-600 hover:cursor-pointer">
          <Link href="/categories/all">All</Link>
        </button>
        <button className="border-2 border-gray-400 px-3 font-blinker hover:border-2 hover:border-gray-600 hover:cursor-pointer">
          <Link href="/categories/furnitures">Furnitures</Link>
        </button>
        <button className="border-2 border-gray-400 px-3 font-blinker hover:border-2 hover:border-gray-600 hover:cursor-pointer">
          <Link href="/categories/electronics">Electronics</Link>
        </button>
        <button className="border-2 border-gray-400 px-3 font-blinker hover:border-2 hover:border-gray-600 hover:cursor-pointer">
          <Link href="/categories/lamps">Lamps</Link>
        </button>
        <button className="border-2 border-gray-400 px-3 font-blinker hover:border-2 hover:border-gray-600 hover:cursor-pointer">
          <Link href="/categories/kitchen">Kitchen</Link>
        </button>
        <button className="border-2 border-gray-400 px-3 font-blinker hover:border-2 hover:border-gray-600 hover:cursor-pointer">
          <Link href="/categories/chairs">Chairs</Link>
        </button>
        <button className="border-2 border-gray-400 px-3 font-blinker hover:border-2 hover:border-gray-600 hover:cursor-pointer">
          <Link href="/categories/skincare">Skincare</Link>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 md:h-auto mt-20 gap-5">
        {allData.map((product) => {
          return (
            <AllCard
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

function AllCard({ id, img, name, price }) {
  return (
    <Link href={`/categories/product/${id}`}>
      <article className="w-auto border-2 pt-5 pb-3 border-gray-300 hover:border-black hover:border-2 transition-all duration-300 ease-in-out">
        <img src={img} alt="product-image" />

        <div className="flex flex-col gap-2 pl-3">
          <p className="font-blinker tracking-wide md:w-auto">{name}</p>
          <p className="font-bold text-xl font-blinker">{price}$</p>
        </div>
      </article>
    </Link>
  );
}
