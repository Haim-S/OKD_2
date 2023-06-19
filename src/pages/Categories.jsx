import React from 'react'
import CategoriesItem from '@/components/common/CategoriesItem';
import { useSelector } from 'react-redux';

const Categories = () => {

  const {LINKS_CATEGORIES} = useSelector((store) => store.translations)

  return (
    <div id='Categories' className='w-full pt-24'>
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