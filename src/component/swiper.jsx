import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper/modules'
import 'swiper/css';

const Swipers = ()=>{

  return (
    <div className=''>
     <div className='max-sm:h-52 md:h-[500px] overflow-hidden'>

            <Swiper
                modules= {[Autoplay]}
                loop={true}
                autoplay={{
                    enabled: true,
                    
                }}
                slidesPerView={1}
                
            >

                <SwiperSlide><img src="./../../public/images/cover-1.jpg" /></SwiperSlide>
                <SwiperSlide><img src="./../../public/images/cover-2.jpg" /></SwiperSlide>
                <SwiperSlide><img src="./../../public/images/cover-3.jpg" /></SwiperSlide>
                <SwiperSlide><img src="./../../public/images/cover-4.jpg" /></SwiperSlide>

            </Swiper>

          
        </div>
    
    </div>
  )
}
export default Swipers;