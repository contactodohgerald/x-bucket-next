import React from 'react'

function Input({...props}) {
  return  <input className="w-full px-3 py-2 leading-loose border rounded-md dark:border-gray-700 bg-gray-100" {...props} />
}

export default Input