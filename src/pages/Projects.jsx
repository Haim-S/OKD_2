import React from 'react'
import CategoriesProjectsItem from '../components/common/CategoriesProjectsItem';
import ProjectItem from '@/components/common/ProjectItem'

import { MY_CATEGORIES_PROJECTS } from '@/constant/english/PROJECTS_EN';


const Projects = () => {

  

  return (
    <div id='projects' className='w-full md:h-full flex items-center py-10'>
      {/* <div className='max-w-[1240px] mx-auto px-2 py-16'> */}
      <div className='max-w-[1240px] mx-auto px-2 p-16'>
       <div className='grid md:grid-cols-3 gap-5'>
        {MY_CATEGORIES_PROJECTS?.map((p, i)=>{
          return(
            <CategoriesProjectsItem key={i} projectID={p.id} categoriesName={p.name} backgroundImg={p.img}/>
          )
        })}
        </div>
      </div>
    </div>
  )
}

export default Projects