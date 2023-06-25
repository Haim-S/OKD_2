'use client'
import React from 'react'
import { twMerge } from 'tailwind-merge';
import CategoriesItem from '@/components/common/CategoriesItem';
import { useSelector } from 'react-redux';

const Categories = () => {

  const {LINKS_CATEGORIES} = useSelector((store) => store.translations);
  const {bodyColor} = useSelector((state) => state.accessibility)
console.log(bodyColor);
  return (

    <div id='Categories' className={twMerge('w-full pt-20', bodyColor)}>
       <div className='max-w-[1240px] mx-auto px-2'>
       <div className='grid md:grid-cols-2 gap-5'>
        {LINKS_CATEGORIES.map((p, i)=>{
          return(
            <CategoriesItem
            key={i}
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