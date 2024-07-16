import Image from 'next/image'
import React from 'react'
import logo from '../assets/logo.svg'
import img from "../assets/work1.svg";
import { CardBody, CardContainer, CardItem } from './ui/3d-card'

const WorkList = () => {
  return (
    <div className='flex flex-col justify-start items-start'>
      <div className='work-header-grid relative flex justify-between w-full h-[378.828px] border-solid border-[#E8E8EC] dark:border-[#222225]'>
        <div className='relative left-box h-full flex-1 border-r border-solid border-[#E8E8EC] dark:border-[#222225]'></div>
        <div className='center-box h-full border-b flex flex-row grow min-w-[714px] min-[1200px]:min-w-[1080px]'>
          
          <div className='relative basis-1/3 h-full flex items-center justify-center border-r border-dashed border-[#E8E8EC] dark:border-[#222225] pb-5'>
            {/* EACH WORK CONTENT  */}
            <div className='flex flex-col justify-center items-center'>
              <div className='flex flex-col w-[360px] h-[126px] justify-start items-start p-4 pr-8 gap-3'>
                <div className='flex flex-row gap-2'>
                  <Image src={logo} alt="" height={28} width={28} className='' />
                  <span className='font-["Bluu_Next"] text-2xl text-[#1C2024] dark:text-[#EDEEF0]'>Publisher Prime</span>  
                </div>
                <span className='font-["Libre_Franklin"] text-sm leading-[18px] text-[#81838D] dark:text-[#777B84]'>
                  This innovative project leverages cutting-edge 
                  technology to simulate flight conditions and 
                  principles in a virtual environment
                </span>
              </div>
              <div className='flex flex-row flex-wrap w-[360px] h-[52px] justify-start items-start p-4 gap-1'>
                <div className='text-[10px] font-["JetBrains_Mono"] px-2 py-1 text-[#1C2024] dark:text-[#EDEEF0] bg-[#E8E8EC] dark:bg-[#222225] rounded-[2px]'>ART DIRECTION</div>
                <div className='text-[10px] font-["JetBrains_Mono"] px-2 py-1 text-[#1C2024] dark:text-[#EDEEF0] bg-[#E8E8EC] dark:bg-[#222225] rounded-[2px]'>AR</div>
                <div className='text-[10px] font-["JetBrains_Mono"] px-2 py-1 text-[#1C2024] dark:text-[#EDEEF0] bg-[#E8E8EC] dark:bg-[#222225] rounded-[2px]'>INTERACTION</div>
                <div className='text-[10px] font-["JetBrains_Mono"] px-2 py-1 text-[#1C2024] dark:text-[#EDEEF0] bg-[#E8E8EC] dark:bg-[#222225] rounded-[2px]'>3D MODELING</div>
              </div>
            </div>
          </div>

          <div className="work-div basis-2/3 w-full h-full p-1">
            {/* EACH WORK CONTENT PIC WITH ANIMAITON */}
            <CardContainer className="h-full w-full">
              <CardBody className="relative h-full w-full">
                <CardItem
                  translateZ={0}
                  className="w-full h-full overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-[1.05]"
                >
                  <div className='w-full h-full border-[#D3D4D7] dark:border-[#35363A] rounded-[3px] border z-50 '>
                    <div className="relative w-full h-full transform origin-center rounded-tl-[0.495708%] rounded-tr-[0.495708%]">
                      <div className="absolute inset-0 rounded-tl-[0.495708%] rounded-tr-[0.495708%] transform transition-transform duration-300 ease-in-out scale-[0.85] translate-y-[7.5%] hover:scale-[1] hover:translate-y-0">
                        <Image
                          sizes="calc(min(960px, 100vw) * 0.85)"
                          src={img}
                          
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
        <div className='relative left-box h-full flex-1 border-l border-solid border-[#E8E8EC] dark:border-[#222225]'></div>
      </div>
    </div>
  )
}

export default WorkList
