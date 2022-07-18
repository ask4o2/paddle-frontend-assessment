import React from "react";

function Banner() {
  return (
    <div className="text-white mt-16">
      <div className="flex flex-col space-y-8 md:space-y-10 mx-auto max-w-2xl px-4">
        <h1 className="text-3xl text-center font-bold md:text-5xl">
          SOMETHING AWESOME IS COMING SOON
        </h1>

        <p className="text-sm md:text-lg text-center text-gray-300">
          Your all-in-one affiliate marketing tracking software
          <span>track, automate</span>, and <span>optimize</span> your
          campaigns.
        </p>

        <div className="flex justify-center text-center space-x-2">
          <div className="p-3 md:p-8 bg-white rounded-md text-gray-700">
            <h1 className="font-bold text-2xl md:text-3xl">7</h1>
            <span className="text-sm">Days</span>
          </div>

          <div className="p-3 md:p-8 bg-white rounded-md text-gray-700">
            <h1 className="font-bold text-2xl md:text-3xl">24</h1>
            <span className="text-sm">hours</span>
          </div>

          <div className="p-3 md:p-8 bg-white rounded-md text-gray-700">
            <h1 className="font-bold text-2xl md:text-3xl">54</h1>
            <span className="text-sm">minutes</span>
          </div>

          <div className="p-3 md:p-8 bg-white rounded-md text-gray-700">
            <h1 className="font-bold text-2xl md:text-3xl">11</h1>
            <span className="text-sm">second</span>
          </div>
        </div>

        {/* form */}
        <div className="flex flex-col space-y-2 md:space-y-0  md:space-x-6 justify-center md:flex-row">
          <input
            className="border-b border-b-gray-500 p-2 bg-transparent outline-none"
            type="text"
            placeholder="First name"
          />
          <input
            className="border-b border-b-gray-500 p-2 bg-transparent outline-none"
            type="text"
            placeholder="Last name"
          />
        </div>

        {/* waitlist form */}
        <div className="flex flex-col rounded-full mx-auto text-sm space-y-4 md:bg-white w-full md:w-[90%] md:flex-row md:space-y-0">
          <input
            className="p-3 bg-transparent pl-8 border-b border-gray-500 flex-grow outline-none text-gray-700 md:border-none"
            type="text"
            placeholder="Enter your email address"
          />
          <button className="rounded-full bg-blue-500 text-sm text-white py-4 px-6">
            JOIN OUR WAITING LIST
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
