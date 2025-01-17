import React from 'react'

const hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-pink-400'>
      <div className='w-full sm:1/2 flex items-center justify center py-10 sm:py-0'>
      <div className='text-[#414141]'>
        <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-[2px] bg-[pink]'></p>
            <p className=' font-medium text-sm md:text-base text-pink-500'>LOVE BLINE, LOVE YOU</p>
        </div>
        <h1 className='text-3xl sm:py-3 lg:text-5xl leading-relaxed'>GLOW UP YOUR GAME</h1>
        <div className='flex items-center gap-2'>
            <p className='font-semibold text-sm md:text-base text-pink-700'>SHOP NOW</p>
            <p className='w-8 md:w-11 h-[1px] bg-[pink]'></p>

        </div>
      </div>
      
      </div>
    </div>
  )
}

export default hero
