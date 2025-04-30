import React from 'react'

function Card({src, heading, para}) {
  return (
    <div className='hover:shadow-[-2px_0_10px_black] flex flex-col justify-between items-center py-4 px-5 gap-y-4 bg-[#E6E4E4] rounded-xl hover:-translate-y-2 transition duration-300'>
      <img src={src} alt="" className='w-[8vw]'/>
      <h1 className='font-bold text-2xl'>{heading}</h1>
      <h3 className='text-center font-semibold'>"{para}"</h3>
      <button className='bg-red-600 text-white py-2 px-3 rounded-md font-bold '>Learn More</button>
    </div>
  )
}

export default Card
