import Image from 'next/image'
import React from 'react'

const BrandImgSection = () => {
  return (
    <div className='w-full flex justify-center items-center'>
     <div className='shadow-md bg-gradient-to-b from-[#805AF5] to-white flex justify-center items-center rounded-lg p-10'>
        <img className='w-full h-full'  src='/images/brand/BrandImage.png' alt='brandImage' />
     </div>
    </div>
  )
}

export default BrandImgSection