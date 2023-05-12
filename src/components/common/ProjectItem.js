import Image from 'next/image'
import React from 'react'
// import MainImg from "../../../public/assets/project/EmendoBio/main.jpg"
// import OneImg from "../../../public/assets/project/EmendoBio/1.jpg"
// import TwoImg from "../../../public/assets/project/EmendoBio/2.jpg"
// import ThreeImg from "../../../public/assets/project/EmendoBio/3.jpg"
// import FourImg from "../../../public/assets/project/EmendoBio/4.jpg"


// const MY_PROJECTS = [
//     {
//     id:2 ,title: 'mentorcruise',
//     mainImg: MainImg,   
//     OneImg: OneImg,   
//     TwoImg: TwoImg,   
//     ThreeImg: ThreeImg,   
//     FourImg: FourImg,   
//     projectName: 'EmendoBio Nes Ziona', 
//     projectAbout: 'Began when a group of passionate graduates from the Weizmann Institute gathered around a whiteboard and asked a critical question – “How do we make CRISPR better?” As the answer unfolded, a company was created around the idea to “work to make CRISPR fit each disease specifically instead of trying to make every disease fit into the standard CRISPR model”. ',
//     Architects: "Hadas Makov",
//     Locations: "Ilan Ramon 2, Nes Ziona",
//     Year: "2022",
//     ProjectManagement:"JLL / Shimrit Magen"
//   },
//    ]

const ProjectItem = ({mainImg, projectName, projectAbout, Architects, Locations, Year, ProjectManagement, OneImg, TwoImg, ThreeImg, FourImg}) => {

    return (
<div className='relative flex items-center justify-center h-auto w-full'>
    <div className='flex flex-col mt-[100px]'>
        <Image width={"100%"} height={"50%"} src={mainImg} alt="/"/>
        <div class="grid grid-cols-3 gap-4">
            <div class="col-span-2">
                <h3>{projectName}</h3>
                <p>{projectAbout}</p>
            </div>
            <div>
                <p><span className='font-bold pr-2'>Architects:</span>{Architects}</p>
                <p><span className='font-bold pr-2'>Locations:</span>{Locations}</p>
                <p><span className='font-bold pr-2'>Year:</span>{Year}</p>
                <p><span className='font-bold pr-2'>Project Management:</span>{ProjectManagement}</p>
            </div>
        </div>
        <div class="grid grid-cols-4 gap-4">
        <Image className='col-span-2' width={"100%"} height={"100%"} src={OneImg} alt="/"/>
        <Image className='col-span-2' width={"100%"} height={"100%"} src={TwoImg} alt="/"/>
        </div>
        <Image className='pt-5' width={"100%"} height={"50%"} src={ThreeImg} alt="/"/>
        <Image className='pt-5' width={"100%"} height={"50%"} src={FourImg} alt="/"/>
    </div>
</div>
    )

}

export default ProjectItem