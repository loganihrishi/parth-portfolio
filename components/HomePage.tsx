// import React from 'react'
// import pic from "../assets/Container.svg"

// const HomePage = () => {
//   const renderTimeline = () => {
//     const startTop = 30;
//     const step = 47;
//     const labels = [50, 100, 150, 200, 300, 400, 500, 600, 650, 700, 750, 800, 850, 900];

//     const timeline = [];

//     for (let i = 0; i < labels.length; i++) {
//       const topValue = startTop + step * i;
//       const label = labels[i];

//       timeline.push(
//         <div key={`line-${i}`} className='absolute h-[1px] w-[6px] bg-[#E8E8EC] dark:bg-[#222225]' style={{ top: `${topValue}px`, left: '161px' }}></div>,
//         <p key={`label-${i}`} className='absolute text-[8px] -rotate-90 text-[#C8C9CD] dark:text-[#3E4044]' style={{ top: `${topValue - 5}px`, left: `${i == 0 ? 147 : 145}px` }}>{label}</p>
//       );
//     }

//     return timeline;
//   };

//   return (
//     <section>
//       {/* lines */}
//       <div className='absolute w-full border-t border-solid border-[#E8E8EC] dark:border-[#222225] top-[60px]'></div>
//       <div className='absolute h-[706px] border-l border-solid border-[#E8E8EC] dark:border-[#222225] left-[170px]'></div>
//       <div className='absolute h-[646px] top-[60px] border-l border-dashed border-[#E8E8EC] dark:border-[#222225] left-[530px]'></div>
//       <div className='absolute h-[646px] top-[60px] border-l border-dashed border-[#E8E8EC] dark:border-[#222225] left-[890px]'></div>
//       <div className='absolute h-[706px] border-l border-solid border-[#E8E8EC] dark:border-[#222225] left-[1250px]'></div>
//       <div className='absolute w-full border-t border-solid border-[#E8E8EC] dark:border-[#222225] top-[662px]'></div>
//       <div className='absolute w-full border-t border-solid border-[#E8E8EC] dark:border-[#222225] top-[706px]'></div>

//       {/* dots */}
//       <div className='absolute h-[5px] w-[5px] rounded-full bg-[#81838D] dark:bg-[#777B84] top-[58px] left-[168px] ring-white dark:ring-[#111113] ring-2'></div> 
//       <div className='absolute h-[5px] w-[5px] rounded-full bg-[#81838D] dark:bg-[#777B84] top-[660px] left-[168px] ring-white dark:ring-[#111113] ring-2'></div> 
//       <div className='absolute h-[5px] w-[5px] rounded-full bg-[#81838D] dark:bg-[#777B84] top-[704px] left-[168px] ring-white dark:ring-[#111113] ring-2'></div> 
//       <div className='absolute h-[5px] w-[5px] rounded-full bg-[#81838D] dark:bg-[#777B84] top-[58px] left-[1248px] ring-white dark:ring-[#111113] ring-2'></div> 
//       <div className='absolute h-[5px] w-[5px] rounded-full bg-[#81838D] dark:bg-[#777B84] top-[660px] left-[1248px] ring-white dark:ring-[#111113] ring-2'></div> 
//       <div className='absolute h-[5px] w-[5px] rounded-full bg-[#81838D] dark:bg-[#777B84] top-[704px] left-[1248px] ring-white dark:ring-[#111113] ring-2'></div> 

//       {renderTimeline()}

//       <div className={`absolute h-[104px] w-[104px] bg-white top-[200px] left-[660px] rounded-full border-[#222225]`}><img src={pic} alt="" /></div>
      
//     </section>
//   )
// }

// export default HomePage

import React from 'react'
import './home.css'

const HomePage = () => {
  const renderTimeline = () => {
    const startTop = 30;
    const step = 47;
    const labels = [50, 100, 150, 200, 300, 400, 500, 600, 650, 700, 750, 800, 850, 900];

    const timeline = [];

    for (let i = 0; i < labels.length; i++) {
      const topValue = startTop + step * i;
      const label = labels[i];

      timeline.push(
        <div key={`line-${i}`} className='absolute h-[1px] w-[6px] bg-[#E8E8EC] dark:bg-[#222225] min-[1200px]:right-[3px] right-[-7px]' style={{ top: `${topValue}px`}}></div>,
        <p key={`label-${i}`} className='absolute text-[8px] min-[1200px]:-rotate-90 rotate-90 text-[#C8C9CD] dark:text-[#3E4044] min-[1200px]:right-[12px] right-[-22px]' style={{ top: `${topValue - 5}px` }}>{label}</p>
      );
    }

    return timeline;
  };

  return (
    <section className='flex flex-col'>
      <div className='relative flex justify-between w-full h-[60px] border-b border-solid border-[#E8E8EC] dark:border-[#222225]'>
        <div className='relative h-[60px] flex-1 min-w-2 md:max-w-6 lg:max-w-[171px] border-r border-solid border-[#E8E8EC] dark:border-[#222225]'>
          {renderTimeline()}
          <div className='absolute h-[5px] w-[5px] rounded-full bg-[#81838D] dark:bg-[#777B84] bottom-[-2px] right-[-3px] ring-white dark:ring-[#111113] ring-2'></div>
        </div>
        <div className='hidden lg:flex h-[60px] flex-1 min-w-[810px] lg:min-w-[810px] xl:min-w-[1080px]'></div>
        <div className='relative h-[60px] flex-1 min-w-2 md:max-w-6 lg:max-w-[171px] border-l border-solid border-[#E8E8EC] dark:border-[#222225]'>
          <div className='absolute h-[5px] w-[5px] rounded-full bg-[#81838D] dark:bg-[#777B84] bottom-[-2px] left-[-3px] ring-white dark:ring-[#111113] ring-2'></div>
        </div>
      </div>
      <div></div>
    </section>
  )
}

export default HomePage
