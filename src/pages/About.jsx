import { ArrowRightAlt } from "@mui/icons-material";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function About() {
  return (
    <div className="about">
      <Header bg="bg-white" />
      <div className="container relative mx-auto flex flex-col space-y-16 text-white lg:h-screen lg:flex-row">
        <div className="flex flex-col space-y-8 items-center md:items-start lg:absolute lg:top-[30%] lg:right-[20%] lg:left-[20%]">
          <h2 className="text-md ">ABOUT US</h2>

          <p className="text-4xl px-3 font-bold max-w-xl md:text-7xl md:px-0">
            Built for Saas and E-commerce
          </p>
        </div>

        <div className="flex flex-col space-y-8 items-center lg:absolute lg:bottom-28 lg:right-0 lg:max-w-md">
          <p className="text-sm md:text-md md:text-2xl">
            Our tools are easy to set up and use with a user-friendly dashboard
            that enables you to set up, launch, automate and manage
            multi-affiliate campaign in 5 minutes.
          </p>
        </div>
      </div>

      {/* section metrics */}
      <div className="metrcis mt-28 lg:mt-0 py-28">
        <div className="container mx-auto px-6 flex flex-col space-y-8 lg:space-x-20 lg:space-y-0 lg:flex-row">
          <div className="flex flex-col space-y-6">
            <h2 className="text-white text-2xl">WHY US?</h2>

            <p className="text md text-gray-200">
              Were happy to get the best experiences of our products and
              services Were happy to get the best experiences of our products
              and services Were happy to get the best experiences of our
              products and services
            </p>
          </div>

          <div className="flex flex-col space-y-6">
            <h2 className="text-white text-2xl">GROWING WITH YOU</h2>

            <p className="text md text-gray-200">
              Were happy to get the best experiences of our products and
              services Were happy to get the best experiences of our products
              and services Were happy to get the best experiences of our
              products and services
            </p>

            <p className="text md text-gray-200">
              Were happy to get the best experiences of our products and
              services Were happy to get the best experiences of our products
              and services Were happy to get the best experiences of our
              products and services
            </p>
          </div>
        </div>
      </div>
      {/* metrics end */}

      {/* question start */}
      <div className=" bg-blur-blue py-20 px-6">
        <div className=" container mx-auto flex flex-col space-y-6   text-white">
          <h2 className="font-bold text-2xl">Got a Question?</h2>
          <p className="text-md text-gray-200">
            See how Metrics can help your business grow with best affiliate
            marketing tracking software.
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

export default About;
