import React from 'react'

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
        <div key={`line-${i}`} className='absolute h-[1px] w-[6px] bg-[#222225]' style={{ top: `${topValue}px`, left: '161px' }}></div>,
        <p key={`label-${i}`} className='absolute text-[8px] -rotate-90 text-[#3E4044]' style={{ top: `${topValue - 5}px`, left: `${i == 0 ? 147 : 145}px` }}>{label}</p>
      );
    }

    return timeline;
  };

  return (
    <section>
      {/* lines */}
      <div className='absolute w-full border-t border-solid border-[#222225] top-[60px]'></div>
      <div className='absolute h-[706px] border-l border-solid border-[#222225] left-[170px]'></div>
      <div className='absolute h-[646px] top-[60px] border-l border-dashed border-[#222225] left-[530px]'></div>
      <div className='absolute h-[646px] top-[60px] border-l border-dashed border-[#222225] left-[890px]'></div>
      <div className='absolute h-[706px] border-l border-solid border-[#222225] left-[1250px]'></div>
      <div className='absolute w-full border-t border-solid border-[#222225] top-[662px]'></div>
      <div className='absolute w-full border-t border-solid border-[#222225] top-[706px]'></div>

      {/* dots */}
      <div className='absolute h-[5px] w-[5px] rounded-full bg-[#777B84] top-[58px] left-[168px] ring-[#111113] ring-2'></div> 
      <div className='absolute h-[5px] w-[5px] rounded-full bg-[#777B84] top-[660px] left-[168px] ring-[#111113] ring-2'></div> 
      <div className='absolute h-[5px] w-[5px] rounded-full bg-[#777B84] top-[704px] left-[168px] ring-[#111113] ring-2'></div> 
      <div className='absolute h-[5px] w-[5px] rounded-full bg-[#777B84] top-[58px] left-[1248px] ring-[#111113] ring-2'></div> 
      <div className='absolute h-[5px] w-[5px] rounded-full bg-[#777B84] top-[660px] left-[1248px] ring-[#111113] ring-2'></div> 
      <div className='absolute h-[5px] w-[5px] rounded-full bg-[#777B84] top-[704px] left-[1248px] ring-[#111113] ring-2'></div> 

      {renderTimeline()}
    </section>
  )
}

export default HomePage