import React, {useRef, useState} from 'react'

const Form = () => {

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

    const INPUT_CONTACT = [
      {message: false, label: "Name", ref: Refname},
      {message: false, label: "Email", ref: Refemail},
      {message: false, label: "Phone", ref: Refphone},
      {message: true, label: "Message", ref: Refmessage},
      ];



  return (
<form onSubmit={handelSubmit}>
<div className='w-full my-3'>
  <div className=' grid grid-cols-3 gap-4 my-8'>
    {INPUT_CONTACT.map((p, i)=> {
      if(!p.message){
        return(
          <input type="text"  placeholder={p.label} ref={p.ref} className="mt-1 block w-full px-3 py-2 bg-white border-b border-slate-300 text-sm shadow-sm placeholder-slate-400"/>
          )
        }
        return(
          <input type="text" placeholder="Type something here" className="mt-1 block w-full col-span-3 px-3 py-2 bg-white border-b border-slate-300 text-sm shadow-sm placeholder-slate-400"/>
          )
        })}
  </div>  
</div>
{status ? 
<h3 className='w-full p-4 mt-4'>We will get back to you soon</h3> 
: <button class="mt-3 p-3 px-10 text-white  bg-[#4A4A4A] hover:bg-[#4a4a4ac5] ">Send</button>
}
</form>
  )
}

export default Form