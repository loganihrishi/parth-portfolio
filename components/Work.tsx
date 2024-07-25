import React from 'react'
import Image from 'next/image'
import Worksign_dark from '../assets/worksign_dark.svg'
import Worksign_light from '../assets/worksign_light.svg'
import WorkList from './WorkList'

const Work = () => {
  return (
    <section id="work" className="relative bg-[#161617] h-full w-full flex flex-col">
      <div className="bg-white dark:bg-[#111113] h-full mx-6">
        {/* WORK HEADER GRID */}
        <div className='mt-7 work-header-grid relative flex justify-between w-full h-[298px] border-t border-solid border-[#E8E8EC] dark:border-[#222225]'>
          <div className='relative left-box h-full flex-1 border-r border-solid border-[#E8E8EC] dark:border-[#222225]'></div>
          <div className='center-box border-b flex flex-row grow min-w-[714px] min-[1200px]:min-w-[1080px]'>
            <div className='relative basis-1/3 h-full border-r border-dashed border-[#E8E8EC] dark:border-[#222225] pb-5'>
              <div className='absolute z-[2] h-[5px] w-[5px] rounded-full bg-[#81838D] dark:bg-[#777B84] top-[-2px] left-[-3px] ring-white dark:ring-[#111113] ring-2'></div>
              <div className='absolute z-[2] h-[5px] w-[5px] rounded-full bg-[#81838D] dark:bg-[#777B84] top-[-2px] right-[-3px] ring-white dark:ring-[#111113] ring-2'></div>
              
              {/* WORK HEADER CONTENT  */}
              <div className='flex flex-col gap-10 max-w-[360px] h-full p-4'>
                <Image src={Worksign_dark} alt="" height={48} width={48} className='hidden dark:inline' />
                <Image src={Worksign_light} alt="" height={48} width={48} className='inline dark:hidden' />
                <div className='flex flex-col justify-start items-start text-5xl font-["Bluu_Next"] tracking-[-1.92px] leading-[52.8px]'>
                  <span className='text-[#1C2024] dark:text-[#EDEEF0]'>Work.</span>
                  <span className='text-[#C0C1C5] dark:text-[#45464B]'>A selection of recent projects.</span>
                </div>
              </div>

            </div>
            <div className='basis-1/3 h-full border-r border-dashed border-[#E8E8EC] dark:border-[#222225]'></div>
            <div className='relative basis-1/3 h-full'>
              <div className='absolute z-[2] h-[5px] w-[5px] rounded-full bg-[#81838D] dark:bg-[#777B84] top-[-2px] right-[-3px] ring-white dark:ring-[#111113] ring-2'></div>
            </div>
          </div>
          <div className='relative right-box h-full flex-1 border-l border-solid border-[#E8E8EC] dark:border-[#222225]'></div>
        </div>

        {/* Main content */}
        <WorkList />
      </div>
    </section>
  )
}

export default Work
