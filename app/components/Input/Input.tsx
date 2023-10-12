import React from 'react'

type Props = {
  id?: string,
  name?: string,
  type?: string,
  placeholder?: string,
  required?: boolean,
}

const Input: React.FC<Props> = (props) => {
  return (
    <div className="mt-2">
      <input 
        id={props?.id || undefined} 
        name={props?.name || undefined} 
        type={props?.type || undefined}
        placeholder={props?.placeholder || undefined}
        required={props?.required} 
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
      />
    </div>
  )
}

export default Input;