"use client";

import Image from 'next/image'
import React, { useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { aboutData } from '../data/index'

const About: React.FC = () => {
  // Original position values
  const originalX = 0;
  const originalY = 0;

  // States and motion values for the first image
  const x1 = useMotionValue(originalX);
  const y1 = useMotionValue(originalY);
  const [isDragging1, setIsDragging1] = useState(false);
  const springConfig1 = (distance: number) => ({
    stiffness: Math.max(700 - distance * 120, 0),
    damping: 20 + distance * 10
  });
  const dx1 = useSpring(x1, springConfig1(Math.abs(x1.get() - originalX)));
  const dy1 = useSpring(y1, springConfig1(Math.abs(y1.get() - originalY)));
  const handleDragStart1 = () => setIsDragging1(true);
  const handleDragEnd1 = () => {
    setIsDragging1(false);
    x1.set(originalX);
    y1.set(originalY);
  };

  // States and motion values for the second image
  const x2 = useMotionValue(originalX);
  const y2 = useMotionValue(originalY);
  const [isDragging2, setIsDragging2] = useState(false);
  const springConfig2 = (distance: number) => ({
    stiffness: Math.max(700 - distance * 120, 0),
    damping: 20 + distance * 10
  });
  const dx2 = useSpring(x2, springConfig2(Math.abs(x2.get() - originalX)));
  const dy2 = useSpring(y2, springConfig2(Math.abs(y2.get() - originalY)));
  const handleDragStart2 = () => setIsDragging2(true);
  const handleDragEnd2 = () => {
    setIsDragging2(false);
    x2.set(originalX);
    y2.set(originalY);
  };

  return (
    <section id='about' className="relative bg-[#161617] h-full w-full flex flex-col">
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
            <Image src={"/Gradient_dark.svg"} alt="" height={48} width={48} className='absolute top-[45px] right-1 z-10 hidden dark:inline'/>
            <Image src={ "/Gradient_light.svg"} alt="" height={48} width={48} className='absolute top-[45px] right-1 z-10 inline dark:hidden'/>

            {/* EYE */}
            <Image src={"/eye_dark.svg"} alt="" height={48} width={48} className='absolute top-[112px] left-11 z-10 hidden dark:inline'/>
            <Image src={"/eye_light.svg"} alt="" height={48} width={48} className='absolute top-[112px] left-11 z-10 inline dark:hidden'/>
            <p className='absolute top-[200px] left-11 z-10 -rotate-90 font-jetbrains text-[10px] font-normal leading-[12px] text-[#81838D] dark:text-[#777B84]'>ABOUT ME</p>

            {/* PHOTOS */}
            <div className='absolute top-[392px] -left-14 z-10 rounded-[3px]'>
              <div className='flex items-center justify-center transform rotate-[-3deg] rounded-[5px] w-[200px] h-[300px] border border-dashed border-[#D3D3DC] dark:border-[#303135] backdrop-blur-[20px] bg-[#E8E8EC] dark:bg-[#222225]'>
                <p className='text-base font-caveat font-normal leading-[18px] text-[#1C2024] dark:text-[#EDEEF0] cursor-pointer'>Solving Rubik&apos;s Cube</p>
              </div>
              <motion.img
                src={aboutData.img1} 
                alt="Parth studying" 
                height={300} 
                width={200} 
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={1}
                dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
                onDragStart={handleDragStart1}
                onDragEnd={handleDragEnd1}
                style={{ x: isDragging1 ? x1 : dx1, y: isDragging1 ? y1 : dy1, rotate: '-6deg' }}
                transition={{ type: 'spring', duration: 1 }}
                className='absolute top-0 left-0 h-full w-full object-cover rounded-[3px] z-50 hover:cursor-grab active:cursor-grabbing' 
              />
            </div>
            <div className='absolute top-[322px] right-7 z-10 rounded-[3px]'>
              <div className='flex items-center justify-center transform rotate-[2deg] rounded-[5px] w-[200px] h-[300px] border border-dashed border-[#D3D3DC] dark:border-[#303135] backdrop-blur-[20px] bg-[#E8E8EC] dark:bg-[#222225]'>
                <p className='text-base font-caveat font-normal leading-[18px] text-[#1C2024] dark:text-[#EDEEF0] cursor-pointer'>Solving Rubik&apos;s Cube</p>
              </div>
              <motion.img
                src={aboutData.img2} 
                alt="Parth doing handstand on Flora Peak" 
                height={300} 
                width={200} 
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={1}
                dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
                onDragStart={handleDragStart2}
                onDragEnd={handleDragEnd2}
                style={{ x: isDragging2 ? x2 : dx2, y: isDragging2 ? y2 : dy2, rotate: '4deg' }}
                transition={{ type: 'spring', duration: 1 }}
                className='absolute top-0 left-0 h-full w-full object-cover rounded-[3px] z-50 hover:cursor-grab active:cursor-grabbing active:scale-[0.98] active:rotate-[5deg]' 
              />
            </div>

            {/* Main Content - About Me */}
            <div 
              className="absolute flex flex-row p-1 mt-4 border border-solid bg-white dark:bg-[#111113] border-[#E8E8EC] dark:border-[#222225] rounded-[6px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" 
              style={{ width: 'calc(100% - 8px)', height: 'calc(100% - 60px)' }}
            >
              <div className='w-full h-full flex flex-col items-center justify-center gap-12'>
                <h1 className='w-[700px] text-balance text-center font-bluu text-[89px] tracking-[-1.78px] leading-[80.1px] text-[#1C2024] dark:text-[#EDEEF0]'>Learning Innovating & Exploring.</h1>
                <div className='relative w-[580px] inline -space-x-1'> 
                  <span className='inline h-auto pr-[2px] text-balance text-center font-bluu leading-7 text-[42px] text-transparent'>A</span>     
                  <span className='absolute left-1 top-[10px] text-balance text-center font-bluu leading-7 text-[42px] text-[#1C2024] dark:text-[#EDEEF0]'>{aboutData.firstLetter}</span>     
                  <p className='inline text-balance text-left font-libre text-lg leading-[30.8px] text-[#81838D] dark:text-[#777B84]'>{aboutData.about}</p>
                  <p className='block text-balance text-left pl-1 font-libre text-lg leading-[30.8px] text-[#81838D] dark:text-[#777B84]'>{aboutData.about2}</p>
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
