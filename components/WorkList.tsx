import Image from 'next/image'
import React from 'react'
import logo from '../assets/logo.svg'

const WorkList = () => {
  return (
    <div className='flex flex-col justify-start items-start'>
      <div className='work-header-grid relative flex justify-between w-full h-[378.828px] border-solid border-[#E8E8EC] dark:border-[#222225]'>
        <div className='relative left-box h-full flex-1 border-r border-solid border-[#E8E8EC] dark:border-[#222225]'></div>
        <div className='center-box h-full border-b flex flex-row grow min-w-[714px] min-[1200px]:min-w-[1080px]'>
          <div className='relative basis-1/3 h-full flex items-center justify-center border-r border-dashed border-[#E8E8EC] dark:border-[#222225] pb-5'>

            {/* EACH WORK CONTENT  */}
            <div className='flex flex-col justify-center items-center'>
              <div className='flex flex-col w-[360px] h-[126px] justify-start items-start p-4 pr-8 gap-3'>
                <div className='flex flex-row gap-2'>
                  <Image src={logo} alt="" height={28} width={28} className='' />
                  <span className='font-["Bluu_Next"] text-2xl text-[#1C2024] dark:text-[#EDEEF0]'>Publisher Prime</span>  
                </div>
                <span className='font-["Libre_Franklin"] text-sm leading-[18px] text-[#81838D] dark:text-[#777B84]'>
                  This innovative project leverages cutting-edge 
                  technology to simulate flight conditions and 
                  principles in a virtual environment
                </span>
              </div>
              <div className='flex flex-row flex-wrap w-[360px] h-[52px] justify-start items-start p-4 gap-1'>
                <div className='text-[10px] font-["JetBrains_Mono"] px-2 py-1 text-[#1C2024] dark:text-[#EDEEF0] bg-[#E8E8EC] dark:bg-[#222225] rounded-[2px]'>ART DIRECTION</div>
                <div className='text-[10px] font-["JetBrains_Mono"] px-2 py-1 text-[#1C2024] dark:text-[#EDEEF0] bg-[#E8E8EC] dark:bg-[#222225] rounded-[2px]'>AR</div>
                <div className='text-[10px] font-["JetBrains_Mono"] px-2 py-1 text-[#1C2024] dark:text-[#EDEEF0] bg-[#E8E8EC] dark:bg-[#222225] rounded-[2px]'>INTERACTION</div>
                <div className='text-[10px] font-["JetBrains_Mono"] px-2 py-1 text-[#1C2024] dark:text-[#EDEEF0] bg-[#E8E8EC] dark:bg-[#222225] rounded-[2px]'>3D MODELING</div>
              </div>
            </div>

          </div>
          <div className='basis-2/3 h-full p-1'>
            {/* EACH WORK PICTURE */}
            <div className='w-full h-full rounded-[3px] border border-[#D3D4D7] dark:border-[#35363A]'></div>
          </div>
        </div>
        <div className='relative left-box h-full flex-1 border-l border-solid border-[#E8E8EC] dark:border-[#222225]'></div>
      </div>
    </div>
  )
}

export default WorkList
