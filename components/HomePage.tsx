import React from 'react'
import Image from 'next/image';
import pic from '../assets/Container.svg'
import pic2 from '../assets/pic.jpeg'
import './home.css'

const HomePage = () => {
  const renderTimeline = () => {
    const startTop = 30;
    const step = 47;
    const labels = [50, 100, 150, 200, 300, 400, 500, 600, 650, 700, 750, 800, 850, 900];

    const timeline = [];

    for (let i = 0; i < labels.length; i++) {
      const topValue = startTop + step * i;
      const label = labels[i];

      timeline.push(
        <div key={`line-${i}`} className='absolute h-[1px] w-[6px] bg-[#E8E8EC] dark:bg-[#222225] min-[1200px]:right-[3px] right-[-7px]' style={{ top: `${topValue}px`}}></div>,
        <p key={`label-${i}`} className='absolute text-[8px] min-[1200px]:-rotate-90 rotate-90 text-[#C8C9CD] dark:text-[#3E4044] min-[1200px]:right-[12px] right-[-22px]' style={{ top: `${topValue - 5}px` }}>{label}</p>
      );
    }

    return timeline;
  };

  return (
    <section className='flex flex-col'>
      <div className='topbox relative flex justify-between w-full h-[60px] border-b border-solid border-[#E8E8EC] dark:border-[#222225]'>
        <div className='relative left-box h-[60px] flex-1 border-r border-solid border-[#E8E8EC] dark:border-[#222225]'>
          {renderTimeline()}
          <div className='absolute z-[2] h-[5px] w-[5px] rounded-full bg-[#81838D] dark:bg-[#777B84] bottom-[-2px] right-[-3px] ring-white dark:ring-[#111113] ring-2'></div>
        </div>
        <div className='center-box h-[60px] grow min-w-[714px] min-[1200px]:min-w-[1080px]'></div>
        <div className='relative right-box h-[60px] flex-1 border-l border-solid border-[#E8E8EC] dark:border-[#222225]'>
          <div className='absolute z-[2] h-[5px] w-[5px] rounded-full bg-[#81838D] dark:bg-[#777B84] bottom-[-2px] left-[-3px] ring-white dark:ring-[#111113] ring-2'></div>
        </div>
      </div>

      <div className='centerbox relative flex justify-between w-full h-[602px] border-b border-solid border-[#E8E8EC] dark:border-[#222225]'>
        <div className='relative left-box h-[602px] flex-1 border-r border-solid border-[#E8E8EC] dark:border-[#222225]'>
          <div className='absolute z-[2] h-[5px] w-[5px] rounded-full bg-[#81838D] dark:bg-[#777B84] bottom-[-2px] right-[-3px] ring-white dark:ring-[#111113] ring-2'></div>
        </div>
        <div className='center-box flex flex-row grow min-w-[714px] min-[1200px]:min-w-[1080px]'>
          <div className='basis-1/3 h-[602px] border-r border-dashed border-[#E8E8EC] dark:border-[#222225]'></div>
          <div className='relative basis-1/3 h-[602px] border-r border-dashed border-[#E8E8EC] dark:border-[#222225]'>
          <div className='relative flex justify-center items-center top-[140px]'>
            <Image src={pic} alt="" height={104} width={104} className='rounded-full' />
          </div>
          </div>
          <div className='basis-1/3 h-[602px]'></div>
        </div>
        <div className='relative right-box h-[602px] flex-1 border-l border-solid border-[#E8E8EC] dark:border-[#222225]'>
        <div className='absolute z-[2] h-[5px] w-[5px] rounded-full bg-[#81838D] dark:bg-[#777B84] bottom-[-2px] left-[-3px] ring-white dark:ring-[#111113] ring-2'></div>
        </div>
      </div>

      <div className='bottombox relative flex justify-between w-full h-[44px] border-b border-solid border-[#E8E8EC] dark:border-[#222225]'>
        <div className='relative left-box h-[44px] flex-1 border-r border-solid border-[#E8E8EC] dark:border-[#222225]'>
          <div className='absolute z-[2] h-[5px] w-[5px] rounded-full bg-[#81838D] dark:bg-[#777B84] bottom-[-2px] right-[-3px] ring-white dark:ring-[#111113] ring-2'></div>
        </div>
        <div className='center-box flex flex-row grow min-w-[714px] min-[1200px]:min-w-[1080px]'>
          <div className='basis-1/3 h-[44px] border-r border-dashed border-[#E8E8EC] dark:border-[#222225]'></div>
          <div className='basis-1/3 h-[44px] border-r border-dashed border-[#E8E8EC] dark:border-[#222225]'></div>
          <div className='basis-1/3 h-[44px]'></div>
        </div>
        <div className='relative right-box h-[44px] flex-1 border-l border-solid border-[#E8E8EC] dark:border-[#222225]'>
        <div className='absolute z-[2] h-[5px] w-[5px] rounded-full bg-[#81838D] dark:bg-[#777B84] bottom-[-2px] left-[-3px] ring-white dark:ring-[#111113] ring-2'></div>
        </div>
      </div>
    </section>
  )
  
}

export default HomePage
