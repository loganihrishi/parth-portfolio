"use client";

import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { testimonialsLeft, testimonialsRight } from '../data/index';
// import { ParallaxText } from './ui/ParallaxText';

const Testimonial = () => {
  return (
    <section className="relative bg-[#161617] h-full w-full flex flex-col">
      <div className="bg-white dark:bg-[#111113] h-full mx-6">
        <div className='backgroundbox relative flex justify-between w-full h-[150px]'>
          <div className='relative left-box h-full flex-1 border-r border-solid border-[#E8E8EC] dark:border-[#222225]'>
            <div className='absolute z-[2] h-[5px] w-[5px] rounded-full bg-[#81838D] dark:bg-[#777B84] bottom-[-2px] right-[-3px] ring-white dark:ring-[#111113] ring-2'></div>
          </div>
          <div className='center-box flex flex-row grow min-w-[714px] min-[1200px]:min-w-[1080px] border-b border-solid border-[#E8E8EC] dark:border-[#222225]'>
            <div className='basis-1/3 h-full border-r border-dashed border-[#E8E8EC] dark:border-[#222225]'></div>
            <div className='basis-1/3 h-full border-r border-dashed border-[#E8E8EC] dark:border-[#222225]'></div>
            <div className='basis-1/3 h-full'></div>
            {/* Marquee */}
            <div className="absolute flex flex-col gap-2 w-[1080px] max-[1024px]:max-w-[928px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mask-gradient">
              {/* left side going */}
              <Marquee speed={50}>
                {testimonialsLeft.map((testimonial, index) => (
                  <div key={index} className="flex flex-row gap-4 mx-[3px] px-4 py-2 items-center justify-center bg-[#F0F0F3] dark:bg-[#18191B] w-auto h-12 rounded-[3px] overflow-visible">
                    <h4 className="text-[#1C2024] dark:text-[#C8C9CD] font-bluu text-xl font-thin tracking-tight">
                      “{testimonial.message}”
                    </h4>
                    <Image src={testimonial.img} alt="" height={32} width={32}></Image>
                  </div>
                ))}
              </Marquee>
              {/* <ParallaxText baseVelocity={-5}>
                <div>
                  <div className="flex flex-row gap-4 mx-[3px] px-4 py-2 items-center justify-center bg-[#F0F0F3] dark:bg-[#18191B] w-auto h-12 rounded-[3px] overflow-visible">
                    <h4 className="text-[#1C2024] dark:text-[#C8C9CD] font-bluu text-xl font-thin tracking-tight">
                      “ghjkvbnmkjshfjkv”
                    </h4>
                    <Image src={testimonial.img} alt="" height={32} width={32}></Image>
                  </div>
                </div>
              </ParallaxText> */}
              {/* right side going */}
              <Marquee speed={50} direction="right">
                {testimonialsRight.map((testimonial, index) => (
                  <div key={index} className="flex flex-row gap-4 mx-[3px] px-4 py-2 items-center justify-center bg-[#F0F0F3] dark:bg-[#18191B] w-auto h-12 rounded-[3px] overflow-visible">
                    <h4 className="text-[#1C2024] dark:text-[#C8C9CD] font-bluu text-xl font-thin tracking-tight">
                      “{testimonial.message}”
                    </h4>
                    <Image src={testimonial.img} alt="" height={32} width={32}></Image>
                  </div>
                ))}
              </Marquee>
            </div> 
          </div>
          <div className='relative right-box h-full flex-1 border-l border-solid border-[#E8E8EC] dark:border-[#222225]'>
            <div className='absolute z-[2] h-[5px] w-[5px] rounded-full bg-[#81838D] dark:bg-[#777B84] bottom-[-2px] left-[-3px] ring-white dark:ring-[#111113] ring-2'></div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Testimonial