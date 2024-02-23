import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="flex gap-5 flex-col py-24 bg-zinc-900 mt-28">
        <h2 className="text-center text-white text-3xl font-extrabold">
          Newsletter
        </h2>
        <div className="flex gap-2 self-center">
          <input
            type="text"
            name="email"
            id=""
            placeholder="your@gmail.com"
            className="p-2"
          />
          <button className="bg-white p-1">Subscribe</button>
        </div>
      </div>

      <div className="bg-black text-white flex flex-col justify-center items-center gap-5 py-5">
        <div className="flex gap-5 flex-wrap p-5 justify-center font-blinker">
          <a className="hover:cursor-pointer hover:underline" href="/">
            About
          </a>
          <a className="hover:cursor-pointer hover:underline" href="/">
            Store Locator
          </a>
          <a className="hover:cursor-pointer hover:underline" href="/">
            FAQs
          </a>
          <a className="hover:cursor-pointer hover:underline" href="/">
            News
          </a>
          <a className="hover:cursor-pointer hover:underline" href="/">
            Careers
          </a>
          <a className="hover:cursor-pointer hover:underline" href="/">
            Contact Us
          </a>
        </div>

        <p className="text-center font-blinker">
          Designed by <span className="hover:cursor-pointer">Raouf</span>
        </p>
      </div>
    </div>
  );
}
