import React from 'react'

const ThirdComponent = () => {
  return (
    <div className='text-center bg-[#092640] p-16 my-10 '>
      <h1 className='text-white font-bold text-3xl'>Easy access for easy bookings</h1>
      <p className='text-white my-6'>Share your Calendly link right from your browser, so you can schedule meetings <br /> without the back-and-forth</p>
      <div>
      <button className='mt-5 self-center px-8 py-3 mr-6 font-semibold rounded-full dark:bg-[#006BFE] dark:text-gray-50'>Start for free</button>
      <button className='mt-5 self-center px-8 py-3 font-semibold rounded-full border-2 dark:text-gray-50 hover:bg-[#006BFE] hover:border-0'>Talk with Sales</button>
      </div>
    </div>
  )
}

export default ThirdComponent
