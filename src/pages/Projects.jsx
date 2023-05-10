import React from 'react'
import ProjectItem from '@/components/common/ProjectItem'
import MainImg from "../../public/assets/project/EmendoBio/main.jpg"
import OneImg from "../../public/assets/project/EmendoBio/1.jpg"
import TwoImg from "../../public/assets/project/EmendoBio/2.jpg"
import ThreeImg from "../../public/assets/project/EmendoBio/3.jpg"
import FourImg from "../../public/assets/project/EmendoBio/4.jpg"


const Projects = () => {
  
  const MY_PROJECTS = [
  {
  id:1,
  mainImg: MainImg,   
  OneImg: OneImg,   
  TwoImg: TwoImg,   
  ThreeImg: ThreeImg,   
  FourImg: FourImg,   
  projectName: 'EmendoBio Nes Ziona', 
  projectAbout: 'Began when a group of passionate graduates from the Weizmann Institute gathered around a whiteboard and asked a critical question – “How do we make CRISPR better?” As the answer unfolded, a company was created around the idea to “work to make CRISPR fit each disease specifically instead of trying to make every disease fit into the standard CRISPR model”. ',
  Architects: "Hadas Makov",
  Locations: "Ilan Ramon 2, Nes Ziona",
  Year: "2022",
  ProjectManagement:"JLL / Shimrit Magen"
  },
  ]

  


  return (
    <div id='projects' className='w-full md:h-full flex items-center py-10'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        {MY_PROJECTS.map((p, i)=>{
          return(
            <ProjectItem 
            key={i}
            mainImg={p.mainImg} 
            projectName={p.projectName}
            projectAbout={p.projectAbout}
            Architects={p.Architects}
            Locations={p.Locations}
            Year={p.Year}
            ProjectManagement={p.ProjectManagement}
            OneImg={p.OneImg}
            TwoImg={p.TwoImg}
            ThreeImg={p.ThreeImg}
            FourImg={p.FourImg}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Projects