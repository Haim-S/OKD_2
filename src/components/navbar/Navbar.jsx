import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image';
import {changeLanguage} from "../../store/Slices/translationsSlice"
import { useDispatch, useSelector } from 'react-redux';
// import { PAGES_PATH_HE } from '../../constant/hebrew/PATH_HE';
import { AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai';
import {MdLanguage} from "react-icons/md"
import SideBar from './SideBar';
import Accessibility from '@/components/accessibility/Accessibility';
import Logo from "/public/assets/logo.png"

const Navbar = () => {
  
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  // const [linkColor, setLinkColor] = useState('#4A4A4A');

  const dispatch = useDispatch();
  const {LINKS_PAGES,  isHebrew} = useSelector((store) => store.translations)
  const {bodyColorNavbar, textColorNavbar} = useSelector((state) => state.accessibility);

  

  const handleNav = () => {
    setNav(!nav);
  };


  return (
  <nav style={{background: bodyColorNavbar}} className={ shadow ?'fixed w-full h-20 z-[100] ease-in-out duration-300': 'fixed w-full h-20 z-[100] px-3'}>
    <div className={`flex justify-between items-center w-full h-full px-4 2xl:px-16`}>
      <Link href={"/"}>
        <Image src={Logo} width={70} alt='logo'/>
          {/* <h2  className='cursor-pointer' style={{width: "70", height: "50"}}>OKD</h2> */}
      </Link>
      <div>
            <ul style={{ color: `${textColorNavbar}` }} className='hidden md:flex'>
              {LINKS_PAGES.map((p, i)=>{
                if(i === LINKS_PAGES.length -1){
                  return(
                    <div key={i}>
                    <Link href={p.path}>
                    <li className='flex items-center justify-between ml-10 text-sm font-bold uppercase hover:text-stone-950'>
                    {p.linkLabel} 
                    {/* <span className='text-gray-400 pr-1'>|</span> */}
                    </li>
                 </Link>
                 <div className='flex items-center ml-10'>
                    <AiOutlineSearch style={{ fontSize: "20px"}} />
                    <button className='ml-3' onClick={()=>dispatch(changeLanguage())}>{isHebrew ? "HE" : <MdLanguage/>}</button>
                 </div>
                 </div>
                  )
                }
                return(
                  <Link key={i} href={p.path}>
                    <div className='flex items-center justify-center'>
                   <li className='ml-10 mr-2 text-sm uppercase hover:text-stone-950 font-bold'>{p.linkLabel}</li>
                   {/* <span className='text-gray-400'>|</span> */}
                  </div>
                </Link>
                )
              })}
            </ul>
            
      </div>
           <div onClick={handleNav} className='md:hidden'><AiOutlineMenu size={25}/></div>     
    </div>
    <SideBar nav={nav} handleNav={handleNav}/>
    <Accessibility/>
  </nav>
  )
}

export default Navbar