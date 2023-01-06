import React from "react";

const Pricing = () => {
  return (
    <section className="relative py-20 2xl:py-20 overflow-hidden">
      <div className="relative max-w-2xl mx-auto pt-16 px-4 text-center sm:pt-30 sm:px-6 lg:max-w-7xl lg:px-8">
        <p className="text-xl text-gray-400 font-display">
          <span className="block lg:inline">Simple pricing,</span>
          <span className="block lg:inline">no commitment,</span>
        </p>

        <p className="mt-4 text-lg font-body text-gray-400">
          Everything you need for Optimizing your website in one place, Pick a
          plan the best suits you.
        </p>
      </div>

      {/* PricingCards */}
      <div className="relative mt-8 max-w-2xl mx-auto px-4 pb-8 sm:mt-12 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-0">
        <div
          aria-hidden="true"
          className="hidden absolute top-4 bottom-6 left-8 right-8 inset-0 bg-navy rounded-tl-lg rounded-tr-lg lg:block"
        ></div>
        <div className="relative space-y-6 lg:bg-transparent py-6 px-6 pb-3 rounded-lg lg:px lg:py-12">
          <h3 className="text-white text-sm font-display uppercase tracking-wide">
            Personal
          </h3>
          <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
            <div className="mt-3 flex items-center">
              <p className="text-white text-4xl font-display tracking-tight">
                $6.99
              </p>
              <div className="ml-4">
                <p className="text-white text-sm">USD / mo</p>
                <p className="text-pinkLight text-sm">Billed yearly ($50.99)</p>
              </div>
            </div>
            <a
              href="/"
              className="bg-white text-tale hover:bg-gray-50 mt-6 w-full inline-block py-2 px-8 border border-transparent rounded-md shadow-sm text-center text-sm
            font-body sm:mt-0 sm:w-auto lg:w-full"
            >
              Buy Personal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
