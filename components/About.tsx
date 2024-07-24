"use client";

import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { motion, useAnimation, useMotionValue, useSpring } from 'framer-motion';
import gradient_dark from "../assets/Gradient_dark.svg"
import gradient_light from "../assets/Gradient_light.svg"
import eye_dark from "../assets/eye_dark.svg"
import eye_light from "../assets/eye_light.svg"
import handstand from "../assets/handstand.jpeg"
import studying from "../assets/studying.jpeg"

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Hardcoded original position values
  const originalX = 0;
  const originalY = 0;

  const x = useMotionValue(originalX);
  const y = useMotionValue(originalY);
  const [isDragging, setIsDragging] = useState(false);

  const springConfig = (distance: number) => ({
    stiffness: Math.max(700 - distance * 120, 0),
    damping: 20 + distance * 10
  });

  const dx = useSpring(x, springConfig(Math.abs(x.get() - originalX)));
  const dy = useSpring(y, springConfig(Math.abs(y.get() - originalY)));

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    x.set(originalX);
    y.set(originalY);
  };

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
            <Image src={gradient_dark} alt="" height={48} width={48} className='absolute top-[45px] right-1 z-10 hidden dark:inline'/>
            <Image src={gradient_light} alt="" height={48} width={48} className='absolute top-[45px] right-1 z-10 inline dark:hidden'/>

            {/* EYE */}
            <Image src={eye_dark} alt="" height={48} width={48} className='absolute top-[112px] left-11 z-10 hidden dark:inline'/>
            <Image src={eye_light} alt="" height={48} width={48} className='absolute top-[112px] left-11 z-10 inline dark:hidden'/>
            <p className='absolute top-[200px] left-11 z-10 -rotate-90 font-["JetBrains_Mono"] text-[10px] font-normal leading-[12px] text-[#81838D] dark:text-[#777B84]'>ABOUT ME</p>

            {/* PHOTOS */}
            <div className='absolute top-[392px] -left-14 z-10 rounded-[3px]'>
              <div className='flex items-center justify-center transform rotate-[-3deg] rounded-[5px] w-[200px] h-[300px] border border-dashed border-[#D3D3DC] dark:border-[#303135] backdrop-blur-[20px] bg-[#E8E8EC] dark:bg-[#222225]'>
                <p className='text-base font-["Caveat"] font-normal leading-[18px] text-[#1C2024] dark:text-[#EDEEF0] cursor-pointer'>Solving Rubik&apos;s Cube</p>
              </div>
              {/* <Image src={studying} alt="" height={300} width={200} draggable={true} className='absolute top-0 left-0 h-full w-full object-cover rounded-[3px] transform rotate-[-6deg]'/> */}
            </div>
            <div className='absolute top-[322px] right-7 z-10 rounded-[3px]'>
              <div className='flex items-center justify-center transform rotate-[2deg] rounded-[5px] w-[200px] h-[300px] border border-dashed border-[#D3D3DC] dark:border-[#303135] backdrop-blur-[20px] bg-[#E8E8EC] dark:bg-[#222225]'>
                <p className='text-base font-["Caveat"] font-normal leading-[18px] text-[#1C2024] dark:text-[#EDEEF0] cursor-pointer'>Solving Rubik&apos;s Cube</p>
              </div>
              {/* <Image src={handstand} alt="" height={300} width={200} draggable={true} className='absolute top-0 left-0 h-full w-full object-cover rounded-[3px] transform rotate-[4deg]'/> */}
              <motion.img
                src={handstand.src} 
                alt="Parth's handstand pic" 
                height={300} 
                width={200} 
                drag
                dragConstraints={containerRef}
                dragElastic={1}
                dragMomentum={false}
                dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                style={{ x: isDragging ? x : dx, y: isDragging ? y : dy }}
                transition={{ type: 'spring', duration: 1 }}
                className='absolute top-0 left-0 h-full w-full object-cover rounded-[3px] transform rotate-[4deg] z-50 hover:cursor-grab active:cursor-grabbing active:scale-[0.98] active:rotate-[5deg]' 
              />
            </div>

            {/* Main Content - About Me */}
            <div 
              ref={containerRef}
              className="absolute flex flex-row p-1 mt-4 border border-solid bg-white dark:bg-[#111113] border-[#E8E8EC] dark:border-[#222225] rounded-[6px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" 
              style={{ width: 'calc(100% - 8px)', height: 'calc(100% - 60px)' }}
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
