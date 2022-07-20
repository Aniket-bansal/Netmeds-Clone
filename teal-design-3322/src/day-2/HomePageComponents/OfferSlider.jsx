import React from 'react'
import images from '../../offerSlider.json'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Heading, Img } from '@chakra-ui/react';

function OfferSlider(){
    return (
<Box  margin="auto" mt="140px" width="79%" height="310px" >
    <Heading  width="20%" mb="22px">Trending Today</Heading>
<Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
    spaceBetween={50}
    slidesPerView={3}
    navigation
    autoplay={true}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    style={{height:"100%"}}
  >
   {
    images.images.map((image)=>
        <SwiperSlide  height="100%"><Img cursor="pointer" height="90%" borderRadius="5px" src={image.src} /></SwiperSlide>
    )
   }
    
  </Swiper>
</Box>

  )
}

export default OfferSlider