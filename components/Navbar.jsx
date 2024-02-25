"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";
import CartContext from "@/store/shopping-cart-context";

import Link from "next/link";
import { useState, useEffect } from "react";
import { PiShoppingCartBold } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdLogin, MdLogout } from "react-icons/md";
import Billing from "./Billing";
import Backdrop from "./Backdrop";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const router = useRouter();
  const cartCtx = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [navPadding, setNavPadding] = useState("py-4");
  const [totalCartItems, setTotalCartItems] = useState(0);
  const [user, setUser] = useState(null);

  function handleClick(click) {
    if (user === null) {
      router.push("/account");
    }
    setOpen(click);
  }

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  useEffect(() => {
    const newTotalCartItems = cartCtx.items.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setTotalCartItems(newTotalCartItems);
  }, [cartCtx.items]);

  function handleSidebar(click) {
    setOpenSidebar(click);
  }

  const listenScrollEvent = () => {
    window.scrollY > 20 ? setNavPadding("py-0") : setNavPadding("py-4");
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
      className={`flex justify-between px-5 shadow-md mb-5 sticky top-0 z-40 bg-white xl:px-36 overscroll-none overscroll-y-none ${navPadding}`}
    >
      <Link href="/">
        <img className="w-1/2" src="/logo-real.png" alt="Logo" />
      </Link>

      <div className="flex gap-4 items-center">
        <Link
          className="hidden text-[19px] sm:block hover:underline styles.blinker"
          href="/categories/all"
        >
          CATEGORIES
        </Link>
        <Link
          className="hidden text-[19px] sm:block tracking-tight hover:underline styles.blinker"
          href="/categories/product/19"
        >
          PRODUCT PAGE
        </Link>

        <div className="flex flex-col relative hover:scale-110 hover:cursor-pointer">
          <sup className="absolute -right-2 -top-2 text-sm px-2 text-white bg-red-600 rounded-full styles.blinker font-medium">
            {totalCartItems}
          </sup>

          <PiShoppingCartBold
            className={`text-2xl m-2`}
            onClick={() => handleClick(true)}
          />
        </div>

        <RxHamburgerMenu
          className="text-xl font-bold sm:hidden"
          onClick={() => handleSidebar(true)}
        />

        <button className="bg-red-500 gap-2 items-center text-white p-3 rounded-xl styles.blinker tracking-wide border-2 border-white hover:scale-105 hover:bg-white hover:text-red-600 hover:border-2 hover:border-red-500 transition-all duration-300 ease-in">
          {user === null ? (
            <Link href="/account">
              <div className="flex gap-2 items-center">
                <MdLogin />
                <h1 className="styles.blinker font-medium">Log In</h1>
              </div>
            </Link>
          ) : (
            <div
              className="flex gap-1 xl:gap-2 items-center"
              onClick={() => {
                localStorage.removeItem("user");
                router.push("/account");
              }}
            >
              <MdLogout />
              <h1 className="styles.blinker font-medium">Sign Out</h1>
            </div>
          )}
        </button>
      </div>

      {open && <Backdrop handleClick={handleClick} />}
      {openSidebar && (
        <Sidebar isOpen={openSidebar} handleSidebar={handleSidebar} />
      )}
      {open && <Billing isOpen={open} handleClick={handleClick} />}
    </nav>
  );
}
