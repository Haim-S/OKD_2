import React from 'react'

const Contact = () => {
  return (
    <div className='w-full md:h-full pt-32'>
     <div  className='max-w-[1240px] m-auto px-2 py-16 w-full'>
     <h1 className='text-5xl tracking-widest uppercase text-[#4A4A4A]'>
        Contact
      </h1>
     <h1 className='text-5xl py-2 tracking-widest uppercase text-[#4A4A4A]'>
        US
      </h1>
      <hr className='w-[10%] border-[#4A4A4A] border-[1.4px] my-10'/>
      <h1 className='text-4xl py-2 tracking-widest text-[#4A4A4A]'>
      Have a project?
      </h1>
      <h1 className='text-4xl py-2 tracking-widest text-[#4A4A4A]'>
      WE love to hear from you.
      </h1>
      <p>
      We’ve worked with clients of all sizes, from statups to enterprose brands.
      <br/>
      Let’s talk about your project and how we can help provide value.
      </p>
      <div className='w-full my-3'>
      <div className=' grid grid-cols-3 gap-4 my-8'>
        <input type="text" value="Name" className="mt-1 block w-full px-3 py-2 bg-white border-b border-slate-300 text-sm shadow-sm placeholder-slate-400"/>
        <input type="text" value="Email" className="mt-1 block w-full px-3 py-2 bg-white border-b border-slate-300 text-sm shadow-sm placeholder-slate-400"/>
        <input type="text" value="Phone No." className="mt-1 block w-full px-3 py-2 bg-white border-b border-slate-300 text-sm shadow-sm placeholder-slate-400"/>
      </div>
      <input type="text" value="Type something here" className="mt-1 block w-full px-3 py-2 bg-white border-b border-slate-300 text-sm shadow-sm placeholder-slate-400"/>
      </div>
      <button class="mt-3 p-3 px-10  bg-[#4A4A4A] hover:bg-white ">
        <span className='text-[#ffff] hover:text-[#4A4A4A]'>
       Send
        </span>
      </button>
     </div>
    </div>
  )
}

export default Contact