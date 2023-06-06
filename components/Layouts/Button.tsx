import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

function Button({children, ...props}: Props) {
  return <button type='submit' className="px-4 py-2 text-base font-semibold text-gray-800 border border-gray-800 rounded-full hover:text-gray-200 dark:border-gray-700 hover:bg-gray-800 dark:text-gray-700" {...props}>{children}</button>
}

export default Button