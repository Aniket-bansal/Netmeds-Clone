import { Box, Heading, Img } from '@chakra-ui/react'
import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const container={
    border:"1px solid red",
    height:"auto",
    width:"80%",
    margin:"auto",
    marginBottom:"40px"
}
const slider={
    height:"270px"
}
const itemBox={
    width:"100%",
    height:"200px",
    borderRadius:"7px"
}
function HealthLibrary() {
  return (
    <Box style={container}>
        <Box style={slider}>
            <Box  h="150px" backgroundColor="#EE4280">
                <Heading textAlign="left" pl="10px" color="#fff" fontSize="22px">Healthy Library</Heading>
            </Box>
            <Box  w="90%" margin="auto" mt="-70px" h="230px">
            <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={4}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            >
            <SwiperSlide>
                <Box style={itemBox}>
                 <Img  src="https://www.netmeds.com/images/cms/magefan_blog/nmslite/1658233510_Ayurvedic-Indications_480x180.jpg" />
                 <Heading mt="12px" textAlign="left" fontSize="17px">Prabhakar Vati: Uses, Health Benefits, Ayurvedic </Heading>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box style={itemBox}>
                <Img  src="https://www.netmeds.com/images/cms/magefan_blog/nmslite/1658233877_Polyhydroxy-acids_480x180.jpg" />
                 <Heading mt="12px" textAlign="left" fontSize="17px">What are Polyhydroxy(PHAs)</Heading>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box style={itemBox}>
                <Img  src="https://www.netmeds.com/images/cms/magefan_blog/nmslite/1658234026_Radionuclide-Scintigraphy_480x180.jpg" />
                 <Heading mt="12px" textAlign="left" fontSize="17px">Radionuclide Scintigraphy</Heading>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box style={itemBox}>
                <Img  src="https://www.netmeds.com/images/cms/magefan_blog/nmslite/1658137111_Nordic-Diet_480x180.jpg" />
                 <Heading mt="12px" textAlign="left" fontSize="17px">What is Nordic Diets?</Heading>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box style={itemBox}>
                <Img  src="https://www.netmeds.com/images/cms/magefan_blog/nmslite/1658139045_Red-Sandalwood_480x180.jpg" />
                 <Heading mt="12px" textAlign="left" fontSize="17px">Red Sandlwood : Uses, Health Benefits</Heading>
                </Box>
            </SwiperSlide>
      
            </Swiper>

            </Box>
        </Box>
        <Box border="1px solid red" w="90%" margin="auto" h="1000px">

        </Box>
    </Box>
  )
}

export default HealthLibrary