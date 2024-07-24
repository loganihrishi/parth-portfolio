"use client";

import React from 'react'
import Image from 'next/image';
import GridSpring from './ui/GridSpring';
import handstand from "../assets/handstand.jpeg"

const Skills = () => {
  return (
    <section className="relative bg-[#161617] h-full w-full flex flex-col">
      <div className="bg-white dark:bg-[#111113] h-full mx-6 flex items-center justify-center">
        <div className='skills relative flex flex-row gap-8 justify-around w-[1280px] h-full py-[120px]'>
          <div className='flex items-center justify-center h-[484px] basis-1/4'>
            <div className='relative h-[444px] w-full rounded-[3px]'>
              <div className='absolute top-0 left-0 rounded-[3px] h-full w-full border border-dashed border-[#D3D3DC] dark:border-[#303135] backdrop-blur-[20px] bg-[#E8E8EC] dark:bg-[#222225]'></div>
              <div className='flex flex-col h-full w-full border border-[#D3D4D7] dark:border-[#35363A] bg-[#E8E8EC] dark:bg-[#111113] object-cover rounded-[3px] transform rotate-[3deg] z-[1]'>
                <Image src={handstand} alt="" loading='lazy' draggable={true} className='absolute top-0 left-0 h-full w-full object-cover opacity-40 rounded-[2px]'/>
                <div className='absolute top-3 left-1/2 -translate-x-1/2 w-[80%] px-5 py-3 text-left flex flex-row items-center justify-start gap-2 bg-white/20 backdrop-blur-[20px] rounded-[5px] outline-none'>
                  <div className='font-["Libre_Franklin"] text-base font-normal leading-[20px] text-[#1C2024] dark:text-[#EDEEF0]'>Languages</div>
                  <div className='z-[2] h-[6px] w-[6px] rounded-full bg-[#35363A] dark:bg-[#E8E8EC]'></div>
                </div>
                <div className='flex items-end justify-center w-full h-full p-6 pb-16'>
                  <GridSpring type="languages" />
                </div>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center h-[484px] basis-1/4'>
            <div className='relative flex h-[444px] w-full rounded-[3px] mt-[40px]'>
              <div className='absolute top-0 left-0 rounded-[3px] h-full w-full border border-dashed border-[#D3D3DC] dark:border-[#303135] backdrop-blur-[20px] bg-[#E8E8EC] dark:bg-[#222225]'></div>
              <div className='flex flex-col h-full w-full border border-[#D3D4D7] dark:border-[#35363A] bg-[#E8E8EC] dark:bg-[#111113] object-cover rounded-[3px] transform rotate-[-4deg] z-[1]'>
                <Image src={handstand} alt="" loading='lazy' draggable={true} className='absolute top-0 left-0 h-full w-full object-cover opacity-40 rounded-[2px]'/>
                <div className='absolute top-3 left-1/2 -translate-x-1/2 w-[80%] px-5 py-3 text-left flex flex-row items-center justify-start gap-2 bg-white/20 backdrop-blur-[20px] rounded-[5px] outline-none'>
                  <div className='font-["Libre_Franklin"] text-base font-normal leading-[20px] text-[#1C2024] dark:text-[#EDEEF0]'>Frameworks</div>
                  <div className='z-[2] h-[6px] w-[6px] rounded-full bg-[#35363A] dark:bg-[#E8E8EC]'></div>
                </div>
                <div className='flex items-end justify-center w-full h-full p-6 pb-16'>
                  <GridSpring type="frameworks" />
                </div>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center h-[484px] basis-1/4'>
            <div className='relative flex h-[444px] w-full rounded-[3px] mb-[10px]'>
              <div className='absolute top-0 left-0 rounded-[3px] h-full w-full border border-dashed border-[#D3D3DC] dark:border-[#303135] backdrop-blur-[20px] bg-[#E8E8EC] dark:bg-[#222225]'></div>
              <div className='flex flex-col h-full w-full border border-[#D3D4D7] dark:border-[#35363A] bg-[#E8E8EC] dark:bg-[#111113] object-cover rounded-[3px] transform rotate-[2deg] z-[1]'>
                <Image src={handstand} alt="" loading='lazy' draggable={true} className='absolute top-0 left-0 h-full w-full object-cover opacity-40 rounded-[2px]'/>
                <div className='absolute top-3 left-1/2 -translate-x-1/2 w-[80%] px-5 py-3 text-left flex flex-row items-center justify-start gap-2 bg-white/20 backdrop-blur-[20px] rounded-[5px] outline-none'>
                  <div className='font-["Libre_Franklin"] text-base font-normal leading-[20px] text-[#1C2024] dark:text-[#EDEEF0]'>Developer Tools</div>
                  <div className='z-[2] h-[6px] w-[6px] rounded-full bg-[#35363A] dark:bg-[#E8E8EC]'></div>
                </div>
                <div className='flex items-end justify-center w-full h-full p-6 pb-16'>
                  <GridSpring type="developer tools" />
                </div>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center h-[484px] basis-1/4'>
            <div className='relative flex h-[444px] w-full rounded-[3px] mb-[30px]'>
              <div className='absolute top-0 left-0 rounded-[3px] h-full w-full border border-dashed border-[#D3D3DC] dark:border-[#303135] backdrop-blur-[20px] bg-[#E8E8EC] dark:bg-[#222225]'></div>
              <div className='flex flex-col h-full w-full border border-[#D3D4D7] dark:border-[#35363A] bg-[#E8E8EC] dark:bg-[#111113] object-cover rounded-[3px] transform rotate-[-3deg] z-[1]'>
                <Image src={handstand} alt="" loading='lazy' draggable={true} className='absolute top-0 left-0 h-full w-full object-cover opacity-40 rounded-[2px]'/>
                <div className='absolute top-3 left-1/2 -translate-x-1/2 w-[80%] px-5 py-3 text-left flex flex-row items-center justify-start gap-2 bg-white/20 backdrop-blur-[20px] rounded-[5px] outline-none'>
                  <div className='font-["Libre_Franklin"] text-base font-normal leading-[20px] text-[#1C2024] dark:text-[#EDEEF0]'>Libraries</div>
                  <div className='z-[2] h-[6px] w-[6px] rounded-full bg-[#35363A] dark:bg-[#E8E8EC]'></div>
                </div>
                <div className='flex items-end justify-center w-full h-full p-6 pb-16'>
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
