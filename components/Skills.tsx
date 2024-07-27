"use client";

import React from 'react'
import Image from 'next/image';
import GridSpring from './ui/GridSpring';

const Skills = () => {
  return (
    <section className="relative bg-[#161617] h-full w-full flex flex-col">
      <div className="bg-white dark:bg-[#111113] h-full mx-6 pt-20 flex items-center justify-center">
        <div className='absolute top-[90px] font-["Bluu_Next"] text-5xl text-[#1C2024] dark:text-[#EDEEF0]'>Some of my skills</div>
        <div className='absolute top-[164px] left-[300px] rotate-[-5deg] font-["Caveat"] text-base text-[#81838D] dark:text-[#777B84]'>Pssst...You can drag the skills</div>
        <Image src={"/arrow_dark.svg"} alt="" height={25} width={25} className='absolute top-[190px] left-[400px] hidden dark:inline'/>
        <Image src={"/arrow_light.svg"} alt="" height={25} width={25} className='absolute top-[190px] left-[400px] inline dark:hidden'/>
        {/* SKILLS GRID */}
        <div className='skills-wrapper relative flex flex-row gap-8 justify-around w-[1280px] h-full py-[120px]'>
          <div className='flex items-center justify-center h-[484px] basis-1/4'>
            <div className='relative h-[444px] w-full rounded-[3px]'>
              <div className='absolute top-0 left-0 rounded-[3px] h-full w-full border border-dashed border-[#D3D3DC] dark:border-[#303135] backdrop-blur-[20px] bg-[#E8E8EC] dark:bg-[#222225]'></div>
              <div className='flex flex-col h-full w-full border border-[#D3D4D7] dark:border-[#35363A] bg-[#E8E8EC] dark:bg-[#111113] object-cover rounded-[3px] transform rotate-[3deg] z-[1]'>
                <Image src={'/2.webp'} width={296} height={444} alt="" loading='lazy' draggable={true} className='absolute top-0 left-0 h-full w-full object-cover opacity-80 dark:opacity-60 hover:opacity-100 rounded-[2px]'/>
                <div className='absolute top-4 left-1/2 -translate-x-1/2 w-[80%] px-5 py-3 text-left flex flex-row items-center justify-start gap-2 bg-white/40 dark:bg-white/20 backdrop-blur-[20px] rounded-[5px] outline-none'>
                  <div className='font-libre text-base font-normal leading-[20px] text-[#1C2024] dark:text-[#EDEEF0]'>Languages</div>
                  <div className='z-[2] h-[6px] w-[6px] rounded-full bg-[#35363A] dark:bg-[#E8E8EC]'></div>
                </div>
                <div className='flex items-end justify-center w-full h-full p-6 py-16 hover:cursor-grab active:cursor-grabbing'>
                  <GridSpring type="languages" />
                </div>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center h-[484px] basis-1/4'>
            <div className='relative flex h-[444px] w-full rounded-[3px] mt-[40px]'>
              <div className='absolute top-0 left-0 rounded-[3px] h-full w-full border border-dashed border-[#D3D3DC] dark:border-[#303135] backdrop-blur-[20px] bg-[#E8E8EC] dark:bg-[#222225]'></div>
              <div className='flex flex-col h-full w-full border border-[#D3D4D7] dark:border-[#35363A] bg-[#E8E8EC] dark:bg-[#111113] object-cover rounded-[3px] transform rotate-[-4deg] z-[1]'>
                <Image src={'/1.webp'} alt="" width={296} height={444} loading='lazy' draggable={true} className='absolute top-0 left-0 h-full w-full object-cover opacity-80 dark:opacity-60 hover:opacity-100 rounded-[2px]'/>
                <div className='absolute top-4 left-1/2 -translate-x-1/2 w-[80%] px-5 py-3 text-left flex flex-row items-center justify-start gap-2 bg-white/40 dark:bg-white/20 backdrop-blur-[20px] rounded-[5px] outline-none'>
                  <div className='font-libre text-base font-normal leading-[20px] text-[#1C2024] dark:text-[#EDEEF0]'>Frameworks</div>
                  <div className='z-[2] h-[6px] w-[6px] rounded-full bg-[#35363A] dark:bg-[#E8E8EC]'></div>
                </div>
                <div className='flex items-end justify-center w-full h-full p-6 py-[88px] hover:cursor-grab active:cursor-grabbing'>
                  <GridSpring type="frameworks" />
                </div>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center h-[484px] basis-1/4'>
            <div className='relative flex h-[444px] w-full rounded-[3px] mb-[10px]'>
              <div className='absolute top-0 left-0 rounded-[3px] h-full w-full border border-dashed border-[#D3D3DC] dark:border-[#303135] backdrop-blur-[20px] bg-[#E8E8EC] dark:bg-[#222225]'></div>
              <div className='flex flex-col h-full w-full border border-[#D3D4D7] dark:border-[#35363A] bg-[#E8E8EC] dark:bg-[#111113] object-cover rounded-[3px] transform rotate-[2deg] z-[1]'>
                <Image src={'/3.webp'} alt="" width={296} height={444} loading='lazy' draggable={true} className='absolute top-0 left-0 h-full w-full object-cover opacity-80 dark:opacity-60 hover:opacity-100 rounded-[2px]'/>
                <div className='absolute top-4 left-1/2 -translate-x-1/2 w-[80%] px-5 py-3 text-left flex flex-row items-center justify-start gap-2 bg-white/40 dark:bg-white/20 backdrop-blur-[20px] rounded-[5px] outline-none'>
                  <div className='font-libre text-base font-normal leading-[20px] text-[#1C2024] dark:text-[#EDEEF0]'>Developer Tools</div>
                  <div className='z-[2] h-[6px] w-[6px] rounded-full bg-[#35363A] dark:bg-[#E8E8EC]'></div>
                </div>
                <div className='flex items-end justify-center w-full h-full p-6 py-20 hover:cursor-grab active:cursor-grabbing'>
                  <GridSpring type="developer tools" />
                </div>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center h-[484px] basis-1/4'>
            <div className='relative flex h-[444px] w-full rounded-[3px] mb-[30px]'>
              <div className='absolute top-0 left-0 rounded-[3px] h-full w-full border border-dashed border-[#D3D3DC] dark:border-[#303135] backdrop-blur-[20px] bg-[#E8E8EC] dark:bg-[#222225]'></div>
              <div className='flex flex-col h-full w-full border border-[#D3D4D7] dark:border-[#35363A] bg-[#E8E8EC] dark:bg-[#111113] object-cover rounded-[3px] transform rotate-[-3deg] z-[1]'>
                <Image src={'/4.webp'} alt="" width={296} height={444} loading='lazy' draggable={true} className='absolute top-0 left-0 h-full w-full object-cover opacity-80 dark:opacity-60 hover:opacity-100 rounded-[2px]'/>
                <div className='absolute top-4 left-1/2 -translate-x-1/2 w-[80%] px-5 py-3 text-left flex flex-row items-center justify-start gap-2 bg-white/40 dark:bg-white/20 backdrop-blur-[20px] rounded-[5px] outline-none'>
                  <div className='font-libre text-base font-normal leading-[20px] text-[#1C2024] dark:text-[#EDEEF0]'>Libraries</div>
                  <div className='z-[2] h-[6px] w-[6px] rounded-full bg-[#35363A] dark:bg-[#E8E8EC]'></div>
                </div>
                <div className='flex items-end justify-center w-full h-full p-6 py-[84px] hover:cursor-grab active:cursor-grabbing'>
                  <GridSpring type="libraries" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
