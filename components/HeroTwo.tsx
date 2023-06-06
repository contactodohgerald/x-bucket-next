import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

function HeroTwo({children}: Props) {
  return (
    <>
      <div className="w-full bg-center bg-cover h-72 bg-[url('https://i.postimg.cc/Y23w2gc1/pexels-ricardo-esquivel-1586298.jpg')]">
        <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 bg-black-600 backdrop-brightness-50">
          <div className="text-center">
            <h1 className="mb-10 text-2xl font-semibold text-white uppercase lg:text-5xl">
              {children} {" "}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroTwo;
