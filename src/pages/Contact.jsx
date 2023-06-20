import React from 'react'
import Form from '@/components/common/Form'
import { useSelector } from 'react-redux';
// import { CONTACT_TEXT } from '@/constant/english/TEXT_EN'

const Contact = () => {

  const {PageCONTACT_TEXT, isHebrew} = useSelector((store) => store.translations)

  const styleHE = 'flex items-end justify-end tracking-widest text-[#4A4A4A]';
  const styleEN = 'py-2 tracking-widest text-[#4A4A4A]';
  const hrStyleEN = 'w-[10%] border-[#4A4A4A] border-[1.4px] my-10';
  const hrStyleHE = 'w-[15%] ml-[85%] border-[#4A4A4A] border-[1.4px] my-10';

  return (
    <div className={'w-full md:h-full pt-32'}>
     <div  className='max-w-[1240px] m-auto px-2 py-16 w-full'>
      {PageCONTACT_TEXT.map((p, i)=> {
        return(
<>
     <h2 key={i} style={{fontSize: "80px"}} className={isHebrew ? styleHE : styleEN}>
        {p.titleOne} {p.titleTwo}
      </h2>
     {/* <h2 style={{fontSize: "80px", marginTop: "20px"}} className={isHebrew ? styleHE : styleEN}>
        {p.titleTwo}
      </h2> */}
      <hr className={isHebrew ? hrStyleHE : hrStyleEN}/>
      <h2 className={isHebrew ? styleHE : styleEN}>
      {p.subtitleOne}
      </h2>
      <h2 className={isHebrew ? styleHE : styleEN}>
      {p.subtitleTwo}
      </h2>
      <p className={isHebrew ? styleHE : styleEN}>
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