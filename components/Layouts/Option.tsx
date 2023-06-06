import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode;
    value: string
}

function Option({children, ...props}: Props) {
  return  <option {...props}>{children}</option>
}

export default Option