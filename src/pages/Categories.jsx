import React from 'react'
import CategoriesItem from '@/components/common/CategoriesItem';
import { CATEGORIES_PATH } from '@/constant/PATH';

const Categories = () => {



  return (
    <div id='Categories' className='w-full pt-24'>
       <div className='max-w-[1240px] mx-auto px-2'>
       <div className='grid md:grid-cols-3 gap-5'>
        {CATEGORIES_PATH.map((p, i)=>{
          return(
            <CategoriesItem
            projectID={i}
            categoriesName={p.name}
            backgroundImg={p.img}
            />
          )
        })}

       </div>
       </div>
    </div>
  )
}

export default Categories