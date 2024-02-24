import Link from "next/link";

export default function HeroPage() {
  return (
    <div className="px-5 xl:px-36 grid grid-cols-1 xl:grid-cols-2 gap-3">
      <div className="grid grid-cols-2 gap-3">
        <Link href="/categories/furnitures/">
          <div className="relative">
            <img
              className="h-80 w-full object-cover brightness-75 hover:brightness-50 hover:cursor-pointer transition-all duration-500 ease-in-out"
              src="/furniture.jpg"
              alt=""
            />

            <p className="absolute bottom-0 left-0 text-white p-2 text-2xl md:text-3xl styles.blinker-bold font-semibold">
              Live Comfortably
            </p>
          </div>
        </Link>

        <Link href="/categories/skincare/">
          <div className="relative">
            <img
              className="h-80 w-full object-fill brightness-75 hover:brightness-50 hover:cursor-pointer transition-all duration-500 ease-in-out"
              src="/skincare.jpg"
              alt=""
            />

            <p className="absolute bottom-0 left-0 text-white p-2 text-2xl md:text-3xl styles.blinker-bold font-semibold">
              Skincare
            </p>
          </div>
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Link href="/categories/kitchen/">
          <div className="relative">
            <img
              className="xl:h-80 brightness-75 hover:brightness-50 hover:cursor-pointer transition-all duration-500 ease-in-out"
              src="/kitchen.jpg"
              alt=""
            />

            <p className="absolute bottom-0 left-0 text-white p-2 text-2xl md:text-3xl styles.blinker-bold font-semibold">
              Kitchen
            </p>
          </div>
        </Link>

        <Link href="/categories/electronics/">
          <div className="relative">
            <img
              className="xl:h-80 brightness-75 hover:brightness-50 hover:cursor-pointer transition-all duration-500 ease-in-out"
              src="/electronics.jpg"
              alt=""
            />

            <p className="absolute bottom-0 left-0 text-white p-2 text-2xl md:text-3xl styles.blinker-bold font-semibold">
              Electronics
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
