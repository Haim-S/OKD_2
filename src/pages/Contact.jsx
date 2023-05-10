import React from 'react'
import Form from '@/components/common/Form'
import { CONTACT_TEXT } from '@/constant/TEXT'

const Contact = () => {
  return (
    <div className='w-full md:h-full pt-32'>
     <div  className='max-w-[1240px] m-auto px-2 py-16 w-full'>
      {CONTACT_TEXT.map((p, i)=> {
        return(
<>
     <h1 key={i} className='text-5xl tracking-widest uppercase text-[#4A4A4A]'>
        {p.titleOne}
      </h1>
     <h1 className='text-5xl py-2 tracking-widest uppercase text-[#4A4A4A]'>
        {p.titleTwo}
      </h1>
      <hr className='w-[10%] border-[#4A4A4A] border-[1.4px] my-10'/>
      <h1 className='text-4xl py-2 tracking-widest text-[#4A4A4A]'>
      {p.subtitleOne}
      </h1>
      <h1 className='text-4xl py-2 tracking-widest text-[#4A4A4A]'>
      {p.subtitleTwo}
      </h1>
      <p>
     {p.paragraphOne}
      <br/>
      {p.paragraphTwo}
      </p>
      </>
        )
      })}
      <Form/>
     </div>
    </div>
  )
}

export default Contact