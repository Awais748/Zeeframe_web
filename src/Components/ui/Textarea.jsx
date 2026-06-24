import React from 'react'

const Textarea = ({ placeholder,Name,Id }) => {
  return (
    <textarea 
      name={Name} 
      id={Id} 
      placeholder={placeholder}
      className='p-4 h-29 text-[#D5D5D5] opacity-60 text-sm font-medium leading-5 resize-none border bg-[#171717] outline-0 focus:outline outline-[#F3FE00] border-[#373737] rounded-lg'
    />
  )
}

export default Textarea
