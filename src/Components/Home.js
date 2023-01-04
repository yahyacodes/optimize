import React from "react";

import { BsArrowDownCircle } from "react-icons/bs";
import "../CSS/Home.css";

import adobestock from "../optimize-images/Untitled-2-removebg-preview.png";
import Features from "./Features";
import Pricing from "./Pricing";
import HowItWorks from "./Works";

const Home = () => {
  return (
    <>
      <section className="bg-bn mb-20">
        <div className="flex flex-wrap items-center m-auto container flex-auto">
          <div className="w-full lg:w-1/2 px-3 md:order-1 order-2">
            <div className="py-0 md:py-12 md:p-20 mt-10">
              <div className="relative max-w-xl mx-auto lg:mx-0 mb-8 text-center lg:text-left">
                <h1 className="text-4xl text-gray-700 font-display">
                  Optimize your site <span className="text-blue">before </span>
                  going live
                </h1>
                <p className="text-base text-gray-400 font-body">
                  Optimizing starts at $0.99, Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Tempore at nobis rem soluta,
                  iure est voluptatem iste adipisci suscipit nam?
                </p>
              </div>
              <button
                type="button"
                className="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-display bg-blue hover:bg-tale rounded sm:ml-10"
              >
                Default
              </button>
              <button
                type="button"
                className="block sm:inline-block py-4 px-8 text-xs text-blue hover:text-tale text-center font-display bg-white border border-blue hover:border-tale rounded mt-2"
              >
                Alternative
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 px-3 mb-12 lg:mb-0 md:order-2 order-1 p-20">
            <div className="flex items-center justify-center">
              <img src={adobestock} alt="" />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center animate-bounce w-8 h-6 max-w-xl mx-auto mt-60 ">
          <BsArrowDownCircle className="w-96 h-20" />
        </div>
      </section>
      <Features />
      <HowItWorks />
      <Pricing />
    </>
  );
};

export default Home;
