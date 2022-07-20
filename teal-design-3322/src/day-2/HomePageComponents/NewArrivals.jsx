import { Box, Heading, Img } from '@chakra-ui/react'
import React from 'react'
import { Navigation,Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const main={
    // border: '1px solid red',
    width:"80%",
    margin:"auto",
    marginTop:"78px",
    height:"250px"

}
const slider={
    // border:"1px solid red",
    width:"95%",
    margin:"auto",
    marginTop:"-80px"
}
function NewArrivals() {
  return (
    <Box style={main}>
        <Box height="60%" backgroundColor="#fff">
            <Heading paddingLeft="9px" fontSize="24px" textAlign="left" >New Arrivals</Heading>
        </Box>
        <Box style={slider}>
        <Swiper
      
      modules={[Navigation,Autoplay]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      autoplay={{delay:"5000"}}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><Img borderRadius="7px" src={"https://www.netmeds.com/images/cms/aw_rbslider/slides/1657725756_Aashman-Ayurveda_web.jpg"} alt="Not Found!" /></SwiperSlide>
      <SwiperSlide><Img borderRadius="7px" src={"https://www.netmeds.com/images/cms/aw_rbslider/slides/1657726076_Zolv_web.jpg"} alt="Not Found!" /></SwiperSlide>
      <SwiperSlide><Img borderRadius="7px" src={"https://www.netmeds.com/images/cms/aw_rbslider/slides/1657726382_R-for-rabbit_web.jpg"} alt="Not Found!" /></SwiperSlide>
      <SwiperSlide><Img borderRadius="7px" src={"https://www.netmeds.com/images/cms/aw_rbslider/slides/1657726771_Dr.-Amgenic_web.jpg"} alt="Not Found!" /></SwiperSlide>
    
    </Swiper>
   </Box>
 </Box>
  )
}

export default NewArrivals