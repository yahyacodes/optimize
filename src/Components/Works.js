import React from "react";

const HowItWorks = () => {
  return (
    <section className="relative py-20 2xl:py-20 overflow-hidden bg-green-50">
      <div className="container px-4 mx-auto">
        <h1 className="text-center text-3xl lg:text-4xl font-display font-heading mb-10">
          How It Works
        </h1>

        <div className="grid grid-cols-3 text-center gap-4 mx-auto">
          <div className="border-t-4 border-purple pt-4">
            <p className="uppercase text-purple font-display">Step 1</p>

            <p className="font-body text-gray-400">Login Dashboard</p>
          </div>
          <div className="border-t-4 border-orange-400 pt-4">
            <p className="uppercase text-orange-400 font-display">Step 2</p>

            <p className="font-body text-gray-400">Test your website</p>
          </div>
          <div className="border-t-4 border-green-400 pt-4">
            <p className="uppercase text-green-400 font-display">Step 3</p>

            <p className="font-body text-gray-400">See the results</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
