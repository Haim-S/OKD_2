import React from 'react'
import Image from 'next/image';
import {useSelector} from "react-redux"
import pix from "/public/assets/about/pop.jpg";

const About = () => {

  const {PageABOUT_TEXT} = useSelector((store) => store.translations);
  const {bodyColor, textColor} = useSelector((state) => state.accessibility)

  return (
    <div style={{background: bodyColor, color: textColor}} className={`w-full md:h-screen p-2 flex items-center py-16`}>
      <div className='max-w-[1240px] m-auto flex items-start justify-center w-full h-full mt-7'>
        <div className='h-full w-[40%] sm:w-[500px] md:w-[240px] mt-5'>
        <Image src={pix} width={200} height={200}/>
        </div>
      {PageABOUT_TEXT.map((text, i)=>{
        return(
          <div key={i} className={`w-[80%] flex flex-col p-3 sm:text-1xl  sm-w-[60%]`}>
          <h1>{text.title}</h1>
          <h3>{text.titleOne}</h3>
          <h3>{text.titleTwo}</h3>
          </div>
        )
      })}
      </div>
       {/* <h1></h1> */}
    </div>
  )
}

export default About