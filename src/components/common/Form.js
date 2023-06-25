import React, {useRef, useState} from 'react'
import { useSelector } from 'react-redux';

const Form = () => {

  const { isHebrew, pageCONTACT_INPUT} = useSelector((store) => store.translations)
  const [status, setStatus] = useState(false);

    const Refname = useRef();
    const Refphone = useRef();
    const Refemail = useRef();
    const Refsubject = useRef();
    const Refmessage = useRef();

    const handelSubmit = async (e)=>{
      e.preventDefault();
      let details = {
        name:    Refname.current.value + Refphone.current.value,
        email:   Refemail.current.value,
        subject: Refsubject.current.value,
        message: Refmessage.current.value
       };
       setStatus(true);
       let response = await fetch("https://sendtomyemail-render-server.onrender.com/send-email", {
          method: "POST",
          headers: {
              "Content-Type": "application/json;charset=utf-8"
          },
          body: JSON.stringify(details)
      })
      
      Refname.current.value = "";
      Refphone.current.value = "";
     Refemail.current.value = "";
   Refsubject.current.value = "";
   Refmessage.current.value = "";
      let result = await response.json();
      console.log(result);
  
    
    }

      const styleInputHE = "mt-1 block w-full pl-[80%] py-2 bg-white border-b border-slate-300 text-sm shadow-sm placeholder-slate-400 focus:outline-none"
      const styleInputEN = "mt-1 block w-full px-3 py-2 bg-white border-b border-slate-300 text-sm shadow-sm placeholder-slate-400 focus:outline-none"

      function removeDigits(str) {
        
          return str?.split(0,-1);
       
      }

  return (
<form onSubmit={handelSubmit}>
<div className='w-full my-3'>
  <div className=' grid grid-cols-3 gap-4 my-8'>
    {pageCONTACT_INPUT.map((p, i)=> {
      if(!p.message){
        return(
          <input key={i} type="text"  placeholder={p.label} ref={removeDigits(p.ref)} className={isHebrew ? styleInputHE: styleInputEN}/>
          )
        }
        return(
          <input key={i} type="text" placeholder="Type something here" className={
            isHebrew ? "mt-1 block w-full col-span-3 pl-[90%] py-2 bg-white border-b border-slate-300 text-sm shadow-sm placeholder-slate-400 focus:outline-none" 
            : "mt-1 block w-full col-span-3 px-3 py-2 bg-white border-b border-slate-300 text-sm shadow-sm placeholder-slate-400 focus:outline-none"
          }/>
          )
        })}
  </div>  
</div>
{status ? 
<h3 className='w-full p-4 mt-4'>We will get back to you soon</h3> 
: <button className="mt-3 p-3 px-10 text-white  bg-[#4A4A4A] hover:bg-[#4a4a4ac5] ">{isHebrew ? "שליחה" : "Send"}</button>
}
</form>
  )
}

export default Form