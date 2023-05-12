import Image from 'next/image'
import React from 'react'


const ProjectItem = ({mainImg, projectName, projectAbout, Architects, Locations, Year, ProjectManagement, OneImg, TwoImg, ThreeImg, FourImg}) => {

    return (
<div className='relative flex items-center justify-center h-auto w-full'>
    <div className='flex flex-col mt-[100px]'>
        <Image width={"100%"} height={"50%"} src={mainImg} alt="/"/>
        <div class="grid grid-cols-3 gap-4 max-sm:grid-cols-2">
            <div class="col-span-2 ">
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