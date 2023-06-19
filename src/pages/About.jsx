import React from 'react'
import Image from 'next/image';
import {useSelector} from "react-redux"
import pix from "/public/assets/about/pop.jpg";

const About = () => {

  const {PageABOUT_TEXT} = useSelector((store) => store.translations);

  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto flex items-start flex-col w-full mt-7'>
        <div className=''>
        <Image src={pix} width={200} height={200}/>
        </div>
      {PageABOUT_TEXT.map((text, i)=>{
        return(
          <div key={i} className='flex flex-col p-3'>
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