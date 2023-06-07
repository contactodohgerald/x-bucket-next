import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  details?: {
    title: string;
  };
}

function Products({ details }: Props) {
  return (
    <>
      <div className="flex flex-col items-center justify-between p-12">
        <div className="relative">
          <h1 className="absolute -top-14 left-0 text-[120px] font-bold opacity-5 md:block hidden">
            Services
          </h1>
          <h1 className="text-5xl font-bold">
            {" "}
            {details?.title} <span className="text-blue-500"> Services</span>{" "}
          </h1>
          <div className="flex w-24 mt-1 mb-6 overflow-hidden rounded md:mb-14">
            <div className="flex-1 h-2 bg-blue-200"></div>
            <div className="flex-1 h-2 bg-blue-400"></div>
            <div className="flex-1 h-2 bg-blue-600"></div>
            <div className="flex-1 h-2 bg-blue-900"></div>
          </div>
        </div>
        <div className="grid text-center lg:grid-cols-4 grid-cols-2 lg:text-left">
          <Link
            href="storytelling"
            className="group rounded-lg border-2 shadow-xl px-5 py-4 transition-colors border-l-gray-300 hover:border-b-indigo-300 hover:bg-gray-300"
          >
            <Image
              src="/used/storytelling.png"
              alt={details ? details.title : ""}
              className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none mb-3"
              width={40}
              height={14}
              priority
              // style={{ width: 50, height: 16 }}
            />
            <h2 className="mb-3 lg:text-2xl text-1xl lg:font-semibold">
              Tell me a Story
            </h2>
          </Link>

          <Link
            href="generaterecipe"
            className="group rounded-lg border-2 shadow-xl px-5 py-4 transition-colors border-l-gray-300 hover:border-b-indigo-300 hover:bg-gray-300"
          >
            <Image
              src="/used/recipemaking.png"
              alt={details ? details.title : ""}
              className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none mb-3"
              width={40}
              height={14}
              priority
              // style={{ width: 50, height: 16 }}
            />
            <h2 className="mb-3 lg:text-2xl text-1xl lg:font-semibold">
              Give me a Recipe
            </h2>
          </Link>

          <Link
            href="https://x-search-eight.vercel.app/"
            target="_blank"
            className="group rounded-lg border-2 shadow-xl px-5 py-4 transition-colors border-l-gray-300 hover:border-b-indigo-300 hover:bg-gray-300"
          >
            <Image
              src="/used/coverletter.png"
              alt={details ? details.title : ""}
              className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none mb-3"
              width={40}
              height={14}
              priority
              // style={{ width: 50, height: 16 }}
            />
            <h2 className="mb-3 lg:text-2xl text-1xl lg:font-semibold">
              Goto X-Search
            </h2>
          </Link>

          <Link
            href="joketelling"
            className="group rounded-lg border-2 shadow-xl px-5 py-4 transition-colors border-l-gray-300 hover:border-b-indigo-300 hover:bg-gray-300"
          >
            <Image
              src="/used/jokes.png"
              alt={details ? details.title : ""}
              className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none mb-3"
              width={40}
              height={14}
              priority
              // style={{ width: 50, height: 16 }}
            />
            <h2 className="mb-3 lg:text-2xl text-1xl lg:font-semibold">
              Tell me a Joke
            </h2>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Products;
