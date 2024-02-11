import Link from "next/link";
import { IoMdClose } from "react-icons/io";

export default function Sidebar({ isOpen, handleSidebar }) {
  return (
    <div
      className={`p-20 w-screen h-screen absolute top-0 right-0 bg-white ${
        isOpen ? "animate-slide-in" : "animate-slide-out"
      }`}
    >
      <div className="flex justify-end items-center">
        <IoMdClose
          className="text-2xl font-bold"
          onClick={() => handleSidebar(false)}
        />
      </div>
      <ul className="flex flex-col gap-5 mt-5">
        <li className="bg-gray-200 p-2 font-blinker hover:border-2 hover:border-gray-400 border-2 border-gray-200 transition-all duration-300 ease-in-out">
          <Link href="/categories/all">CATEGORIES</Link>
        </li>
        <li className="bg-gray-200 p-2 font-blinker hover:border-2 hover:border-gray-400 border-2 border-gray-200 transition-all duration-300 ease-in-out">
          <Link href="/categories/product/12">PRODUCT PAGE</Link>
        </li>
      </ul>
    </div>
  );
}
