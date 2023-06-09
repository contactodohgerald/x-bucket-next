import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  _type: string;
}

function Button({ children, _type, ...props }: Props) {
  if (_type == "auth") {
    return (
      <button
        type="submit"
        className="w-full btn dark:border-gray-700 text-white hover:bg-gray-500"
        {...props}
      >
        {children}
      </button>
    );
  } else if (_type == "subscribe") {
    return (
      <button type="submit" className="w-full btn btn-outline" {...props}>
        {children}
      </button>
    );
  } else if (_type == "copy") {
    return (
      <button className="relative inline-flex items-center justify-start py-1 pl-2 pr-12 overflow-hidden font-semibold text-gray-900 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-300 group">
        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-gray-700 group-hover:h-full"></span>
        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
          <svg
            className="w-5 h-5 text-gray-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
          <svg
            className="w-5 h-5 text-gray-100"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
          {children}
        </span>
      </button>
    );
  } else {
    return (
      <button
        type="submit"
        className="px-4 py-3 text-base font-semibold text-gray-800 border border-gray-800 rounded-full hover:text-gray-200 dark:border-gray-700 hover:bg-gray-800 dark:text-gray-700"
        {...props}
      >
        {children}
      </button>
    );
  }
}

export default Button;
