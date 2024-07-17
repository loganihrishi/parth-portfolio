import React from 'react'
import Image from 'next/image';
import Profile_dark from '../assets/profile_dark.svg'
import Profile_light from '../assets/profile_light.svg'

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
    <section className="relative bg-[#161617] min-h-screen pt-6 w-full">
      <div className="bg-white dark:bg-[#111113] min-h-screen mx-6 rounded-t-xl">
        {/* Background setup */}
        <div className='topbox relative flex justify-between w-full h-[60px] border-b border-solid border-[#E8E8EC] dark:border-[#222225]'>
          <div className='relative left-box h-full flex-1 border-r border-solid border-[#E8E8EC] dark:border-[#222225]'>
            {renderTimeline()}
            <div className='absolute z-[2] h-[5px] w-[5px] rounded-full bg-[#81838D] dark:bg-[#777B84] bottom-[-2px] right-[-3px] ring-white dark:ring-[#111113] ring-2'></div>
          </div>
          <div className='center-box h-full grow min-w-[714px] min-[1200px]:min-w-[1080px]'></div>
          <div className='relative right-box h-full flex-1 border-l border-solid border-[#E8E8EC] dark:border-[#222225]'>
            <div className='absolute z-[2] h-[5px] w-[5px] rounded-full bg-[#81838D] dark:bg-[#777B84] bottom-[-2px] left-[-3px] ring-white dark:ring-[#111113] ring-2'></div>
          </div>
        </div>

        <div className='centerbox relative flex justify-between w-full h-[602px] border-b border-solid border-[#E8E8EC] dark:border-[#222225]'>
          <div className='relative left-box h-full flex-1 border-r border-solid border-[#E8E8EC] dark:border-[#222225]'>
            <div className='absolute z-[2] h-[5px] w-[5px] rounded-full bg-[#81838D] dark:bg-[#777B84] bottom-[-2px] right-[-3px] ring-white dark:ring-[#111113] ring-2'></div>
          </div>
          <div className='center-box flex flex-row grow min-w-[714px] min-[1200px]:min-w-[1080px]'>
            <div className='basis-1/3 h-full border-r border-dashed border-[#E8E8EC] dark:border-[#222225]'></div>
            <div className='relative basis-1/3 h-full border-r border-dashed border-[#E8E8EC] dark:border-[#222225]'></div>
            <div className='basis-1/3 h-full'></div>
          </div>
          <div className='relative right-box h-full flex-1 border-l border-solid border-[#E8E8EC] dark:border-[#222225]'>
            <div className='absolute z-[2] h-[5px] w-[5px] rounded-full bg-[#81838D] dark:bg-[#777B84] bottom-[-2px] left-[-3px] ring-white dark:ring-[#111113] ring-2'></div>
          </div>
        </div>

        <div className='bottombox relative flex justify-between w-full h-[44px] border-b border-solid border-[#E8E8EC] dark:border-[#222225]'>
          <div className='relative left-box h-full flex-1 border-r border-solid border-[#E8E8EC] dark:border-[#222225]'>
            <div className='absolute z-[2] h-[5px] w-[5px] rounded-full bg-[#81838D] dark:bg-[#777B84] bottom-[-2px] right-[-3px] ring-white dark:ring-[#111113] ring-2'></div>
          </div>
          <div className='center-box flex flex-row grow min-w-[714px] min-[1200px]:min-w-[1080px]'>
            <div className='basis-1/3 h-full border-r border-dashed border-[#E8E8EC] dark:border-[#222225]'></div>
            <div className='basis-1/3 h-full border-r border-dashed border-[#E8E8EC] dark:border-[#222225]'></div>
            <div className='basis-1/3 h-full'></div>
          </div>
          <div className='relative right-box h-full flex-1 border-l border-solid border-[#E8E8EC] dark:border-[#222225]'>
            <div className='absolute z-[2] h-[5px] w-[5px] rounded-full bg-[#81838D] dark:bg-[#777B84] bottom-[-2px] left-[-3px] ring-white dark:ring-[#111113] ring-2'></div>
          </div>
        </div>

        {/* Main content */}
        <div className='absolute inset-0 flex flex-col justify-center items-center top-[-14px]'>
          <div className='rounded-full border ring-[#E8E8EC]'>
            <Image src={Profile_dark} alt="" height={104} width={104} className='hidden dark:inline' />
            <Image src={Profile_light} alt="" height={104} width={104} className='inline dark:hidden' />
          </div>

          <div className='flex flex-col gap-[10px] items-center justify-center max-w-[860px] mt-9 text-center'>
            <h1 className='font-["Bluu_Next"] text-[48px] sm:text-[60px] lg:text-[89px] leading-none font-normal text-[#1C2024] dark:text-white'>
              Hi, I&apos;m Parth.
            </h1>
            <div className='font-["Libre_Franklin"] max-w-[640px] text-base sm:text-lg font-normal text-[#81838D] dark:text-[#777B84]'>
              <p>
                I am a full stack developer focused on front-end development and design. Passionate about creating
                visually appealing products and leveraging AI for innovative solutions, I continuously seek new skills
                to enhance my work.
              </p>
              <p>
                Let&apos;s build something incredible together – and maybe swap a few travel stories along the way!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage
