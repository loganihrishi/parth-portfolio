import Image from 'next/image'
import React from 'react'
import gradient_dark from "../assets/Gradient_dark.svg"
import gradient_light from "../assets/Gradient_light.svg"
import eye_dark from "../assets/eye_dark.svg"
import eye_light from "../assets/eye_light.svg"

const About = () => {
  return (
    <section className="relative bg-[#161617] h-full w-full flex flex-col">
      <div className="bg-white dark:bg-[#111113] h-full mx-6">
        <div className='backgroundbox relative flex justify-between w-full h-[920px]'>
          <div className='left-box h-full flex-1 border-r border-solid border-[#E8E8EC] dark:border-[#222225]'></div>
          <div className='relative center-box flex flex-row items-center justify-center grow min-w-[714px] min-[1200px]:min-w-[1080px]'>
            <div className='relative basis-1/3 h-full border-r border-dashed border-[#E8E8EC] dark:border-[#222225]'>
              <div className='absolute z-[2] h-[5px] w-[5px] rounded-full bg-[#81838D] dark:bg-[#777B84] top-[-2px] left-[-3px] ring-white dark:ring-[#111113] ring-2'></div>
              <div className='absolute z-[2] h-[5px] w-[5px] rounded-full bg-[#81838D] dark:bg-[#777B84] top-[-2px] right-[-3px] ring-white dark:ring-[#111113] ring-2'></div>
            </div>
            <div className='basis-1/3 h-full border-r border-dashed border-[#E8E8EC] dark:border-[#222225]'></div>
            <div className='relative basis-1/3 h-full'>
              <div className='absolute z-[2] h-[5px] w-[5px] rounded-full bg-[#81838D] dark:bg-[#777B84] top-[-2px] right-[-3px] ring-white dark:ring-[#111113] ring-2'></div>
            </div>
            {/* GRADIENT */}
            <Image src={gradient_dark} alt="" height={48} width={48} className='absolute top-[98px] right-1 z-10 hidden dark:inline'/>
            <Image src={gradient_light} alt="" height={48} width={48} className='absolute top-[98px] right-1 z-10 inline dark:hidden'/>

            {/* EYE */}
            <Image src={eye_dark} alt="" height={48} width={48} className='absolute top-[144px] left-11 z-10 hidden dark:inline'/>
            <Image src={eye_light} alt="" height={48} width={48} className='absolute top-[144px] left-11 z-10 inline dark:hidden'/>
            <p className='absolute top-[232px] left-11 z-10 -rotate-90 font-["JetBrains_Mono"] text-[10px] font-normal leading-[12px] text-[#81838D] dark:text-[#777B84]'>ABOUT ME</p>

            {/* PHOTOS */}

            
            {/* Main Content - About Me */}
            <div 
              className="absolute flex flex-row p-1 mt-16 border border-solid bg-white dark:bg-[#111113] border-[#E8E8EC] dark:border-[#222225] rounded-[6px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" 
              style={{ width: 'calc(100% - 8px)', height: 'calc(100% - 140px)' }}
            >
              <div className='w-full h-full flex flex-col items-center justify-center gap-12'>
                <h1 className='w-[700px] text-balance text-center font-["Bluu_Next"] text-[89px] tracking-[-1.78px] leading-[80.1px] text-[#1C2024] dark:text-[#EDEEF0]'>Learning Innovating & Exploring.</h1>
                <div className='relative w-[580px] inline -space-x-1'> 
                  <span className='inline h-auto pr-[2px] text-balance text-center font-["Bluu_Next"] leading-7 text-[42px] text-transparent'>A</span>     
                  <span className='absolute left-1 top-[10px] text-balance text-center font-["Bluu_Next"] leading-7 text-[42px] text-[#1C2024] dark:text-[#EDEEF0]'>A</span>     
                  <p className='inline text-balance text-left font-["Libre_Franklin"] text-lg leading-[28.8px] text-[#81838D] dark:text-[#777B84]'>lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus earum autem, sunt pariatur molestias quisquam dolorum error corporis obcaecati quaerat, magni sapiente minus, ipsum vel officia alias officiis accusamus eveniet!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, maiores. Mollitia esse aliquam commodi debitis, vitae fugiat cum libero quibusdam, facilis blanditiis eligendi expedita deleniti, laboriosam reprehenderit laudantium laborum ratione?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, quod. Perspiciatis dicta illo corporis voluptates harum sequi, consequatur eos quo ratione veritatis, rem dolores? Hic, atque distinctio. Nostrum, voluptatem. Modi?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='right-box h-full flex-1 border-l border-solid border-[#E8E8EC] dark:border-[#222225]'></div>
        </div>
      </div>
    </section>
  )
}

export default About
