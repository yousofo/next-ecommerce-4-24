'use client'

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import WhiteBtn from '../btns/whiteBtn';


export default function SwiperBot() {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      loop={true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className='relative w-full h-full p-10 flex items-center'>
          <div className="img absolute left-0 top-0 h-full w-full">
            <img className='w-full h-full object-cover' src="/images/wide-img.webp" alt="" />
          </div>
          <div className=' flex flex-col gap-4 p-10 max-w-[650px] relative'>
            <h2 className='text-4xl lg:text-5xl font-bold'>Summer Madness</h2>
            <p>Promotion on clothes from previous collections that are sold at reduced prices</p>
            <WhiteBtn>Promotions</WhiteBtn>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative w-full h-full p-10 flex items-center'>
          <div className="img absolute left-0 top-0 h-full w-full">
            <img className='w-full h-full object-cover' src="/images/wide-img.webp" alt="" />
          </div>
          <div className=' flex flex-col gap-4 p-10 max-w-[650px] relative'>
            <h2 className='text-4xl lg:text-5xl font-bold'>Summer Madness</h2>
            <p>Promotion on clothes from previous collections that are sold at reduced prices</p>
            <WhiteBtn>Promotions</WhiteBtn>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}