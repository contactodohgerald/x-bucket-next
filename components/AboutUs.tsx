import React from "react";

interface Props {
  details?: {
    title: string;
  };
}

function AboutUs({ details }: Props) {
  return (
    <>
      <section className="flex items-center ">
        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div className="flex flex-wrap items-center ">
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <div className="lg:max-w-md">
                <span className="text-3xl md:text-2xl font-semibold uppercase">
                  About {details?.title}
                </span>
                <h2 className="mt-4 mb-6 text-2xl md:text-1xl font-bold text-gray-500">
                  An AI Store Transforming Storytelling, Joke Telling, and
                  Recipe Generation
                </h2>
                <p className="mb-3 text-gray-600 dark:text-gray-400 ">
                  {details?.title} is an innovative AI store that offers a range
                  of services powered by AI. With cutting-edge technology and
                  natural language processing capabilities, {details?.title}{" "}
                  harnesses the power of AI to provide unique and engaging
                  experiences in the realms of storytelling, joke telling, and
                  recipe generation. Let's explore how {details?.title} utilizes
                  AI to revolutionize these creative domains.
                </p>
                <p className="mb-10 text-gray-600 dark:text-gray-400 ">
                  {details?.title} is revolutionizing storytelling, joke
                  telling, and recipe generation by harnessing the capabilities
                  of AI. Through its AI store, {details?.title} brings forth a
                  new era of creativity and entertainment, offering users the
                  opportunity to experience captivating narratives, hilarious
                  jokes, and innovative recipes. With {details?.title}, the
                  boundaries of human imagination and AI technology blend
                  harmoniously, providing delightful experiences that inspire
                  and entertain users worldwide.
                </p>
              </div>
            </div>
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <div className="flex mb-4">
                <span className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-blue-500 rounded dark:bg-blue-500 dark:text-gray-100 text-gray-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-5 h-5 bi bi-file-earmark-code"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
                    <path d="M8.646 6.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 9 8.646 7.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 9l1.647-1.646a.5.5 0 0 0 0-.708z" />
                  </svg>
                </span>
                <div>
                  <h2 className="mb-4 text-xl font-bold leading-tight md:text-2xl">
                    Storytelling
                  </h2>
                  <p className="text-base leading-loose text-gray-500 dark:text-gray-400">
                    {details?.title}'s storytelling service takes users on
                    captivating journeys through the power of AI-generated
                    narratives. Users provide prompts or story outlines, and{" "}
                    {details?.title}'s intelligent algorithms generate
                    imaginative and intriguing stories. Whether it's a thrilling
                    adventure, a heartwarming tale, or a sci-fi epic,{" "}
                    {details?.title} brings the art of storytelling to life in a
                    completely new and immersive way.
                  </p>
                </div>
              </div>
              <div className="flex mb-4">
                <span className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-blue-500 rounded dark:bg-blue-500 dark:text-gray-100 text-gray-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-5 h-5 bi bi-file-text"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                  </svg>
                </span>
                <div>
                  <h2 className="mb-4 text-xl font-bold leading-tight md:text-2xl">
                    Joke Telling
                  </h2>
                  <p className="text-base leading-loose text-gray-500 dark:text-gray-400">
                    Humor is an essential part of our lives, and{" "}
                    {details?.title}'s joke telling service is here to deliver
                    laughter. {details?.title} generates humorous jokes that are
                    sure to tickle your funny bone. Whether you need a quick
                    laugh or want to lighten the mood, {details?.title}'s
                    AI-powered jokes are tailored to bring joy and amusement to
                    users.
                  </p>
                </div>
              </div>
              <div className="flex mb-4">
                <span className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-blue-500 rounded dark:bg-blue-500 dark:text-gray-100 text-gray-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-5 h-5 bi bi-bank2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916l-7.5-5zM12.375 6v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1H.5z"></path>
                  </svg>
                </span>
                <div>
                  <h2 className="mb-4 text-xl font-bold leading-tight md:text-2xl">
                    Recipe Generation
                  </h2>
                  <p className="text-base leading-loose text-gray-500 dark:text-gray-400">
                    {details?.title} also explores the culinary domain with its
                    recipe generation service. Users can provide ingredient
                    preferences or dietary restrictions, and {details?.title}'s
                    AI algorithms, generate unique and creative recipes. From
                    delectable desserts to savory main courses, {details?.title}
                    's recipe generation offers culinary inspiration and
                    innovative twists that can impress even the most discerning
                    food enthusiasts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
