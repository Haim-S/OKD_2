'use client'
import React, {useState} from 'react'
import { FaAccessibleIcon } from 'react-icons/fa';
import {CgEditHighlight} from "react-icons/cg"
import {FaEye, FaRegLightbulb} from "react-icons/fa"
import {GrPowerReset} from "react-icons/gr"

import {changeToHighContrast, changeToNegativeContrast, refresh} from "../../store/Slices/accessibilitySlice";
import { useSelector, useDispatch } from 'react-redux';

const Accessibility = () => {
    const [useAccessible, SETAccessible] = useState(false);

  
    

    const dispatch = useDispatch();

  return (
    <div className={useAccessible ?
        'fixed left-0 top-[400px] w-[8%] sm:w-[5%] md:w-[3%] h-[30%] bg-[#eae7e7] ease-in duration-500 p-3':
        'fixed left-0 top-[400px] w-[8%] sm:w-[3%] md:w-[50px] h-[4%] bg-[#eae7e7] ease-in duration-500 p-3' }>
        <div>
           
        <FaAccessibleIcon size={20} className='mt-1' onClick={()=>SETAccessible(PREV => !PREV)}/>
            
        {useAccessible ? 
        <div className='w-full h-full flex flex-col items-center justify-evenly'>
            <button onClick={()=>dispatch(changeToHighContrast())} className='p-3 cursor-pointer'><CgEditHighlight/></button>
            <div onClick={()=>dispatch(changeToNegativeContrast())} className='p-3 cursor-pointer'><FaEye/></div>
            <div className='p-3'><FaRegLightbulb/></div>
            <div onClick={()=> dispatch(refresh())} className='p-3'><GrPowerReset/></div>
            <div className='p-3'><GrPowerReset/></div>
            <div className='p-3'><GrPowerReset/></div>
        </div>
         : ""}
        </div>
    </div>
  )
}

export default Accessibility

// export const getMyColorBody = ()=>{

// }

// export const getMyTextColor = ()=>{

//   const {bodyColor, textColor, isHighContrast, isNegativeContrast} = useSelector((state)=> state.accessibility.textColor);

//   return textColor;
// }