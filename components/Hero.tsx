import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <>
      <div className="hero min-h-screen bg-[url('/used/hero.png')]">
        <div className="z-10 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="mb-6 text-4xl font-medium leading-10 tracking-tight text-gray-50 md:text-6xl">
                Story / Joke Telling and Recipe Generation
              </h2>
              <p className="mb-6 tracking-wide text-gray-200 sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5">
                X-Bucket harnesses the power of AI to provide unique and engaging experiences in the realms of storytelling, joke telling, and recipe generation.
              </p>
              <div className="justify-center sm:flex">
                <div className="">
                  <button
                    onClick={() => window.register.showModal()}
                    className="flex items-center justify-center w-full px-8 py-3 text-gray-100 bg-blue-600 rounded-md shadow hover:bg-blue-500 "
                >
                    Get started
                </button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    href={'about'}
                    className="flex items-center justify-center w-full px-8 py-3 text-blue-600 bg-gray-100 rounded-md shadow hover:text-gray-100 hover:bg-blue-500 "
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}

export default Hero;
