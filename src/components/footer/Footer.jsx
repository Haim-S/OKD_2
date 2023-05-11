import React from 'react'
import { useSelector } from 'react-redux';
import Icons from '../common/Icons'

const Footer = () => {

  const {FOOTER_TEXT, isHebrew} = useSelector((store) => store.translations)

  const styleEN = ' flex-col relative items-center justify-center h-auto w-full';
  const styleHE = ' flex-col relative flex items-end justify-end h-auto w-full';

  return (
    <footer className={'w-full h-auto mt-14 py-14'}>
       <div className='max-w-[1240px] mx-auto px-2'>
       <div className='grid md:grid-cols-4 gap-5'>
        {isHebrew ?  <Icons/> : ""}
      
        {FOOTER_TEXT.map((p, i)=>{
            return(
              <div key={i} className={isHebrew ? styleHE : styleEN}>
                <h3 className='pb-2 text-white'>{p.title}</h3>
                <p className='text-white'>{p.textONE}</p>
                <p className='py-1 text-white'>{p.textTWO}</p>
                <p className='text-white'>{p.textTree}</p>
              </div>
            )
          
        })}
        {isHebrew ?  "" : <Icons/>}
       </div>
       </div>
    </footer>
  )
}

export default Footer