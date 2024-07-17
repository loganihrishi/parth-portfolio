"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import img from "../assets/personal.svg";
import img2 from "../assets/img2.svg";
import Marquee from "react-fast-marquee";

export function Testimonial() {
  return (
    <section className="relative bg-[#161617] min-h-screen w-full flex flex-col">
      <div className="bg-white dark:bg-[#111113] min-h-screen mx-6 mb-6 rounded-b-xl">
        <div className='backgroundbox relative flex justify-between w-full h-[150px] border-b border-solid border-[#E8E8EC] dark:border-[#222225]'>
          <div className='relative left-box h-full flex-1 border-r border-solid border-[#E8E8EC] dark:border-[#222225]'>
            <div className='absolute z-[2] h-[5px] w-[5px] rounded-full bg-[#81838D] dark:bg-[#777B84] bottom-[-2px] right-[-3px] ring-white dark:ring-[#111113] ring-2'></div>
          </div>
          <div className='center-box flex flex-row grow min-w-[714px] min-[1200px]:min-w-[1080px]'>
            <div className='basis-1/3 h-full border-r border-dashed border-[#E8E8EC] dark:border-[#222225]'></div>
            <div className='basis-1/3 h-full border-r border-dashed border-[#E8E8EC] dark:border-[#222225]'></div>
            <div className='basis-1/3 h-full'></div>
            {/* Marquee */}
            <div className="absolute flex flex-col gap-2 w-[1080px] max-[1024px]:max-w-[928px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mask-gradient">
              {/* left side going */}
              <Marquee speed={50}>
                <div className="flex flex-row gap-4 mx-[3px] px-4 py-2 items-center justify-center bg-[#18191B] w-auto h-12 rounded-[3px] overflow-visible">
                  <h4 className="text-[#C8C9CD] font-['Bluu_Next'] text-xl font-thin tracking-tight">
                    “Nathan global mindset and technical prowess make him an invaluable asset.”
                  </h4>
                  <Image src={img2} alt="" height={32} width={32}></Image>
                </div>
                <div className="flex flex-row gap-4 mx-[3px] px-4 py-2 items-center justify-center bg-[#18191B] w-auto h-12 rounded-[3px] overflow-visible">
                  <h4 className="text-[#C8C9CD] font-['Bluu_Next'] text-xl font-thin tracking-tight">
                    “Nathan global mindset and technical prowess make him an invaluable asset.”
                  </h4>
                  <Image src={img2} alt="" height={32} width={32}></Image>
                </div>
                <div className="flex flex-row gap-4 mx-[3px] px-4 py-2 items-center justify-center bg-[#18191B] w-auto h-12 rounded-[3px] overflow-visible">
                  <h4 className="text-[#C8C9CD] font-['Bluu_Next'] text-xl font-thin tracking-tight">
                    “Nathan global mindset and technical prowess make him an invaluable asset.”
                  </h4>
                  <Image src={img2} alt="" height={32} width={32}></Image>
                </div>
                <div className="flex flex-row gap-4 mx-[3px] px-4 py-2 items-center justify-center bg-[#18191B] w-auto h-12 rounded-[3px] overflow-visible">
                  <h4 className="text-[#C8C9CD] font-['Bluu_Next'] text-xl font-thin tracking-tight">
                    “Nathan global mindset and technical prowess make him an invaluable asset.”
                  </h4>
                  <Image src={img2} alt="" height={32} width={32}></Image>
                </div>
              </Marquee>
              {/* right side going */}
              <Marquee speed={50} direction="right">
                <div className="flex flex-row gap-4 mx-[3px] px-4 py-2 items-center justify-center bg-[#18191B] w-auto h-12 rounded-[3px] overflow-visible">
                  <h4 className="text-[#C8C9CD] font-['Bluu_Next'] text-xl font-thin tracking-tight">
                    “Nathan global mindset and technical prowess make him an invaluable asset.”
                  </h4>
                  <Image src={img2} alt="" height={32} width={32}></Image>
                </div>
                <div className="flex flex-row gap-4 mx-[3px] px-4 py-2 items-center justify-center bg-[#18191B] w-auto h-12 rounded-[3px] overflow-visible">
                  <h4 className="text-[#C8C9CD] font-['Bluu_Next'] text-xl font-thin tracking-tight">
                    “Nathan global mindset and technical prowess make him an invaluable asset.”
                  </h4>
                  <Image src={img2} alt="" height={32} width={32}></Image>
                </div>
                <div className="flex flex-row gap-4 mx-[3px] px-4 py-2 items-center justify-center bg-[#18191B] w-auto h-12 rounded-[3px] overflow-visible">
                  <h4 className="text-[#C8C9CD] font-['Bluu_Next'] text-xl font-thin tracking-tight">
                    “Nathan global mindset and technical prowess make him an invaluable asset.”
                  </h4>
                  <Image src={img2} alt="" height={32} width={32}></Image>
                </div>
                <div className="flex flex-row gap-4 mx-[3px] px-4 py-2 items-center justify-center bg-[#18191B] w-auto h-12 rounded-[3px] overflow-visible">
                  <h4 className="text-[#C8C9CD] font-['Bluu_Next'] text-xl font-thin tracking-tight">
                    “Nathan global mindset and technical prowess make him an invaluable asset.”
                  </h4>
                  <Image src={img2} alt="" height={32} width={32}></Image>
                </div>
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



// const items = Array.from({ length: 8 });

{/* <div className="w-full py-8">
          <div className="wrapper overflow-hidden relative w-[90%] max-w-[1536px] h-[100px] mx-auto mt-8 mask-gradient">
            {items.map((_, idx) => (
              <motion.div
                key={`left-${idx}`}
                initial={{ x: '100%' }}
                animate={{ x: '-100%' }}
                transition={{ ease: "linear", repeat: Infinity, duration: 3 }}
                className="itemLeft bg-[#e11d48] w-[200px] h-[100px] rounded-md absolute"
                style={{ animationDelay: `calc(3s / 8 * (8 - ${idx + 1}) * -1)` }}
              ></motion.div>
            ))}
          </div>
          <div className="wrapper overflow-hidden relative w-[90%] max-w-[1536px] h-[100px] mx-auto mt-8 mask-gradient">
            {items.map((_, idx) => (
              <motion.div
                key={`right-${idx}`}
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ ease: "linear", repeat: Infinity, duration: 3 }}
                className="itemRight bg-[#e11d48] w-[200px] h-[100px] rounded-md absolute"
                style={{ animationDelay: `calc(3s / 8 * (8 - ${idx + 1}) * -1)` }}
              ></motion.div>
            ))}
          </div>
        </div> */}