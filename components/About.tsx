import React from 'react'

const About = () => {
  return (
    <section className="relative bg-[#161617] h-full w-full flex flex-col">
      <div className="bg-white dark:bg-[#111113] h-full mx-6">
        <div className='backgroundbox relative flex justify-between w-full h-[920px]'>
          <div className='relative left-box h-full flex-1 border-r border-solid border-[#E8E8EC] dark:border-[#222225]'></div>
          <div className='center-box flex flex-row grow min-w-[714px] min-[1200px]:min-w-[1080px] border-b border-solid border-[#E8E8EC] dark:border-[#222225]'>
            <div className='basis-1/3 h-full border-r border-dashed border-[#E8E8EC] dark:border-[#222225]'></div>
            <div className='basis-1/3 h-full border-r border-dashed border-[#E8E8EC] dark:border-[#222225]'></div>
            <div className='basis-1/3 h-full'></div>
          </div>
          <div className='relative right-box h-full flex-1 border-l border-solid border-[#E8E8EC] dark:border-[#222225]'></div>

          {/* Main Content - About Me */}
          <div className="absolute flex flex-col gap-2 w-[1072px] max-[1024px]:max-w-[920px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mask-gradient">
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
