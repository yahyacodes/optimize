import React from "react";

import "../CSS/Home.css";

const Testimonials = () => {
  return (
    <section className="relative py-20 2xl:py-20 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="max-w-lg mx-auto mb-12 text-center">
          <svg
            className="mx-auto mb-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="40"
            height="40"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 
              1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 
              0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 
              6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 
              3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"
              fill="rgba(41,114,243,1)"
            />
          </svg>
          <h2 className="mb-5 text-2xl md:text-2xl font-display font-heading text-gray-500">
            What our customers are saying about us
          </h2>
          <p className="text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
            repellendus tenetur fugiat iste delectus pariatur?
          </p>
        </div>

        <div className="flex flex-wrap mb-6">
          <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
            <div className="p-8 bg-white shadow rounded">
              <div className="flex items-center mb-4">
                <img
                  className="h-16 w-16 rounded-full object-cover"
                  src="https://randomuser.me/api/portraits/men/11.jpg"
                  alt=""
                />
                <div className="pl-4">
                  <p className="text-lg text-gray-500">John More</p>
                  <p className="text-blue-500">CEO</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                minima maiores similique fugiat consequatur quia non ad quae
                rerum accusamus nobis sunt corporis excepturi, quam iure aliquam
                alias error facilis!
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
            <div className="p-8 bg-white shadow rounded">
              <div className="flex items-center mb-4">
                <img
                  className="h-16 w-16 rounded-full object-cover"
                  src="https://randomuser.me/api/portraits/women/11.jpg"
                  alt=""
                />
                <div className="pl-4">
                  <p className="text-lg text-gray-500">Jessica Davies</p>
                  <p className="text-blue-500">Product Manager</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                minima maiores similique fugiat consequatur quia non ad quae
                rerum accusamus nobis sunt corporis excepturi, quam iure aliquam
                alias error facilis!
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
            <div className="p-8 bg-white shadow rounded">
              <div className="flex items-center mb-4">
                <img
                  className="h-16 w-16 rounded-full object-cover"
                  src="https://randomuser.me/api/portraits/men/21.jpg"
                  alt=""
                />
                <div className="pl-4">
                  <p className="text-lg text-gray-500">William Smith</p>
                  <p className="text-blue-500">Lead Team</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                minima maiores similique fugiat consequatur quia non ad quae
                rerum accusamus nobis sunt corporis excepturi, quam iure aliquam
                alias error facilis!
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
            <div className="p-8 bg-white shadow rounded">
              <div className="flex items-center mb-4">
                <img
                  className="h-16 w-16 rounded-full object-cover"
                  src="https://randomuser.me/api/portraits/women/21.jpg"
                  alt=""
                />
                <div className="pl-4">
                  <p className="text-lg text-gray-500">Brittney Adams</p>
                  <p className="text-blue-500">Software Engineer</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                minima maiores similique fugiat consequatur quia non ad quae
                rerum accusamus nobis sunt corporis excepturi, quam iure aliquam
                alias error facilis!
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
            <div className="p-8 bg-white shadow rounded">
              <div className="flex items-center mb-4">
                <img
                  className="h-16 w-16 rounded-full object-cover"
                  src="https://randomuser.me/api/portraits/women/31.jpg"
                  alt=""
                />
                <div className="pl-4">
                  <p className="text-lg text-gray-500">Stephanie</p>
                  <p className="text-blue-500">Recruiter</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                minima maiores similique fugiat consequatur quia non ad quae
                rerum accusamus nobis sunt corporis excepturi, quam iure aliquam
                alias error facilis!
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
            <div className="p-8 bg-white shadow rounded">
              <div className="flex items-center mb-4">
                <img
                  className="h-16 w-16 rounded-full object-cover"
                  src="https://randomuser.me/api/portraits/men/31.jpg"
                  alt=""
                />
                <div className="pl-4">
                  <p className="text-lg text-gray-500">Adam Small</p>
                  <p className="text-blue-500">Frontend Developer</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                minima maiores similique fugiat consequatur quia non ad quae
                rerum accusamus nobis sunt corporis excepturi, quam iure aliquam
                alias error facilis!
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <a
            href="/"
            className="inline-block py-4 px-8 text-xs text-white font-body leading-none bg-tale hover:bg-blue-500 rounded"
          >
            See More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
