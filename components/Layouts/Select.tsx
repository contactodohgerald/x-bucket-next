import React, { ChangeEventHandler, ReactNode } from "react";

interface Props {
    children: ReactNode;
    name: string;
    value: string;
    onChange: ChangeEventHandler<HTMLSelectElement>;
}

function Select({children, ...props}: Props) {
  return (
    <>
      <select className="w-full px-3 py-2 dark:text-gray-900 leading-loose border rounded-md dark:border-gray-700 bg-gray-100" {...props}>
            {children}
      </select>
    </>
  );
}

export default Select;
