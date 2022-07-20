import { Box, Img } from '@chakra-ui/react';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation,Autoplay } from 'swiper';
import ad1 from '../Carouselimages/AdCarousel/ad1.jpg'
import ad2 from '../Carouselimages/AdCarousel/ad2.jpg'
import ad3 from '../Carouselimages/AdCarousel/ad3.jpg'
import ad4 from '../Carouselimages/AdCarousel/ad4.jpg'


const bannerSetting={
    height:"100%",
    width:"100%",
}
function AdCarousel() {
  return (
    <Box width="70%" height="270px" margin="auto">
        <Swiper
      spaceBetween={50}
      modules={[Navigation, Autoplay]}
      slidesPerView={1}
      navigation
      autoplay={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      style={{height:"100%",width:"100%"}}
        >
      <SwiperSlide><Img style={bannerSetting} src={ad1} /></SwiperSlide>
      <SwiperSlide><Img style={bannerSetting} src={ad2} /></SwiperSlide>
      <SwiperSlide><Img style={bannerSetting} src={ad3} /></SwiperSlide>
      <SwiperSlide><Img style={bannerSetting} src={ad4} /></SwiperSlide>
      
        </Swiper>
    </Box>
  );
}

export default AdCarousel