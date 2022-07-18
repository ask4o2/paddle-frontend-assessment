import React from "react";

function Card({ img }) {
  return (
    <div className="px-3 py-5 m-3 flex flex-col space-y-4 shadow-lg bg-white max-w-md">
      {img && <img className="w-full" src="/contact.png" alt="blog img" />}

      <p children="text-base text-gray-300">
        SEPTEMBER 2021 FEATURED ARTICLE AFFILIATE
      </p>

      <p className="text-xl text-black">
        12 Popup Use Cases To Increase Conversions
      </p>

      <p className="text-base text-gray-400">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
        aperiam eos corrupti eum, saepe reprehenderit quaerat, rem illum
        doloribus qui porro minus atque fugit nobis, rerum natus suscipit. Sit,
        facere.
      </p>

      <div className="flex items-center space-x-4 mt-8 text-red-400 ">
        <span className="w-12 border-t border-t-red-400 pt-2">.</span>
        <span className="-mt-8">READ MORE</span>
      </div>
    </div>
  );
}

export default Card;
