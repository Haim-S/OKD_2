import React from 'react'
import Link from 'next/link';
import {FaLinkedinIn, FaFacebookF} from "react-icons/fa";
import {BsFillPersonLinesFill} from "react-icons/bs";
import { AiOutlineMail} from "react-icons/ai"

const Icons = ({nav}) => {
  return (
   
<div className='flex items-end my-4 w-full sm:w-[80]'>

<a href="https://www.linkedin.com/in/aviv-haim-s-874bb0265/"
 target='_blank'
 rel='noreferrer'
>
  <div 
  className={
    nav?'bg-slate-50 rounded-full p-3 m-1 cursor-pointer hover:scale-105 ease-in duration-300'
  : 'bg-slate-50 rounded-full p-3 m-1 cursor-pointer hover:scale-110 ease-in duration-300'
  }
  >
    <FaLinkedinIn />
  </div>
</a>

<a href="https://github.com/Haim-S"
 target='_blank'
 rel='noreferrer'
>
  <div 
  className={
    nav?'bg-slate-50 rounded-full p-3 m-1 cursor-pointer hover:scale-105 ease-in duration-300'
  : 'bg-slate-50 rounded-full p-3 m-1 cursor-pointer hover:scale-110 ease-in duration-300'
  }
  >
    <FaFacebookF />
  </div>
  </a>

  <Link href='/#contact'>
  <div 
  className={
    nav?'bg-slate-50 rounded-full p-3 m-1 cursor-pointer hover:scale-105 ease-in duration-300'
  : 'bg-slate-50 rounded-full p-3 m-1 cursor-pointer hover:scale-110 ease-in duration-300'
  }
  >
    <AiOutlineMail />
  </div>
  </Link>
  <Link href='/resume'>
  <div 
  className={
    nav?'bg-slate-50 rounded-full p-3 m-1 cursor-pointer hover:scale-105 ease-in duration-300'
  : 'bg-slate-50 rounded-full p-3 m-1 cursor-pointer hover:scale-110 ease-in duration-300'
  }
  >
    <BsFillPersonLinesFill />
  </div>
  </Link>
</div>    
  )
}

export default Icons