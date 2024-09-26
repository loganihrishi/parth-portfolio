'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  const [time, setTime] = useState('');
  const [offset, setOffset] = useState(0);

  const formatTime = (date: Date, offset: number) => {
    const utcTime = date.getTime() + date.getTimezoneOffset() * 60000;
    const localTime = new Date(utcTime + 3600000 * offset);
    return localTime.toLocaleTimeString('en-GB'); // 'en-GB' locale for 24-hour format
  };

  useEffect(() => {
    const getClientOffset = () => new Date().getTimezoneOffset() / -60;
    const clientOffset = getClientOffset();
    setOffset(clientOffset);

    const updateTime = () => {
      setTime(formatTime(new Date(), clientOffset));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const gmtValue = offset >= 0 ? `+${offset}` : `${offset}`;

  const renderTimeline = () => {
    const startTop = 30;
    const step = 47;
    const labels = [50, 100, 150, 200, 300, 400, 500, 600, 650, 700, 750, 800, 850, 900];

    const timeline = [];

    for (let i = 0; i < labels.length; i++) {
      const topValue = startTop + step * i;
      const label = labels[i];

      timeline.push(
        <div key={`line-${i}`} className='max-[640px]:hidden absolute h-[1px] w-[6px] bg-[#E8E8EC] dark:bg-[#222225] min-[1200px]:right-[3px] right-[-7px]' style={{ top: `${topValue}px`}}></div>,
        <p key={`label-${i}`} className='max-[640px]:hidden absolute text-[8px] min-[1200px]:-rotate-90 rotate-90 text-[#C8C9CD] dark:text-[#3E4044] min-[1200px]:right-[12px] right-[-22px]' style={{ top: `${topValue - 5}px` }}>{label}</p>
      );
    }

    return timeline;
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 30,
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };
  
  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 30,
      }
    },
  };
  
  return (
    <section id="home" className="relative bg-[#161617] h-full pt-[6px] sm:pt-6 w-full">
      <div className="bg-white dark:bg-[#111113] h-full mx-[6px] sm:mx-6 rounded-t-[6px] sm:rounded-t-xl">
        {/* Background setup */}
        <div className='max-[640px]:hidden topbox relative flex justify-between w-full h-[60px] border-b border-solid border-[#E8E8EC] dark:border-[#222225]'>
          <div className='relative left-box h-full flex-1 border-r border-solid border-[#E8E8EC] dark:border-[#222225]'>
            {renderTimeline()}
            <div className='max-[640px]:hidden absolute z-[2] h-[5px] w-[5px] rounded-full bg-[#81838D] dark:bg-[#777B84] bottom-[-2px] right-[-3px] ring-white dark:ring-[#111113] ring-2'></div>
          </div>
          <div className='center-box h-full grow min-w-[714px] min-[1200px]:min-w-[1080px]'></div>
          <div className='relative right-box h-full flex-1 border-l border-solid border-[#E8E8EC] dark:border-[#222225]'>
            <div className='max-[640px]:hidden absolute z-[2] h-[5px] w-[5px] rounded-full bg-[#81838D] dark:bg-[#777B84] bottom-[-2px] left-[-3px] ring-white dark:ring-[#111113] ring-2'></div>
          </div>
        </div>

        <div className='centerbox relative flex justify-between w-full h-[668px] sm:h-[602px] border-b border-solid border-[#E8E8EC] dark:border-[#222225]'>
          <div className='relative left-box max-[640px]:max-w-[6px] w-full h-full flex-1 border-r border-solid border-[#E8E8EC] dark:border-[#222225]'>
            <div className='max-[640px]:hidden absolute z-[2] h-[5px] w-[5px] rounded-full bg-[#81838D] dark:bg-[#777B84] bottom-[-2px] right-[-3px] ring-white dark:ring-[#111113] ring-2'></div>
          </div>
          <div className='center-box flex flex-row grow min-w-[714px] min-[1200px]:min-w-[1080px]'>
            <div className='basis-1/2 sm:basis-1/3 h-full border-r border-dashed border-[#E8E8EC] dark:border-[#222225]'></div>
            <div className='max-[640px]:hidden relative basis-1/3 h-full border-r border-dashed border-[#E8E8EC] dark:border-[#222225]'></div>
            <div className='basis-1/2 sm:basis-1/3 h-full'></div>
          </div>
          <div className='relative right-box max-[640px]:max-w-[6px] w-full h-full flex-1 border-l border-solid border-[#E8E8EC] dark:border-[#222225]'>
            <div className='max-[640px]:hidden absolute z-[2] h-[5px] w-[5px] rounded-full bg-[#81838D] dark:bg-[#777B84] bottom-[-2px] left-[-3px] ring-white dark:ring-[#111113] ring-2'></div>
          </div>
        </div>

        <div className='bottombox relative flex justify-between w-full h-[44px] border-b border-solid border-[#E8E8EC] dark:border-[#222225]'>
          <div className='relative left-box max-[640px]:max-w-[6px] w-full h-full flex-1 border-r border-solid border-[#E8E8EC] dark:border-[#222225]'>
            <div className='max-[640px]:hidden absolute z-[2] h-[5px] w-[5px] rounded-full bg-[#81838D] dark:bg-[#777B84] bottom-[-2px] right-[-3px] ring-white dark:ring-[#111113] ring-2'></div>
          </div>
          <div className='relative center-box flex flex-row grow min-w-[714px] min-[1200px]:min-w-[1080px]'>
            <div className='basis-1/2 sm:basis-1/3 h-full border-r border-dashed border-[#E8E8EC] dark:border-[#222225]'></div>
            <div className='max-[640px]:hidden basis-1/3 h-full border-r border-dashed border-[#E8E8EC] dark:border-[#222225]'></div>
            <div className='basis-1/2 sm:basis-1/3 h-full'></div>
            <div className='absolute top-0 left-0 w-full h-full flex flex-row items-center justify-between p-4 text-[#81838D] dark:text-[#777B84] text-[10px] leading-[12px] font-jetbrains font-normal'>
              <p className='capitalize text-left z-[2]'>
              
              </p>
              <p className='capitalize text-right z-[2]'>
                {time} GMT{gmtValue}
              </p>
            </div>
          </div>
          <div className='relative right-box max-[640px]:max-w-[6px] w-full h-full flex-1 border-l border-solid border-[#E8E8EC] dark:border-[#222225]'>
            <div className='max-[640px]:hidden absolute z-[2] h-[5px] w-[5px] rounded-full bg-[#81838D] dark:bg-[#777B84] bottom-[-2px] left-[-3px] ring-white dark:ring-[#111113] ring-2'></div>
          </div>
        </div>

        {/* Main content */}
        <motion.div
          className='absolute inset-0 flex flex-col justify-center items-center top-[2%] sm:top-[13%] sm:p-0 p-4'
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className='rounded-full border ring-[#E8E8EC]'>
          <Image 
  src={'/profile_pic.png'} 
  alt="" 
  // className='inline dark:hidden' 
  height={125} 
  width={125} 
  className='inline dark:hidden' 
  style={{ 
    borderRadius: '50%',  // Circular shape
    border: '6px solid #000', // Border color and thickness
    objectFit: 'cover',  // Ensures image covers the area
    display: 'block', // Ensures block layout
    maxWidth: '100%', // Prevents overflow
    maxHeight: '100%', // Prevents overflow
    height: '125px', // Ensures height
    width: '125px' // Ensures width
  }} 
/>

          </div>

          <motion.div className='flex flex-col gap-4 sm:gap-[10px] items-center justify-center max-w-[860px] mt-7 sm:mt-9 text-center sm:p-0 p-4' variants={childVariants}>
            <h1 className=' text-[44px] sm:text-[60px] lg:text-[89px] leading-[48px] sm:leading-none font-normal text-[#1C2024] dark:text-white'>
              Hi, I&apos;m Hrishi
            </h1>
            <div className='font-libre max-w-[640px] text-lg font-normal text-[#81838D] dark:text-[#777B84]'>
              <p>
              A Junior at UBC majoring in CS & Statistics. I'm passionate about learning and exploring new technologies through personal projects. Outside of coding, I stay active and healthy with regular workouts. Thanks for visiting my portfolio. Let's connect and collaborate on exciting projects!
              </p>
              <p>
                Let&apos;s build something incredible together – and maybe even swap a few travel stories along the way!
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HomePage
