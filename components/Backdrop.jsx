import React from "react";

export default function Backdrop({ handleClick }) {
  return (
    <div
      className="w-full h-screen absolute top-0 left-0 bg-stone-600 opacity-40"
      onClick={() => handleClick(false)}
    ></div>
  );
}
