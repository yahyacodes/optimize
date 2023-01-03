import React from "react";

import adobestock from "../optimize-images/workflow-optimization-removebg-preview.png";

const Home = () => {
  return (
    <>
      <div className="flex flex-wrap items-center -mx-3">
        <div className="w-full lg:w-1/2 px-3 md:order-1 order-2">
          <div className="py-0">
            <div className="relative max-w-xl mx-auto">
              <h1 className="text-3xl font-display">
                Optimize your site before going live
              </h1>
              <p className="text-base text-gray-400 font-body">
                Optimizing starts at $0.99, Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Tempore at nobis rem soluta, iure
                est voluptatem iste adipisci suscipit nam?
              </p>
            </div>
            <button
              type="button"
              class="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-display bg-blue hover:bg-tale rounded mt-2 ml-32"
            >
              Default
            </button>
            <button
              type="button"
              class="block sm:inline-block py-4 px-8 text-xs text-blue hover:text-tale text-center font-display bg-white border border-blue hover:border-tale rounded mt-2"
            >
              Alternative
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 px-3 mb-12 lg:mb-0 md:order-2 order-1 p-20">
          <div className="flex items-center justify-center">
            <img src={adobestock} alt="" className="p-20 w-8/4" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
