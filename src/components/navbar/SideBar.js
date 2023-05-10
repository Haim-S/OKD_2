import React from 'react'
import {AiOutlineClose} from "react-icons/ai"

const SideBar = ({nav, handleNav}) => {
  return (
<div
  className={
    nav? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70': "" 
 }
>
  <div className={nav? 
  'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500': 
   'fixed left-[-100%] top-0 p-10 ease-in duration-500'}
  >
    <div className='flex w-full items-center justify-between'>
      <h3  className='cursor-pointer' style={{width: "70", height: "50"}}>OKD</h3>
      <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
        <AiOutlineClose />
      </div>
    </div>
  </div>
</div>
  )
}

export default SideBar