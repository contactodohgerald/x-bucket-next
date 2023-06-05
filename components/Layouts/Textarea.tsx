import React from "react";

function Textarea({...props}) {
  return (
    <>
      <textarea className="block w-full px-4 mb-4 leading-tight text-gray-700 border rounded bg-gray-50 dark:placeholder-gray-400 py-7 dark:border-gray-800 bg-gray-100 " {...props} ></textarea>
    </>
  );
}

export default Textarea;
