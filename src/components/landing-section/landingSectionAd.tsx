import Link from 'next/link'
import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import WhiteBtn from '../btns/whiteBtn'

const LandingSectionAd = () => {
  return (
    <div className='relative w-full lg:w-1/2 p-10'>
      <div className="img absolute left-0 top-0 h-full w-full">
        <img className='object-cover w-full h-full' src="https://themes.muffingroup.com/be/babyshop2/wp-content/uploads/2023/11/babyshop2-wrap-bg1.webp#122" alt="" />
      </div>
      <div className='bg-[#97D5EE] flex flex-col gap-4 p-10 max-w-[270px] relative'>
        <h2 className='text-4xl'>Summer Madness</h2>
        <p>Promotion on clothes from previous collections that are sold at reduced prices</p>
        <WhiteBtn>Promotions</WhiteBtn>
      </div>
    </div>
  )
}

export default LandingSectionAd