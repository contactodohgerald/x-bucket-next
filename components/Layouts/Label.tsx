import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
    htmlFor: string
}

function Label({children, ...props}: Props) {
  return  <label {...props}>{children}</label>
}

export default Label