import React from 'react'
import { FOOTER_TEXT } from '@/constant/TEXT'
import Icons from '../common/Icons'

const Footer = () => {




  return (
    <footer className={'w-full h-60 mt-20 pt-16'}>
       <div className='max-w-[1240px] mx-auto px-2'>
       <div className='grid md:grid-cols-4 gap-5'>
        {FOOTER_TEXT.map((p, i)=>{
            return(
              <div className=' flex-col relative items-center justify-center h-auto w-full'>
                <p className='text-white'>{p.textONE}</p>
                <p className='py-4 text-white'>{p.textTWO}</p>
                <p className='text-white'>{p.textTree}</p>
              </div>
            )
          
        })}

       <Icons/>
       </div>
       </div>
    </footer>
  )
}

export default Footer