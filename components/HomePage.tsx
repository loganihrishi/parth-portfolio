import React from 'react'

const HomePage = () => {
  return (
    <section>
      {/* lines */}
      <div className='absolute w-full border-t border-solid border-[#222225] top-[60px]'></div>
      <div className='absolute h-[706px] border-l border-solid border-[#222225] left-[170px]'></div>
      <div className='absolute h-[706px] border-l border-dashed border-[#222225] left-[530px]'></div>
      <div className='absolute h-[706px] border-l border-dashed border-[#222225] left-[890px]'></div>
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
    </section>
  )
}

export default HomePage