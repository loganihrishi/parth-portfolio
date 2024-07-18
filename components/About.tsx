import Image from 'next/image'
import React from 'react'
import gradient_dark from "../assets/Gradient_dark.svg"
import gradient_light from "../assets/Gradient_light.svg"

const About = () => {
  return (
    <section className="relative bg-[#161617] h-full w-full flex flex-col">
      <div className="bg-white dark:bg-[#111113] h-full mx-6">
        <div className='backgroundbox relative flex justify-between w-full h-[920px]'>
          <div className='left-box h-full flex-1 border-r border-solid border-[#E8E8EC] dark:border-[#222225]'></div>
          <div className='relative center-box flex flex-row items-center justify-center grow min-w-[714px] min-[1200px]:min-w-[1080px] border-b border-solid border-[#E8E8EC] dark:border-[#222225]'>
            <div className='basis-1/3 h-full border-r border-dashed border-[#E8E8EC] dark:border-[#222225]'></div>
            <div className='basis-1/3 h-full border-r border-dashed border-[#E8E8EC] dark:border-[#222225]'></div>
            <div className='basis-1/3 h-full'></div>
            {/* GRADIENT */}
            <Image src={gradient_dark} alt="" height={48} width={48} className='absolute top-[15px] right-1 z-10 hidden dark:inline'/>
            <Image src={gradient_light} alt="" height={48} width={48} className='absolute top-[15px] right-1 z-10 inline dark:hidden'/>

            {/* Main Content - About Me */}
            <div 
              className="absolute flex flex-row p-1 my-4 h-full border border-solid border-[#E8E8EC] dark:border-[#222225] rounded-[6px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" 
              style={{ width: 'calc(100% - 8px)' }}>
            
            </div>
          </div>
          <div className='right-box h-full flex-1 border-l border-solid border-[#E8E8EC] dark:border-[#222225]'></div>
        </div>
      </div>
    </section>
  )
}

export default About
