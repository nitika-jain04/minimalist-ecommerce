import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrendingProducts from "@/components/TrendingProducts";
import { CartContextProvider } from "@/store/shopping-cart-context";

export default function DashboardLayout({ children }) {
  return (
    <div>
      <CartContextProvider>
        <Navbar />
        <section>{children}</section>
        <TrendingProducts />
        <Footer />
      </CartContextProvider>
    </div>
  );
}
