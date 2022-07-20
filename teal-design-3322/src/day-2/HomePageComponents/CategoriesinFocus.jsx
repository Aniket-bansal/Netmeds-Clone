import { Box, Heading, Img, Text } from '@chakra-ui/react'
import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const container={
    width:"80%",
    margin:"auto",
    marginTop:"40px",
    height:"230px"
}
function CategoriesinFocus() {
  return (
    <Box style={container}>
      <Box display="flex" justifyContent="space-between">
      <Heading  textAlign="left" fontSize="24px">Categories in focus</Heading>
      <Text fontWeight="600" mt="13px" color="#EE4280">View All</Text>
      </Box>
      <Box mt="30px" w="100%" h="280px">
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={5}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      
    >
      <SwiperSlide>
        <Box  backgroundColor="#fff" h="300px" borderRadius="7px" w="280px">
            <Img ml="36px" src="https://www.netmeds.com/images/category/3087/thumb/feminine_hygiene_1.jpg" />
            <Heading fontSize="22px">Feminine Hygiene</Heading>
            <br/>
            <Text color="#5BA41C">UPTO 50% OFF</Text>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box  backgroundColor="#fff" h="300px" borderRadius="7px" w="280px">
            <Img ml="36px" src="https://www.netmeds.com/images/category/v1/525/thumb/body_care_2.jpg" />
            <Heading fontSize="22px">Body Care</Heading>
            <br/>
            <Text color="#5BA41C">UPTO 60% OFF</Text>
        </Box>
      </SwiperSlide><SwiperSlide>
        <Box  backgroundColor="#fff" h="300px" borderRadius="7px" w="280px">
            <Img ml="36px" src="https://www.netmeds.com/images/category/482/thumb/ayurvedic_1.jpg" />
            <Heading fontSize="22px">Ayurvedic</Heading>
            <br/>
            <Text color="#5BA41C">UPTO 76% OFF</Text>
        </Box>
      </SwiperSlide><SwiperSlide>
        <Box  backgroundColor="#fff" h="300px" borderRadius="7px" w="280px">
            <Img ml="36px" src="https://www.netmeds.com/images/category/676/thumb/orthopaedics_1.jpg" />
            <Heading fontSize="22px">Orthopedics</Heading>
            <br/>
            <Text color="#5BA41C">UPTO 82% OFF</Text>
        </Box>
      </SwiperSlide><SwiperSlide>
        <Box  backgroundColor="#fff" h="300px" borderRadius="7px" w="280px">
            <Img ml="36px" src="https://www.netmeds.com/images/category/3216/thumb/sports_supplements_1.jpg" />
            <Heading fontSize="22px">Sports Supplements</Heading>
            <br/>
            <Text color="#5BA41C">UPTO 60% OFF</Text>
        </Box>
      </SwiperSlide><SwiperSlide>
        <Box  backgroundColor="#fff" h="300px" borderRadius="7px" w="280px">
            <Img ml="36px" src="https://www.netmeds.com/images/category/3061/thumb/immunity_booster_1.jpg" />
            <Heading fontSize="22px">Immunity Booster</Heading>
            <br/>
            <Text color="#5BA41C">UPTO 82% OFF</Text>
        </Box>
      </SwiperSlide>
    </Swiper>
      </Box>
    </Box>
  )
}

export default CategoriesinFocus