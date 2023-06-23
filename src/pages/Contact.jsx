import React from 'react'
import Form from '@/components/common/Form'
import { useSelector } from 'react-redux';
// import { CONTACT_TEXT } from '@/constant/english/TEXT_EN'

const Contact = () => {

  const {PageCONTACT_TEXT, isHebrew} = useSelector((store) => store.translations)


  return (
    <div className={'w-full md:h-full pt-32'}>
     <div  className='max-w-[1240px] m-auto px-2 py-16 w-full'>
      {PageCONTACT_TEXT.map((p, i)=> {
        return(
<>
     <h2 key={i} style={{fontSize: "80px"}} className={isHebrew ? "contactStyleHe" : "contactStyleEn"}>
        {p.titleOne}
      </h2>
     <h2 style={{fontSize: "80px", marginTop: "20px"}} className={isHebrew ? "contactStyleHe" : "contactStyleEn"}>
        {p.titleTwo}
      </h2>
      <hr className={isHebrew ? "hrStyleHE" : "hrStyleEN"}/>
      <h2 className={isHebrew ? "contactStyleHe" : "contactStyleEn"}>
      {p.subtitleOne}
      </h2>
      <h2 className={isHebrew ? "contactStyleHe" : "contactStyleEn"}>
      {p.subtitleTwo}
      </h2>
      <p className={isHebrew ? "contactStyleHe" : "contactStyleEn"}>
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