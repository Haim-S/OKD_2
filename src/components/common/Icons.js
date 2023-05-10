import React from 'react'
import Link from 'next/link';
import {FaLinkedinIn, FaFacebookF} from "react-icons/fa";
import {BsFillPersonLinesFill} from "react-icons/bs";
import { AiOutlineMail} from "react-icons/ai"

const Icons = ({nav}) => {

const styleSidebar = 'bg-slate-50 rounded-full border-solid border-[1px] border-[#4A4A4A]  p-3 m-1 cursor-pointer hover:scale-105 ease-in duration-300';

const styleGlobal = 'bg-slate-50 rounded-full  p-3 m-1 cursor-pointer hover:scale-110 ease-in duration-300';


  return (
   
<div className='flex items-end my-4 w-full sm:w-[80]'>

<a href="https://www.linkedin.com/in/aviv-haim-s-874bb0265/"
 target='_blank'
 rel='noreferrer'
>
  <div 
  className={
    nav? styleSidebar
  : styleGlobal
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
    nav? styleSidebar
  : styleGlobal
  }
  >
    <FaFacebookF />
  </div>
  </a>

  <Link href='/Contact'>
  <div 
  className={
    nav? styleSidebar
  : styleGlobal
  }
  >
    <AiOutlineMail />
  </div>
  </Link>
  <Link href='/resume'>
  <div 
   className={
    nav? styleSidebar
  : styleGlobal
  }
  >
    <BsFillPersonLinesFill />
  </div>
  </Link>
</div>    
  )
}

export default Icons