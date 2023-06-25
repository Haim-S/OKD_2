import React from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'


const CategoriesProjectsItem = ({projectID, categoriesName, backgroundImg}) => {

  const {textColor} = useSelector((state) => state.accessibility);

  return (
    <div>
    <div key={projectID} className='relative flex items-center justify-center h-auto w-full shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#f8f8fb9b] to-[#fdfdfd74]'>
      <Link href={`ProjectInformation/${projectID}`}>
    <img  
    width={"100%"}
    height={"100%"} 
    className='cursor-pointer' 
    src={backgroundImg} 
    alt="/" 
    />
    {/* <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'> */}
        {/* <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p> */}
        </Link>
    {/* </div> */}
    </div>
        <p className={`text-1xl ${textColor} tracking-wider pl-2`}>{categoriesName}</p>
    </div>
  )
}

export default CategoriesProjectsItem