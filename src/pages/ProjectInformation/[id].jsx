import React from 'react'
import { useRouter } from 'next/router'
import ProjectItem from '@/components/common/ProjectItem'
import { MY_PROJECTS } from '@/constant/english/PROJECTS_EN'


const ProjectInformation = () => {

    
  const router = useRouter();
  const { id } = router.query;


  
let Item = MY_PROJECTS.find((obj) => obj.id == id);


  return (
            <ProjectItem 
            key={Item?.id}
            mainImg={Item?.mainImg} 
            projectName={Item?.projectName}
            projectAbout={Item?.projectAbout}
            Architects={Item?.Architects}
            Locations={Item?.Locations}
            Year={Item?.Year}
            ProjectManagement={Item?.ProjectManagement}
            OneImg={Item?.OneImg}
            TwoImg={Item?.TwoImg}
            ThreeImg={Item?.ThreeImg}
            FourImg={Item?.FourImg}
            />
  )

}

export default ProjectInformation