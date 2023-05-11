import React, {useState} from 'react'
import { FaAccessibleIcon } from 'react-icons/fa';
import {CgEditHighlight} from "react-icons/cg"
import {FaEye, FaRegLightbulb} from "react-icons/fa"
import {GrPowerReset} from "react-icons/gr"





const Accessibility = () => {



    const [useAccessible, SETAccessible] = useState(false);

  return (
    <div className={useAccessible ?
        'fixed left-0 top-[400px] w-[10%] sm:w-[5%] md:w-[3%] h-[30%] bg-[#ffff] ease-in duration-500 p-3':
        'fixed left-0 top-[400px] w-[8%] sm:w-[5%] md:w-[3%] h-[5%] bg-[#ffff] ease-in duration-500 p-3' }>
        <div>
           
        <FaAccessibleIcon onClick={()=>SETAccessible(PREV => !PREV)}/>
            
        {useAccessible ? 
        <div className='w-full h-full flex flex-col items-center justify-evenly'>
            <div className='p-3'><CgEditHighlight/></div>
            <div className='p-3'><FaEye/></div>
            <div className='p-3'><FaRegLightbulb/></div>
            <div className='p-3'><GrPowerReset/></div>
        </div>
         : ""}
        </div>
    </div>
  )
}

export default Accessibility