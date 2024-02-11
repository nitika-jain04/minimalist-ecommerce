import Link from "next/link";

export default function HeroPage() {
  return (
    <div className="px-5 grid grid-cols-1 gap-2 xl:mx-32 xl:flex xl:gap-5">
      <div className="grid grid-cols-2 gap-2 w-full xl:flex xl:gap-5">
        <div className="relative w-full">
          <Link href="/categories/furnitures">
            <img
              className="brightness-75 hover:brightness-50 hover:cursor-pointer transition-all duration-500 ease-in-out"
              src="/furniture.jpg"
              alt=""
            />
            <p className="absolute bottom-0 left-0 text-white p-2 text-2xl md:text-3xl font-blinker font-bold">
              Live Comfortably
            </p>
          </Link>
        </div>

        <div className="xl:w-1/2 relative">
          <Link href="/categories/skincare">
            <img
              className="h-[240px] w-[300px] md:h-[485px] md:w-[400px] xl:h-[542px] xl:w-[1600px] brightness-75 hover:brightness-50 hover:cursor-pointer transition-all duration-500 ease-in-out"
              src="/skincare.jpg"
              alt=""
            />
            <p className="absolute bottom-0 left-0 text-white p-2 text-2xl md:text-3xl font-blinker font-bold">
              Skincare
            </p>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 xl:flex xl:flex-col xl:gap-5 xl:h-full">
        <div className="xl:h-1/2 relative">
          <Link href="/categories/kitchen">
            <img
              className="brightness-75 hover:brightness-50 hover:cursor-pointer transition-all duration-500 ease-in-out"
              src="/kitchen.jpg"
              alt=""
            />
            <p className="absolute bottom-0 left-0 text-white p-2 text-2xl md:text-3xl font-blinker font-bold">
              Kitchen
            </p>
          </Link>
        </div>

        <div className="xl:h-1/2 relative">
          <Link href="/categories/electronics">
            <img
              className="brightness-75 hover:brightness-50 hover:cursor-pointer transition-all duration-500 ease-in-out"
              src="/electronics.jpg"
              alt=""
            />
            <p className="absolute bottom-0 left-0 text-white p-2 text-2xl md:text-3xl font-blinker font-bold">
              Electronics
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
