import React, {useState} from 'react'
import Link from 'next/link'
import { PAGES_PATH } from '@/constant/PATH';
import { AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai';
import SideBar from './SideBar';

const Navbar = () => {
  
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [linkColor, setLinkColor] = useState('#4A4A4A');

  

  const handleNav = () => {
    setNav(!nav);
  };


  return (
  <nav className={ shadow ?'fixed w-full h-20 z-[100] ease-in-out duration-300': 'fixed w-full h-20 z-[100]'}>
    <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
      <Link href={"/"}>
          <h1  className='cursor-pointer' style={{width: "70", height: "50"}}>OKD</h1>
      </Link>
      <div>
            <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
              {PAGES_PATH.map((p, i)=>{
                if(i === PAGES_PATH.length -1){
                  return(
                    <>
                    <Link key={i} href={p.path}>
                    <li className='flex items-center justify-between ml-10 text-sm uppercase hover:text-stone-950'>
                    {p.linkLabel} 
                    <span className='text-gray-400 pr-1'>|</span>
                    </li>
                 </Link>
                    <AiOutlineSearch style={{ fontSize: "20px"}} />
                 </>
                  )
                }
                return(
                  <Link key={i} href={p.path}>
                   <li className='ml-10 text-sm uppercase hover:text-stone-950'>{p.linkLabel} <span className='text-gray-400'>|</span></li>
                </Link>
                )
              })}
            </ul>
            
      </div>
           <div onClick={handleNav} className='md:hidden'><AiOutlineMenu size={25}/></div>     
    </div>
    <SideBar nav={nav} handleNav={handleNav}/>
  </nav>
  )
}

export default Navbar