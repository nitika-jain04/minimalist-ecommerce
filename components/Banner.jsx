import Link from "next/link";

export default function Banner2() {
  return (
    <div className="px-5 mt-28 md:flex xl:px-36 w-full styles.blinker">
      <div className="bg-gray-200 flex flex-col gap-3 justify-between px-10 py-20 md:px-32 md:py-32 md:w-1/2 xl:py-40">
        <h2 className="text-3xl font-semibold tracking-tight">
          Creative Harmonious Living
        </h2>
        <p className="text-lg font-medium leading-6">
          RAOUF Products are all made to standard sizes so that you can mix and
          match them freely.
        </p>
        <Link href="/categories/all">
          <button className="bg-black border-2 border-white text-white font-semibold px-3 py-2 text-lg hover:bg-white hover:text-black hover:border-2 hover:border-black transition-all duration-500 ease-in">
            SHOP NOW
          </button>
        </Link>
      </div>

      <img
        className="hidden md:inline md:w-1/2"
        src="/adBanner1.jpg"
        alt="Banner"
      />
    </div>
  );
}
