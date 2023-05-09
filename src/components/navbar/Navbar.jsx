import React, {useState} from 'react'
import Link from 'next/link'
import { PAGES_PATH } from '@/constant/PATH';

const Navbar = () => {

  const [linkColor, setLinkColor] = useState('#4A4A4A');

  return (
  <nav className={'fixed w-full h-20 z-[100] ease-in-out duration-300'}>
    <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
      <Link href={"/"}>
          <h1  className='cursor-pointer' style={{width: "70", height: "50"}}>OKD</h1>
      </Link>
      <div>
            <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
              {PAGES_PATH.map((p, i)=>{
                return(
                  <Link key={i} href={p.path}>
                   <li className='ml-10 text-sm uppercase hover:text-stone-950'>{p.linkLabel}</li>
                </Link>
                )
              })}
            </ul>
      </div>
           
    </div>
  </nav>
  )
}

export default Navbar