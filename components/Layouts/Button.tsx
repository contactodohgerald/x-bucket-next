import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
    _type: string
}

function Button({children, _type, ...props}: Props) {
  if(_type == 'auth'){
    return  <button type="submit" className="w-full btn dark:border-gray-700 text-white hover:bg-gray-500" {...props}>{children}</button> 
  }else if(_type == 'subscribe'){
    return <button type="submit" className="w-full btn btn-outline" {...props}>{children}</button> 
  }else{
    return  <button type='submit' className="px-4 py-3 text-base font-semibold text-gray-800 border border-gray-800 rounded-full hover:text-gray-200 dark:border-gray-700 hover:bg-gray-800 dark:text-gray-700" {...props}>{children}</button>
  }
}

export default Button