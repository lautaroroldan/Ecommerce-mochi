import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react'
import './Carousel.css'
import "swiper/css"

type carrouselItem ={
    image:string,
    description:string
  }

function Carousel({imgs}:{imgs:carrouselItem[]}) {
  return (
    <Swiper
    spaceBetween={20}
    slidesPerView={4} loop grabCursor loopPreventsSliding>
        {
        imgs.map((element:any,index:any)=>(
            <SwiperSlide key={index}>
                <img className='imgCarousel' src={element.image} alt={element.description}/>
            </SwiperSlide>
        ))}
    </Swiper>	
  )
}

export default Carousel