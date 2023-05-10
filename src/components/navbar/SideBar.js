import React from 'react'
import Link from 'next/link'
import {AiOutlineClose} from "react-icons/ai"
import { PAGES_PATH } from '@/constant/PATH'
import Icons from '../common/Icons'

const SideBar = ({nav, handleNav}) => {
  return (
<div
  className={
    nav? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70': "" 
 }
>
  <div className={nav? 
  'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ffff] p-10 ease-in duration-500': 
   'fixed left-[-100%] top-0 p-10 ease-in duration-500'}
  >
    <div className='flex w-full items-center justify-between'>
      <h3  className='cursor-pointer' style={{width: "70", height: "50"}}>OKD</h3>
      <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
        <AiOutlineClose />
      </div>
    </div>
    <div className='border-b border-gray-300 my-4'>
        <p className='w-[85%] md:w-[90%] py-4'>Come build something legendary together</p>
    </div>

    <div className='py-4 flex flex-col'>
        <ul className='uppercase'>
        {PAGES_PATH.map((p, i)=>{
                return(
                  <Link key={i} href={p.path}>
                   <li onClick={handleNav} className='py-4 text-sm'>{p.linkLabel}</li>
                </Link>
                )
              })}
        </ul>
        <div className='pt-28'>
              <p className='uppercase tracking-widest text-[#4A4A4A]'>Let's Connect</p>
              <Icons nav={nav}/>  
        </div>
    </div>

  </div>

</div>
  )
}

export default SideBar