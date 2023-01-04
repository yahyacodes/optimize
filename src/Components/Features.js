import React from "react";

import { BsGraphUp } from "react-icons/bs";
import { AiFillDatabase } from "react-icons/ai";
import { VscGistSecret } from "react-icons/vsc";
import { BsCurrencyDollar } from "react-icons/bs";

const Features = () => {
  return (
    <section className="relative py-20 2xl:py-40 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div>
          <div className="flex flex-wrap">
            <div className="w-full text-center md:w-1/2 lg:w-1/4 lg:px-8 mb-20 lg:mb-0">
              <div className="flex mb-2 justify-center items-center w-20 h-20 bg-lightBlue rounded mx-auto">
                <BsGraphUp className="text-white w-16 h-16" />
              </div>
              <h2 className="text-gray-400 mt-1 text-lg font-bold font-heading">
                Performance
              </h2>
              <p className="text-gray-400 font-body w-60 ml-14">
                Greate Performance to achieve what works best for you
              </p>
            </div>

            <div className="w-full text-center md:w-1/2 lg:w-1/4 px-6 lg:px-8 mb-2 lg:mb-0">
              <div className="flex mb-2 justify-center w-20 h-20 bg-tale rounded mx-auto">
                <AiFillDatabase className="text-white w-16 h-20" />
              </div>
              <h2 className="text-gray-400 mt-1 text-lg font-bold font-heading">
                Backup
              </h2>
              <p className="text-gray-400 font-body w-60 ml-14">
                The brown me quam, sagittis porttitor lorem vel, commodo
                fringilla nisl.
              </p>
            </div>

            <div className="w-full text-center md:w-1/2 lg:w-1/4 px-6 lg:px-8 mb-2 lg:mb-0">
              <div className="flex mb-2 justify-center w-20 h-20 bg-green-500 rounded mx-auto">
                <VscGistSecret className="text-white w-16 h-20" />
              </div>
              <h2 className="text-gray-400 mt-1 text-lg font-bold font-heading">
                Security
              </h2>
              <p className="text-gray-400 font-body w-60 ml-14">
                The brown me quam, sagittis porttitor lorem vel, commodo
                fringilla nisl.
              </p>
            </div>

            <div className="w-full text-center md:w-1/2 lg:w-1/4 px-6 lg:px-8 mb-2 lg:mb-0">
              <div className="flex mb-2 justify-center w-20 h-20 bg-orange-400 rounded mx-auto">
                <BsCurrencyDollar className="text-white w-16 h-20" />
              </div>
              <h2 className="text-gray-400 mt-1 text-lg font-bold font-heading">
                Pricing
              </h2>
              <p className="text-gray-400 font-body w-60 ml-14">
                The brown me quam, sagittis porttitor lorem vel, commodo
                fringilla nisl.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
