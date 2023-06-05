import React from "react";

interface Props {
  details?: {
    title: string;
  };
}

function Pricing({ details }: Props) {
  return (
    <>
      <section className="flex bg-gray-100">
        <div className="px-4 py-20 w-full mx-auto max-w-full">
          <div className="flex flex-wrap items-center gap-8 lg:flex-nowrap">
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <h1 className="absolute -top-14 left-0 text-[120px] font-bold opacity-5 md:block hidden">
                  {details?.title} Subscription
                </h1>
                <h1 className="text-5xl font-bold">
                  {" "}
                  {details?.title}{" "}
                  <span className="text-blue-500"> Subscription</span>{" "}
                </h1>
                <div className="flex w-24 mt-1 mb-6 overflow-hidden rounded md:mb-14">
                  <div className="flex-1 h-2 bg-blue-200"></div>
                  <div className="flex-1 h-2 bg-blue-400"></div>
                  <div className="flex-1 h-2 bg-blue-600"></div>
                  <div className="flex-1 h-2 bg-blue-900"></div>
                </div>
              </div>
              <div className="w-full px-3 mb-6 -mt-14 lg:px-2 lg:py-6 relative">
                <div className="relative w-full py-2 text-xl font-bold text-center text-gray-700 dark:text-gray-300 dark:from-gray-800 dark:to-gray-800 to-red-200 bg-gradient-to-r from-yellow-200 rounded-t-3xl ">
                  PRO Access
                </div>
                <div className="flex flex-col items-center border-b-2 border-orange-200  bg-gradient-to-r dark:from-gray-800 dark:to-gray-800 from-blue-100 to-gray-200 ">
                  <div className="relative w-full">
                    <div className="absolute inset-0 z-10 w-full h-full bg-green-900 opacity-40"></div>
                    <img
                      src="https://i.postimg.cc/NfNC77Dr/C4-D-018-10.jpg"
                      alt=""
                      className="relative inset-0 z-0 object-cover w-full h-44"
                    />
                    <div className="absolute inset-0 z-10 grid place-items-center">
                      <div className="">
                        <span className="relative text-2xl font-bold text-gray-200 -top-6 right-1">
                          NGN
                        </span>
                        <span className="font-bold text-gray-200 text-7xl dark:text-gray-300">
                          800
                        </span>
                        <div className="text-lg font-medium text-gray-200 dark:text-gray-300">
                          / per month
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex -mt-7">
                    <div className="z-10 flex items-center justify-center px-6 py-2 text-center rounded-md bg-gray-900 hover:bg-gray-700">
                      <a href="" className="">
                        {" "}
                        <span className="relative text-xl font-medium text-gray-700 dark:text-gray-400 ">
                          Continue {" ->"}
                        </span>
                      </a>
                    </div>
                  </div>
                  <ul className="mt-6 mb-4 lg:py-2 lg:self-center">
                    <li className="flex items-center mb-4 font-medium text-gray-500 dark:text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-check-circle mr-2 text-green-800 dark:text-gray-400"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"></path>
                      </svg>
                      <span>Ulimited Usage</span>
                    </li>
                    <li className="flex items-center mb-4 font-medium text-gray-500 dark:text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-check-circle mr-2 text-green-800 dark:text-gray-400"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"></path>
                      </svg>
                      <span>Ads free experience</span>
                    </li>
                    <li className="flex items-center mb-4 font-medium text-gray-500 dark:text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-check-circle mr-2 text-green-800 dark:text-gray-400"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"></path>
                      </svg>
                      <span> Higher word counts in response</span>
                    </li>
                    <li className="flex items-center mb-4 font-medium text-gray-500 dark:text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-check-circle mr-2 text-green-800 dark:text-gray-400"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"></path>
                      </svg>
                      <span> No Commitment, Cancel anytime</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
              <div className="w-full p-8 text-center transition-all bg-white rounded shadow dark:bg-gray-700 hover:shadow-lg">
                <div className="inline-block p-4 mb-4 bg-blue-400 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    className="text-white"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm-.5 5a.5.5 0 0 1 1 0v1.5H10a.5.5 0 0 1 0 1H8.5V9a.5.5 0 0 1-1 0V7.5H6a.5.5 0 0 1 0-1h1.5V5z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-black dark:text-white">
                  {" "}
                  Storytelling{" "}
                </h3>
              </div>
              <div className="w-full p-8 text-center transition-all bg-white rounded shadow dark:bg-gray-700 hover:shadow-lg">
                <div className="inline-block p-4 mb-4 bg-blue-400 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    className="text-white"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-black dark:text-white">
                  {" "}
                  Joke Telling{" "}
                </h3>
              </div>
              <div className="w-full p-8 text-center transition-all bg-white rounded shadow dark:bg-gray-700 hover:shadow-lg">
                <div className="inline-block p-4 mb-4 bg-blue-400 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    className="text-white"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm-.5 5a.5.5 0 0 1 1 0v1.5H10a.5.5 0 0 1 0 1H8.5V9a.5.5 0 0 1-1 0V7.5H6a.5.5 0 0 1 0-1h1.5V5z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-black dark:text-white">
                  {" "}
                  Recipe Generator{" "}
                </h3>
              </div>
              <div className="w-full p-8 text-center transition-all bg-white rounded shadow dark:bg-gray-700 hover:shadow-lg">
                <div className="inline-block p-4 mb-4 bg-blue-400 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    className="text-white"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"></path>
                    <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-black dark:text-white">
                  {" "}
                  Goto X-Search{" "}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pricing;
