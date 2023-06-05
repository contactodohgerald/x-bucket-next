import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

function Button({children, ...props}: Props) {
  return <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg transition-all hover:bg-gray-700 text-white bg-gray-900" {...props}>{children}</button>
}

export default Button