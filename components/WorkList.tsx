import Image from 'next/image';
import React from 'react';
import { CardBody, CardContainer, CardItem } from './ui/3d-card';
import { workLists } from '../data/index';

const WorkList = () => {
  return (
    <div className='relative flex flex-col justify-start items-start'>
      {workLists.map((workList, index) => (
        <div key={index} className='worklist-grid relative flex justify-between w-full h-[378.828px] border-solid border-[#E8E8EC] dark:border-[#222225]'>
          <div className='relative left-box max-[640px]:min-w-[6px] w-full h-full flex-1 border-r border-solid border-[#E8E8EC] dark:border-[#222225]'></div>
          <div className='center-box h-full border-b flex flew-col sm:flex-row grow min-w-[714px] min-[1200px]:min-w-[1080px]'>
            
            <div className='work-div max-[640px]:hidden  relative sm:basis-1/3 h-full flex flex-col sm:flew-row items-center justify-center border-r border-dashed border-[#E8E8EC] dark:border-[#222225] pb-5'>
              {/* EACH WORK CONTENT */}
              <div className='flex flex-col justify-center items-center'>
                <div className='flex flex-col max-w-[360px] h-fit justify-start items-start p-4 pr-8 gap-2'>
                  <div className='flex flex-row gap-2 overflow-hidden'>
                    <Image src={workList.logo} alt="" height={28} width={28} loading='lazy' className='w-7 h-7 rounded-[4px]'/>
                    <p className='font-bluu text-2xl text-[#1C2024] dark:text-[#EDEEF0]'>{workList.title}</p>  
                  </div>
                  <span className='font-libre text-sm leading-[18px] text-[#81838D] dark:text-[#777B84]'>
                    {workList.description}
                  </span>
                </div>
                <div className='flex flex-row flex-wrap max-w-[360px] h-[52px] justify-start items-start p-4 gap-1'>
                  {workList.tags.map((tag, tagIndex) => (
                    <div key={tagIndex} className='text-[10px] font-jetbrains px-2 py-1 text-[#1C2024] dark:text-[#EDEEF0] bg-[#E8E8EC] dark:bg-[#222225] rounded-[2px]'>
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="max-[640px]:hidden work-div-pic sm:basis-2/3 w-full h-full p-1">
              {/* EACH WORK CONTENT PIC WITH ANIMATION */}
              <CardContainer className="h-full w-full">
                <CardBody className="relative h-full w-full">
                  <CardItem
                    translateZ={0}
                    className="w-full h-full overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-[1.05]"
                  >
                    <div className='w-full h-full border border-[#D3D4D7] dark:border-[#35363A] rounded-[3px] z-50'>
                      <div className="relative w-full h-full transform origin-center rounded-tl-[0.495708%] rounded-tr-[0.495708%]">
                        <div className="absolute inset-0 rounded-tl-[0.495708%] rounded-tr-[0.495708%] transform transition-transform duration-300 ease-in-out scale-[0.85] translate-y-[7.5%] hover:scale-[1] hover:translate-y-0">
                          <Image
                            sizes="calc(min(960px, 100vw) * 0.85)"
                            src={workList.img}
                            alt=""
                            layout="fill"
                            objectFit="cover"
                            objectPosition="50% 0%"
                            className="rounded-tl-[0.495708%] rounded-tr-[0.495708%] opacity-100"
                          />
                        </div>
                      </div>
                    </div>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>

            <div className='sm:hidden flex flex-col gap-4 p-1'>
              <div className='flex flex-col justify-center items-center'>
                <div className='flex flex-col max-w-[360px] h-fit justify-start items-start p-4 pr-8 gap-2'>
                  <div className='flex flex-row gap-2 overflow-hidden'>
                    <Image src={workList.logo} alt="" height={28} width={28} loading='lazy' className='w-7 h-7 rounded-[4px]'/>
                    <p className='font-bluu text-2xl text-[#1C2024] dark:text-[#EDEEF0]'>{workList.title}</p>  
                  </div>
                  <span className='font-libre text-sm leading-[18px] text-[#81838D] dark:text-[#777B84]'>
                    {workList.description}
                  </span>
                </div>
                <div className='flex flex-row flex-wrap max-w-[360px] h-[52px] justify-start items-start p-4 py-1 gap-1'>
                  {workList.tags.map((tag, tagIndex) => (
                    <div key={tagIndex} className='text-[10px] font-jetbrains px-2 py-1 text-[#1C2024] dark:text-[#EDEEF0] bg-[#E8E8EC] dark:bg-[#222225] rounded-[2px]'>
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
              <CardContainer className="h-full w-full">
                  <CardBody className="relative h-full w-full">
                    <CardItem
                      translateZ={0}
                      className="w-full h-full overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-[1.05]"
                    >
                      <div className='w-full h-full border border-[#D3D4D7] dark:border-[#35363A] rounded-[3px] z-50'>
                        <div className="relative w-full h-full transform origin-center rounded-tl-[0.495708%] rounded-tr-[0.495708%]">
                          <div className="absolute inset-0 rounded-tl-[0.495708%] rounded-tr-[0.495708%] transform transition-transform duration-300 ease-in-out scale-[0.85] translate-y-[7.5%] hover:scale-[1] hover:translate-y-0">
                            <Image
                              sizes="calc(min(960px, 100vw) * 0.85)"
                              src={workList.img}
                              alt=""
                              layout="fill"
                              objectFit="cover"
                              objectPosition="50% 0%"
                              className="rounded-tl-[0.495708%] rounded-tr-[0.495708%] opacity-100"
                            />
                          </div>
                        </div>
                      </div>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </div>
          </div>
          <div className='relative right-box max-[640px]:min-w-[6px] w-full h-full flex-1 border-l border-solid border-[#E8E8EC] dark:border-[#222225]'></div>
        </div>
      ))}
    </div>
  );
};

export default WorkList;
