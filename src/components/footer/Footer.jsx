
import React from 'react'
import { twMerge } from 'tailwind-merge';
import { useSelector } from 'react-redux';
import Icons from '../common/Icons'

const Footer = () => {

  const {FOOTER_TEXT, isHebrew} = useSelector((store) => store.translations)
  const {bodyColorFooter, textColorFooter} = useSelector((state)=> state.accessibility)

  return (
    <footer style={{color: textColorFooter, background: bodyColorFooter}} className={`w-full h-auto mt-14 py-14`}>
       <div className='max-w-[1240px] mx-auto px-2'>
       <div className='grid md:grid-cols-4 gap-5'>
        {isHebrew ?  <Icons/> : ""}
      
        {FOOTER_TEXT.map((p, i)=>{
            return(
              <div key={i} className={isHebrew ? "footerStyleHe" : "footerStyleEn"}>
                <h3 className={`pb-2`}>{p.title}</h3>
                <p>{p.textONE}</p>
                <p className={`py-1`} >{p.textTWO}</p>
                <p>{p.textTree}</p>
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