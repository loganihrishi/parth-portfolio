import React from 'react'

const Footer = () => {
  return (
    <section className="relative bg-[#161617] h-full w-full flex flex-col">
      <div className="bg-white dark:bg-[#111113] h-full mx-6 mb-6 rounded-b-xl">
      <div className='top-box relative flex justify-between w-full h-[68px]'>
          <div className='relative left-box h-full flex-1 border-r border-solid border-[#E8E8EC] dark:border-[#222225]'></div>
          <div className='center-box flex flex-row grow min-w-[714px] min-[1200px]:min-w-[1080px] border-b border-solid border-[#E8E8EC] dark:border-[#222225]'>
            <div className='basis-1/3 h-full border-r border-dashed border-[#E8E8EC] dark:border-[#222225]'></div>
            <div className='basis-1/3 h-full border-r border-dashed border-[#E8E8EC] dark:border-[#222225]'></div>
            <div className='basis-1/3 h-full'></div>
          </div>
          <div className='relative right-box h-full flex-1 border-l border-solid border-[#E8E8EC] dark:border-[#222225]'></div>
      </div>

      <div className='middle-box relative flex justify-between w-full h-[339px]'>
          <div className='relative left-box h-full flex-1 border-r border-solid border-[#E8E8EC] dark:border-[#222225]'></div>
          <div className='center-box flex flex-row grow min-w-[714px] min-[1200px]:min-w-[1080px] border-b border-solid border-[#E8E8EC] dark:border-[#222225]'>
            <div className='basis-1/3 h-full border-r border-dashed border-[#E8E8EC] dark:border-[#222225]'></div>
            <div className='basis-1/3 h-full border-r border-dashed border-[#E8E8EC] dark:border-[#222225]'></div>
            <div className='basis-1/3 h-full'></div>
          </div>
          <div className='relative right-box h-full flex-1 border-l border-solid border-[#E8E8EC] dark:border-[#222225]'></div>
      </div>

      <div className='bottom-box relative flex justify-between w-full h-[48px]'>
          <div className='relative left-box h-full flex-1 border-r border-solid border-[#E8E8EC] dark:border-[#222225]'></div>
          <div className='center-box flex flex-row grow min-w-[714px] min-[1200px]:min-w-[1080px]'>
            <div className='basis-1/3 h-full border-r border-dashed border-[#E8E8EC] dark:border-[#222225] flex items-center justify-start pl-4'>
              <p className='text-[#81838D] dark:text-[#777B84] text-xs font-light'>All rights reserved © 2024 ojieame.design</p>
            </div>
            <div className='basis-1/3 h-full border-r border-dashed border-[#E8E8EC] dark:border-[#222225]'></div>
            <div className='basis-1/3 h-full flex items-center justify-end pr-4'>
              <p className='text-[#1C2024] dark:text-[#EDEEF0] text-xs font-light'>Terms of Use</p>
            </div>
          </div>
          <div className='relative right-box h-full flex-1 border-l border-solid border-[#E8E8EC] dark:border-[#222225]'></div>
      </div>
      </div>
    </section>
  )
}

export default Footer
