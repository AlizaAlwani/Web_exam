import React from 'react'

const Previous = () => {
  return (
    <div className='h-screen '>
    <div className='flex items-center justify-center gap-x-24 mt-10'>
      <div className='border border-black w-[220px] h-[100px] rounded-md items-center justify-center flex flex-col bg-blue-200'>
        <div className='text-lg font-mono'>Total Task</div>
        <div className='text-6xl font-semibold font-mono'>04</div>
      </div>
      <div className='border border-black w-[220px] h-[100px] rounded-md items-center justify-center flex flex-col bg-green-200'>
        <div className='text-lg font-mono'>Completed</div>
        <div className='text-6xl font-semibold font-mono'>02</div>
      </div>
      <div className='border border-black w-[220px] h-[100px] rounded-md items-center justify-center flex flex-col bg-orange-200'>
        <div className='text-lg font-mono'>Pending</div>
        <div className='text-6xl font-semibold font-mono'>02</div>
      </div>
    </div>

    <div>
        
    </div>
  </div>
  )
}

export default Previous