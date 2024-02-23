"use client";

import Navbar from "@/components/Navbar";
import HeroPage from "@/components/HeroSection";
import ProudProductsPage from "@/components/ProudProducts";
import Banner from "@/components/Banner";
import TrendingProducts from "@/components/TrendingProducts";
import Banner2 from "@/components/Banner2";
import Footer from "@/components/Footer";
import { CartContextProvider } from "../store/shopping-cart-context";

export default function Home() {
  return (
    <div>
      <CartContextProvider>
        <Navbar />
        <HeroPage />
        <ProudProductsPage />
        <Banner />
        <TrendingProducts />
        <Banner2 />
        <Footer />
      </CartContextProvider>
    </div>
  );
}
