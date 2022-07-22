import { Box, Button, Flex, Heading, Img, Text } from '@chakra-ui/react'
import React from 'react'
import { Autoplay,Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import well from '../WellnessCarousel.json'
import product from '../Products.json'
// Styles
const container={
    width:"80%",
    margin:"auto",
    height:"auto"
}
const categories={
    boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",
     width:"100%",
     borderRadius:"3px",
      height:"324px",
      backgroundColor:"#fff"
}

const productContainer={
     width:"100%",
     height:"380px",
     marginTop:"18px",
     textAlign:"left",
     padding:"5px",
     borderRadius:"12px",
     marginBottom:"12px",
     boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
}
const nebulizerConatiner={
    width:"100%",
    height:"380px",
    marginTop:"18px",
    textAlign:"left",
    padding:"5px",
    borderRadius:"12px",
    marginBottom:"12px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
}
function Wellness() {
  return (
    <Box style={container}>
         <Swiper
      // install Swiper modules
      modules={[Navigation,Autoplay, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={true}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {
        well.wellness.map((item)=>
        <SwiperSlide><Img src={item.src} /></SwiperSlide>
        )
      }
    </Swiper>
    <Box mt="25px" h="auto">
     <Heading textAlign="left" fontSize="22px">Popular Categories</Heading>
     <Box mt="15px">
        <Flex gap="20px" h="330px">
           <Box style={categories}>
              <Img w="100%" h="70%" src="https://www.netmeds.com/images/category/3055/thumb/covid_essentials_1.jpg" />
              <Text fontWeight="500" mt="12px">Covid Essentials</Text>
           </Box>
           <Box style={categories}>
           <Img w="100%" h="70%" src="https://www.netmeds.com/images/category/v1/3251/thumb/sexual_wellness_2.jpg" />
              <Text fontWeight="500" mt="12px">Sexual Wellness</Text>
           </Box>
           <Box style={categories}>
           <Img w="100%" h="70%" src="https://www.netmeds.com/images/category/3222/thumb/vitamins_and_supplements_1.jpg" />
              <Text fontWeight="500" mt="12px">Vitamins And Supplements</Text>
           </Box>
           <Box style={categories}>
           <Img w="100%" h="70%" src="https://www.netmeds.com/images/category/491/thumb/homeopathy_1.jpg" />
              <Text fontWeight="500" mt="12px">Homeopathy</Text>
           </Box>
           <Box style={categories}>
           <Img w="100%" h="70%" src="https://www.netmeds.com/images/category/482/thumb/ayurvedic_1.jpg" />
              <Text fontWeight="500" mt="12px">Ayurvedic</Text>
           </Box>
        </Flex>
     </Box>
        
    </Box>
    {/* Best in Men's care */}
    <Box mt="40px" h="auto" backgroundColor="#fff" borderRadius="12px">
    <Heading fontSize="22px" textAlign='left' pl="8px">Best in Men's Care</Heading>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={5}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
    {
        product.mensCare.map((men)=>
        <SwiperSlide>
            <Box style={productContainer}>
                <Img  width="70%" ml="45px" mt="8px" src={men.src} />
                <Text fontWeight="500" fontSize="14px" mt="4px">{men.title}</Text>
                <Text color="grey" fontSize="13px" mt="4px">{men.company}</Text>
                <Flex mt="4px">Best price* <Text color="red" fontWeight="500">{men.price}</Text></Flex>
                <Flex>MRP &nbsp;<Text textDecoration="line-through">{men.mrp}</Text></Flex>
                <Button backgroundColor="#32AEB1" color="#ffff" w="100%">ADD TO CART</Button>
            </Box>
        </SwiperSlide>
        )
    }
    </Swiper>
    </Box>
    {/* Nebulizers */}
    <Box mt="40px" h="auto" backgroundColor="#fff" borderRadius="12px">
    <Heading fontSize="22px" textAlign='left' pl="8px">Best in Nebulizers</Heading>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={5}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
    {
        product.nebulizers.map((men)=>
        <SwiperSlide>
            <Box style={nebulizerConatiner}>
                <Img  width="70%" ml="45px" mt="8px" src={men.src} />
                <Text fontWeight="500" fontSize="14px" mt="4px">{men.title}</Text>
                <Text color="grey" fontSize="13px" mt="4px">{men.company}</Text>
                <Flex mt="4px">Best price* <Text color="red" fontWeight="500">{men.price}</Text></Flex>
                <Flex>MRP &nbsp;<Text textDecoration="line-through">{men.mrp}</Text></Flex>
                <Button backgroundColor="#32AEB1" color="#ffff" w="100%">ADD TO CART</Button>
            </Box>
        </SwiperSlide>
        )
    }
    </Swiper>
    </Box>
    {/* Covid Essentials */}
    <Box mt="40px" h="auto" backgroundColor="#fff" borderRadius="12px">
    <Heading fontSize="22px" textAlign='left' pl="8px">Covid Essentials</Heading>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={5}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
    {
        product.covid.map((men)=>
        <SwiperSlide>
            <Box style={nebulizerConatiner}>
                <Img width="70%" ml="45px" mt="8px" src={men.src} />
                <Text fontWeight="500" fontSize="14px" mt="4px">{men.title}</Text>
                <Text color="grey" fontSize="13px" mt="4px">{men.company}</Text>
                <Flex mt="4px">Best price* <Text color="red" fontWeight="500">{men.price}</Text></Flex>
                <Flex>MRP &nbsp;<Text textDecoration="line-through">{men.mrp}</Text></Flex>
                <Button backgroundColor="#32AEB1" color="#ffff" w="100%">ADD TO CART</Button>
            </Box>
        </SwiperSlide>
        )
    }
    </Swiper>
    </Box>

    {/* Health Concerns */}
    <Box mt="20px" height="400px">
    <Heading textAlign="left" fontSize="22px">Health Concerns</Heading>
     
        <Flex gap="20px" mt='18px' h="330px">
           <Box style={categories}>
              <Img w="40%" h="40%" ml="90px" mt="60px" src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/lung-care.jpg?v=1" />
              <Text fontWeight="500" mt="12px">Lung Care</Text>
           </Box>
           <Box style={categories}>
           <Img w="40%" h="40%" ml="90px" mt="60px" src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/weight-care.jpg?v=1" />
              <Text fontWeight="500" mt="12px">Weight Care</Text>
           </Box>
           <Box style={categories}>
           <Img w="40%" h="40%" ml="90px" mt="60px" src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/women-s-care.jpg?v=1" />
              <Text fontWeight="500" mt="12px">Women's Care</Text>
           </Box>
           <Box style={categories}>
           <Img w="40%" h="40%" ml="90px" mt="60px" src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/bone-and-joint-pain.jpg?v=1" />
              <Text fontWeight="500" mt="12px">Bone And Joint Pain</Text>
           </Box>
           <Box style={categories}>
           <Img w="40%" h="40%" ml="90px" mt="60px" src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/cold-and-fever.jpg?v=1" />
              <Text fontWeight="500" mt="12px">Cold And Fever</Text>
           </Box>
        </Flex>
    </Box>
    </Box>
  )
}

export default Wellness