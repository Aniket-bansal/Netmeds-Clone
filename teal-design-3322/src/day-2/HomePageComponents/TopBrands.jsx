import { Box, Heading, Img, Text } from '@chakra-ui/react'
import React from 'react'
import brands from '../../TopBrands.json'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const container={
    width:"80%",
    height:"300px",
    margin:"auto",
    marginTop:"100px"
}
function TopBrands() {
  return (
    <Box style={container}>
       <Heading width="30%" textAlign="left" fontSize="24px" paddingLeft="10px" mb="40px">Top Brands</Heading>
       <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={5}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
     
     {
        brands.brands.map((brands)=>
          <SwiperSlide>
            <Box backgroundColor="#fff" borderRadius="7px" height="280px">
             <Img ml="30px" src={brands.src}/>
             <Heading fontSize="18px">{brands.name}</Heading>
             <Text mt="20px" color="#5BA41C">{brands.offer}</Text>
            </Box>
          </SwiperSlide>
        )
     }
    
    </Swiper>
    </Box>
  )
}

export default TopBrands