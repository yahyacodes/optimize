import React from "react";

import { AiOutlineCheck } from "react-icons/ai";

const Pricing = () => {
  return (
    <section className="relative py-20 2xl:py-20 overflow-hidden">
      <div id="pricing">
        <div className="relative">
          <div
            aria-hidden="true"
            className="hidden absolute  w-full h-6 bottom-0 lg:block"
          ></div>

          <div className="relative max-w-2xl mx-auto pt-16 px-4 text-center sm:pt-30 sm:px-2 lg:max-w-7xl lg:px-8">
            <strong className="text-2xl sm:text-2xl text-gray-500">
              <span className="block lg:inline">Simple pricing,</span>
              <span className="block lg:inline">no commitment.</span>
            </strong>
            <p className="mt-4 text-lg text-gray-300">
              Everything you need, nothing you don't. Pick a plan that best
              suits your business.
            </p>
          </div>

          <h2 className="sr-only">Plans</h2>

          <div className="relative mt-8 max-w-2xl mx-auto px-4 pb-8 sm:mt-12 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-0">
            <div
              aria-hidden="true"
              className="hidden absolute top-4 bottom-6 left-8 right-8 inset-0 bg-tale rounded-tl-lg rounded-tr-lg lg:block"
            ></div>

            <div className="relative space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3">
              <div className="bg-tale lg:bg-transparent py-6 px-6 pb-3 rounded-lg lg:px-8 lg:py-12">
                <div>
                  <h3 className="text-white text-sm font-semibold uppercase tracking-wide">
                    Personal
                  </h3>
                  <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                    <div className="mt-3 flex items-center font-body">
                      <p className="text-white text-4xl font-extrabold tracking-tight">
                        $6.99
                      </p>
                      <div className="ml-4">
                        <p className="text-white text-sm">USD / mo</p>
                        <p className="text-pinkLight text-sm">
                          Billed yearly ($60)
                        </p>
                      </div>
                    </div>
                    <a
                      href="/"
                      className="bg-white text-tale hover:bg-purple-50 mt-6 w-full inline-block py-2 px-8 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full"
                    >
                      Buy Personal
                    </a>
                  </div>
                </div>
                <h4 className="sr-only">Features</h4>
                <ul className="border-pinkLight divide-pinkLight divide-opacity-75 my-7 border-t divide-y lg:border-t-0">
                  <li className="py-3 flex items-center">
                    <AiOutlineCheck className="text-white" />
                    <span className="text-white ml-3 text-sm font-display">
                      1 Gb Storage
                    </span>
                  </li>

                  <li className="py-3 flex items-center">
                    <AiOutlineCheck className="text-white" />
                    <span className="text-white ml-3 text-sm font-display">
                      500 Mb RAM Memory
                    </span>
                  </li>

                  <li className="py-3 flex items-center">
                    <AiOutlineCheck className="text-white" />
                    <span className="text-white ml-3 text-sm font-display">
                      1 Site (plus Cloned site)
                    </span>
                  </li>
                </ul>
                <small className="text-blue-200 inline-block">
                  Total resource usage including site + database.
                </small>
                <small className="text-blue-200 inline-block">
                  Shared resourced{" "}
                </small>
                <small className="text-blue-200 inline-block">
                  Cloned sites will use ezyhost subdomains only.{" "}
                </small>
              </div>

              <div className="bg-white ring-2 ring-purple-700 shadow-md py-6 px-6 pb-3 rounded-lg lg:px-8 lg:py-12">
                <div>
                  <h3 className="text-purple-600 text-sm font-semibold uppercase tracking-wide">
                    Pro
                  </h3>
                  <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                    <div className="mt-3 flex items-center">
                      <p className="text-purple-600 text-4xl font-extrabold tracking-tight">
                        $21.99
                      </p>
                      <div className="ml-4">
                        <p className="text-gray-400 text-sm">USD / mo</p>
                        <p className="text-gray-400 text-sm">
                          Billed yearly ($250)
                        </p>
                      </div>
                    </div>
                    <a
                      href="/"
                      className="bg-tale text-white hover:bg-purple-700 mt-6 w-full inline-block py-2 px-8 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full"
                    >
                      Buy Pro
                    </a>
                  </div>
                </div>
                <h4 className="sr-only">Features</h4>
                <ul className="border-gray-200 divide-gray-200 my-7 border-t divide-y lg:border-t-0">
                  <li className="py-3 flex items-center">
                    <AiOutlineCheck />
                    <span className="text-gray-600 ml-3 text-sm font-display">
                      5 Gb Storage
                    </span>
                  </li>

                  <li className="py-3 flex items-center">
                    <AiOutlineCheck />
                    <span className="text-gray-600 ml-3 text-sm font-display">
                      1 Gb RAM Memory
                    </span>
                  </li>

                  <li className="py-3 flex items-center">
                    <AiOutlineCheck />
                    <span className="text-gray-600 ml-3 text-sm font-display">
                      6 Site (plus 2 Cloned sites)
                    </span>
                  </li>
                </ul>
                <small className="text-gray-400 inline-block">
                  Total resource usage including site + database.
                </small>
                <small className="text-gray-400 inline-block">
                  Shared resourced{" "}
                </small>
                <small className="text-gray-400 inline-block">
                  Cloned sites will use ezyhost subdomains only.{" "}
                </small>
              </div>

              <div className="bg-tale lg:bg-transparent py-6 px-6 pb-3 rounded-lg lg:px-8 lg:py-12">
                <div>
                  <h3 className="text-white text-sm font-semibold uppercase tracking-wide">
                    Enterprise
                  </h3>
                  <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                    <div className="mt-3 flex items-center">
                      <p className="text-white text-4xl font-extrabold tracking-tight">
                        $14.99
                      </p>
                      <div className="ml-4">
                        <p className="text-white text-sm">USD / mo</p>
                        <p className="text-pinkLight text-sm">
                          Billed yearly ($160)
                        </p>
                      </div>
                    </div>
                    <a
                      href="/"
                      className="bg-white text-tale hover:bg-gray-50 mt-6 w-full inline-block py-2 px-8 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full"
                    >
                      Buy Enterprise
                    </a>
                  </div>
                </div>
                <h4 className="sr-only">Features</h4>
                <ul className="border-purple-500 divide-purple-500 divide-opacity-75 my-7 border-t divide-y lg:border-t-0">
                  <li className="py-3 flex items-center">
                    <AiOutlineCheck className="text-white" />
                    <span className="text-white ml-3 text-sm font-display">
                      20 Gb Storage
                    </span>
                  </li>

                  <li className="py-3 flex items-center">
                    <AiOutlineCheck className="text-white" />
                    <span className="text-white ml-3 text-sm font-display">
                      2 Gb RAM Memory
                    </span>
                  </li>

                  <li className="py-3 flex items-center">
                    <AiOutlineCheck className="text-white" />
                    <span className="text-white ml-3 text-sm font-display">
                      10 Site (plus 5 Cloned sites)
                    </span>
                  </li>
                </ul>
                <small className="text-blue-200 inline-block">
                  Total resource usage including site + database.
                </small>
                <small className="text-blue-200 inline-block">
                  Shared resourced{" "}
                </small>
                <small className="text-blue-200 inline-block">
                  Cloned sites will use ezyhost subdomains only.{" "}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
