import { Box, Flex, Heading, Img, SimpleGrid, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

const mainContainer={
    // border:"1px solid red",
    margin:"auto",
    marginTop:"90px",
    width:"80%",
    height:"370px",
    display:"flex",
    flexDirection:"column",
    
}
const categories={
    // border:"1px solid red",
    height:"100%",
    backgroundColor:"#fff",
    cursor:"pointer",
    borderRadius:"5px"
}
function ShopbyCategory() {
  return (
    <Box style={mainContainer}>
     <Flex>
     <Heading fontSize="24px" float="left" paddingLeft="10px" textAlign="left" mb="22px">Shop by Category</Heading>
     <Spacer/>
     <Text mt="15px" cursor="pointer" color="tomato">View All<i class="fa-solid fa-chevron-right fa-xs"></i></Text>
     </Flex>
     <SimpleGrid columns={5} height="100%" gap="30px">
       <Box style={categories}>
        <Img width="80%" ml="25px" src="https://www.netmeds.com/images/category/481/thumb/ayush_1.jpg" />
        <Text fontWeight="650">Ayush</Text>
       </Box>
       <Box style={categories}>
       <Img width="80%" ml="25px" src="https://www.netmeds.com/images/category/v1/3085/thumb/mom_baby_1.jpg" />
        <Text fontWeight="650">Mom & Baby</Text>
       </Box>
       <Box style={categories}>
        <Img width="80%" ml="25px" src="https://www.netmeds.com/images/category/665/thumb/devices_1.jpg" />
        <Text fontWeight="650">Devices</Text>
        </Box>
       <Box style={categories}>
       <Img width="80%" ml="25px" src="https://www.netmeds.com/images/category/500/thumb/fitness_1.jpg" />
        <Text fontWeight="650">Fitness</Text>
       </Box>
       <Box style={categories}>
       <Img width="80%" ml="25px" src="https://www.netmeds.com/images/category/v1/3251/thumb/sexual_wellness_2.jpg" />
        <Text fontWeight="650">Sexual Wellness</Text>
       </Box>
     </SimpleGrid>
    </Box>
  )
}

export default ShopbyCategory