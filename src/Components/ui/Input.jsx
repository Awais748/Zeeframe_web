import React from 'react'

const Input = ({ placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="px-4 py-3 text-[#D5D5D5] text-sm font-medium leading-5
             outline-0  focus:outline-1 focus:outline-[#F3FE00]
             rounded-lg border border-[#373737] bg-[#171717]"
    />

  )
}

export default Input
