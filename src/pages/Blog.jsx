import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Search, ArrowRightAlt } from "@mui/icons-material";
import Card from "../components/Card";

function blog() {
  return (
    <div className="blog bg-slate-100">
      <Header text="text-gray-800" buttonBg="md:bg-white" />

      <div className="hero py-16 bg-custom-bg">
        <div className="container mx-auto flex flex-col lg:pl-40">
          <h4 className="text-lg text-gray-300">BLOG</h4>

          <p className="text-white text-4xl font-bold pl-10 mt-10">
            Articles and News
          </p>
        </div>
      </div>

      {/* main blog container */}
      <div className="container mx-auto px-6 mt-14  ">
        <h1 className="text-black text-3xl font-bold md:text-4xl">
          Latest From The Blog
        </h1>

        <div className="flex flex-col lg:justify-between lg:space-x-12 mt-6 space-y-6 md:flex-row md:space-y-0">
          <p className="text-base lg:w-1/2 md:text-lg">
            wjsqwe dvwqvgw2vqg yu1wev yuw3qetywu eydguyid3viv dvwqvgw2vqg yu1wev
            yuw3qetywu eydguyid3viv
          </p>

          <div className="flex py-3 px-4 justify-between items-center border border-gray-600 rounded-full p-3 md:w-1/2 lg:max-w-lg">
            <input
              className="bg-transparent pl-2 outline-none"
              type="text"
              placeholder="Search here"
            />
            <Search />
          </div>
        </div>

        {/* cards container */}
        <div className="flex flex-wrap justify-center mt-16 mx-auto">
          <Card img />
          <Card img />
          <Card img />
          <Card img />
          <Card img />
          <Card img />
        </div>

        {/* Recent articles */}
        <div className="flex flex-col py-16 space-y-8">
          <div className="flex flex-col space-y-6">
            <h2 className="text-black text-3xl font-bold md:text-4xl">
              Recent Articles
            </h2>

            <p className="text-base text-gray-600 md:text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Excepturi fuga vel commodi.
            </p>
          </div>

          {/* Artcile cards container */}
          <div className="flex flex-wrap justify-center">
            <Card />
            <Card />
            <Card />
          </div>

          <button className="px-5 py-3 w-64 text-center text-white rounded-full bg-blue-600 mx-auto">
            LOAD MORE
          </button>
        </div>
      </div>
      {/* question start */}
      <div className=" bg-blur-blue py-20 px-6">
        <div className=" container mx-auto flex flex-col space-y-6   text-white">
          <h2 className="font-bold text-2xl">
            Want To Know More About Metrics ?
          </h2>
          <p className="text-md text-gray-200">
            Learn who we are and what drives us.
          </p>

          <button className="text-left text-lg text-custom-purple">
            Contact us{" "}
            <span>
              <ArrowRightAlt />
            </span>
          </button>
        </div>
      </div>
      {/* question end */}

      <Footer />
    </div>
  );
}

export default blog;
