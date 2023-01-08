import React from "react";

const Contact = () => {
  return (
    <section className="relative py-20 2xl:py-20 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="grid mb-8 rounded-lg drop-shadow  md:mb-12 md:grid-cols-2">
          <figure className="flex flex-col p-8 bg-white rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r">
            <p className="text-lg text-gray-500 font-display mb-5">
              We will respond as soon as possible
            </p>
            <form>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="floating_first_name"
                    id="floating_first_name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none
                     focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_first_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                    peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
                    peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    First name
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="floating_last_name"
                    id="floating_last_name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none
                     focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_last_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                    peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
                    peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Last name
                  </label>
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="email"
                    name="floating_company"
                    id="floating_company"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none
                     focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_company"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                    peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
                    peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email address
                  </label>
                </div>

                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    name="floating_phone"
                    id="floating_phone"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none
                       focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_phone"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                    peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
                    peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Phone number(123-456-7890)
                  </label>
                </div>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <textarea
                  rows="5"
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="floating_phone"
                  id="floating_phone"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent rounded border-2 border-gray-300 appearance-none
                     focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                ></textarea>
                <label
                  htmlFor="floating_phone"
                  className="peer-focus:font-medium absolute left-2 text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                    peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
                    peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                >
                  Your message
                </label>
              </div>
              <button
                type="submit"
                className="text-white bg-tale hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg 
                text-sm w-full px-5 py-2.5 text-center"
              >
                Submit
              </button>
            </form>
          </figure>

          <figure className="flex flex-col p-8 bg-blue-700 border-b rounded-tr-lg ">
            <p className="text-lg text-white font-display mb-5">Reach us</p>
            <div className="flex space-x-4 md:ml-40">
              <div className="text-white font-display text-xl">Email</div>
              <div className="text-white font-body">optimize@website.co</div>
            </div>{" "}
            <br />
            <div className="flex space-x-4 md:ml-40">
              <div className="text-white font-display text-xl">Phone</div>
              <div className="text-white font-body">+1011222333</div>
            </div>{" "}
            <br />
            <div className="flex space-x-4 md:ml-40">
              <div className="text-white font-display text-xl">Address</div>
              <div className="text-white font-body">
                #121, Ground Floor, 7th cross <br /> Same Layout, Same Road,{" "}
                <br />
                New York Area, <br /> New York City 05000100
              </div>
            </div>
            {/* <ul className="lg:border-t-0">
              <li className="py-3 flex items-center">
                <span className="text-white ml-3 text-sm font-display">
                  Email
                </span>
                5 Gb Storage
              </li>

              <li className="py-3 flex items-center">
                <span className="text-white ml-3 text-sm font-display">
                  1 Gb RAM Memory
                </span>
              </li>

              <li className="py-3 flex items-center">
                <span className="text-white ml-3 text-sm font-display">
                  6 Site (plus 2 Cloned sites)
                </span>
              </li>
            </ul> */}
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Contact;
