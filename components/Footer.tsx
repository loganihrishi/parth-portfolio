'use client';

import React from 'react';
import Image from 'next/image';
import { socialMedia } from "@/data";

const Footer = () => {
  // const handleDownload = async () => {
  //   try {
  //     const response = await fetch('/api/download?key=Parth_s_Resume.pdf');
  //     if (!response.ok) {
  //       throw new Error('Failed to download file');
  //     }
  // 
  //     const blob = await response.blob();
  //     const url = window.URL.createObjectURL(blob);
  //     const a = document.createElement('a');
  //     a.style.display = 'none';
  //     a.href = url;
  //     a.download = 'Parth_s_Resume.pdf';
  //     document.body.appendChild(a);
  //     a.click();
  //     window.URL.revokeObjectURL(url);
  //   } catch (error) {
  //     console.error('Error downloading file:', error);
  //   }
  // };

  // const router = useRouter();
  
  const handleDownload = () => {
    const url = 'https://threads-clone-local-parth.s3.eu-north-1.amazonaws.com/Parth_s_Resume.pdf';
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.click();
  };

  return (
    <section id="contact" className="relative bg-[#161617] h-full w-full flex flex-col">
      <div className="bg-white dark:bg-[#111113] h-full mx-6 mb-6 rounded-b-xl">
        <div className='top-box relative flex justify-between w-full h-[68px]'>
          <div className='relative left-box h-full flex-1 border-r border-solid border-[#E8E8EC] dark:border-[#222225]'></div>
          <div className='center-box flex flex-row grow min-w-[714px] min-[1200px]:min-w-[1080px] border-b border-solid border-[#E8E8EC] dark:border-[#222225]'>
            <div className='basis-1/3 h-full border-r border-dashed border-[#E8E8EC] dark:border-[#222225] flex items-center justify-start pl-4'>
              <div className='flex-col'>
                <p className='font-["Libre_Franklin"] text-sm font-medium leading-[18px] text-[#1C2024] dark:text-[#EDEEF0]'>
                  Get in touch
                </p>
                <p className='font-["Libre_Franklin"] text-sm font-normal leading-[18px] text-[#81838D] dark:text-[#777B84]'>
                  Send an email or DM and I&apos;ll get back to you asap.
                </p>
              </div>
            </div>
            <div className='basis-1/3 h-full border-r border-dashed border-[#E8E8EC] dark:border-[#222225]'></div>
            <div className='basis-1/3 h-full flex justify-end'>
              <div className='flex flex-row items-center justify-end w-[335px] h-full text-[#EDEEF0] gap-1 pr-4'>
                <button onClick={handleDownload} className="relative inline-flex h-[36px] overflow-hidden rounded-[3px] p-[1px] focus:outline-none focus:ring-2 focus:ring-transparent">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#161617_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[3px] bg-white dark:bg-[#101012] px-3 py-1 text-xs text-[#1C2024] dark:text-[#EDEEF0] backdrop-blur-3xl gap-[6px]">
                    <Image src={'/download_dark.svg'} alt="" height={17} width={17} className='hidden dark:inline' />
                    <Image src={'/download_light.svg'} alt="" height={17} width={17} className='inline dark:hidden' />
                    Download Current CV
                  </span>
                </button>
                <a href="mailto:parthrp15@gmail.com" target="_blank" rel="noopener noreferrer">
                  <button className="relative inline-flex h-[36px] overflow-hidden rounded-[3px] p-[1px] focus:outline-none focus:ring-2 focus:ring-transparent">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#161617_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[3px] bg-white dark:bg-[#101012] px-3 py-1 text-xs text-[#1C2024] dark:text-[#EDEEF0] backdrop-blur-3xl gap-[6px]">
                      <Image src={'/contact_dark.svg'} alt="" height={17} width={17} className='hidden dark:inline' />
                      <Image src={'/contact_light.svg'} alt="" height={17} width={17} className='inline dark:hidden' />
                      Contact Me
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className='relative right-box h-full flex-1 border-l border-solid border-[#E8E8EC] dark:border-[#222225]'></div>
        </div>

        <div className='middle-box relative flex justify-between w-full h-[339px]'>
          <div className='relative left-box h-full flex-1 border-r border-solid border-[#E8E8EC] dark:border-[#222225]'></div>
          <div className='center-box flex flex-row grow min-w-[714px] min-[1200px]:min-w-[1080px] border-b border-solid border-[#E8E8EC] dark:border-[#222225]'>
            <div className='basis-1/3 h-full border-r border-dashed border-[#E8E8EC] dark:border-[#222225]'></div>
            <div className='basis-1/3 h-full border-r border-dashed border-[#E8E8EC] dark:border-[#222225]'></div>
            <div className='basis-1/3 h-full'></div>
          </div>
          <div className='relative right-box h-full flex-1 border-l border-solid border-[#E8E8EC] dark:border-[#222225]'></div>
          <div className="absolute bottom-[-120px] w-full flex justify-center items-end pb-4">
            <div className="font-['Bluu_Next_Bold'] text-[300px] text-[#F6F6F6] dark:text-[#19191B] text-center">
              PARTH
            </div>
          </div>
        </div>

        <div className='bottom-box relative flex justify-between w-full h-[48px]'>
          <div className='relative left-box h-full flex-1 border-r border-solid border-[#E8E8EC] dark:border-[#222225]'></div>
          <div className='center-box flex flex-row grow min-w-[714px] min-[1200px]:min-w-[1080px]'>
            <div className='basis-1/3 h-full border-r border-dashed border-[#E8E8EC] dark:border-[#222225] flex items-center justify-start pl-4'>
              <p className='text-[#81838D] dark:text-[#777B84] text-xs font-light'>All rights reserved © 2024 parth.design</p>
            </div>
            <div className='basis-1/3 h-full border-r border-dashed border-[#E8E8EC] dark:border-[#222225]'></div>
            <div className='basis-1/3 h-full flex items-center justify-end pr-4'>
              {/* <p className='text-[#1C2024] dark:text-[#EDEEF0] text-xs font-light'>Built with NextJS & Tailwind</p> */}
              <div className="flex items-center md:gap-3 gap-6">
                {socialMedia.map((info) => (
                  <div
                    key={info.id}
                    className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                  >
                    <a href={info.link} target="_blank" rel="noopener noreferrer">
                      <img src={info.img} alt="icons" width={20} height={20}/>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='relative right-box h-full flex-1 border-l border-solid border-[#E8E8EC] dark:border-[#222225]'></div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
