"use client";

import { useContext } from "react";
import CartContext from "@/store/shopping-cart-context";

import Link from "next/link";
import { useState, useEffect } from "react";
import { PiShoppingCartBold } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import Billing from "./Billing";
import Backdrop from "./Backdrop";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const cartCtx = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [navPadding, setNavPadding] = useState("py-4");
  const [totalCartItems, setTotalCartItems] = useState(0);

  useEffect(() => {
    // Fetch data or calculate dynamic content on the client side
    const newTotalCartItems = cartCtx.items.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setTotalCartItems(newTotalCartItems);
  }, [cartCtx.items]);

  function handleClick(click) {
    setOpen(click);
  }

  function handleSidebar(click) {
    setOpenSidebar(click);
  }

  const listenScrollEvent = () => {
    window.scrollY > 20 ? setNavPadding("py-1") : setNavPadding("py-4");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Run only on the client side
      window.addEventListener("scroll", listenScrollEvent);

      // Cleanup the event listener when the component unmounts
      return () => {
        window.removeEventListener("scroll", listenScrollEvent);
      };
    }
  }, []);

  return (
    <nav
      className={`flex justify-between px-5 shadow-md mb-5 sticky top-0 z-50 bg-white xl:px-36 overscroll-none overscroll-y-none ${navPadding}`}
    >
      <Link href="/">
        <img className="w-1/2" src="/logo-real.png" alt="Logo" />
      </Link>

      <div className="flex gap-4 items-center">
        <Link
          className="hidden sm:block hover:underline font-blinker"
          href="/categories/all"
        >
          CATEGORIES
        </Link>
        <Link
          className="hidden sm:block tracking-tight hover:underline font-blinker"
          href="/categories/product/19"
        >
          PRODUCT PAGE
        </Link>

        <div className="flex flex-col relative hover:scale-110 hover:cursor-pointer">
          <sup className="absolute -right-2 -top-2 text-sm px-2 text-white bg-red-600 rounded-full font-blinker font-medium">
            {totalCartItems}
          </sup>
          <PiShoppingCartBold
            className="text-2xl m-2"
            onClick={() => handleClick(true)}
          />
        </div>
        <RxHamburgerMenu
          className="text-xl font-bold sm:hidden"
          onClick={() => handleSidebar(true)}
        />
      </div>

      {open && <Backdrop handleClick={handleClick} />}
      {openSidebar && (
        <Sidebar isOpen={openSidebar} handleSidebar={handleSidebar} />
      )}
      {open && <Billing isOpen={open} handleClick={handleClick} />}
    </nav>
  );
}
