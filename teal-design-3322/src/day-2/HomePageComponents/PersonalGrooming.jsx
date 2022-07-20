import { Box, Flex, Heading, Img, SimpleGrid, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

const mainContainer={
    width:"80%",
    margin:"auto",
    marginTop:"200px",
    height:"750px"
}
const product={
   height:"300px",
   backgroundColor:"#fff",
   borderRadius:"7px"
}
function PersonalGrooming() {
  return (
    <Box style={mainContainer}>
        <Box h="350px" mb="30px">
        <Flex><Heading fontSize="22px">Personal Care</Heading><Spacer /><Text color="#EE4280" fontWeight="600">View All </Text></Flex>
        <Box  mt="20px" h="87%">
         <SimpleGrid columns={5} gap="20px">
            <Box style={product}>
                <Img ml="43px" src="https://www.netmeds.com/images/category/v1/525/thumb/body_care_2.jpg" />
                <Heading fontSize="22px">Body Care</Heading>
            </Box>
            <Box style={product}>
            <Img ml="43px" w="200px" src="https://www.netmeds.com/images/category/v1/3085/thumb/mom_baby_1.jpg" />
                <Heading fontSize="22px">Mom & Baby</Heading>
            </Box>
            <Box style={product}>
            <Img ml="43px" src="https://www.netmeds.com/images/category/3934/thumb/skin_treatment_1.jpg" />
                <Heading fontSize="22px">Skin Treatment</Heading>
            </Box>
            <Box style={product}>
            <Img ml="43px" src="https://www.netmeds.com/images/category/3495/thumb/face_wash_cleansers_3.jpg" />
                <Heading fontSize="22px">face Wash & Cleansers</Heading>
            </Box>
            <Box style={product}>
            <Img ml="43px" src="https://www.netmeds.com/images/category/v1/3566/thumb/shower_gels_body_wash_2.jpg" />
                <Heading fontSize="22px">Shower Gels & Body Wash</Heading>
            </Box>
         </SimpleGrid>
        </Box>
        </Box>

        <Box mb="100px" h="300px">
        <Flex><Heading fontSize="22px">Men's Grooming</Heading><Spacer /><Text color="#EE4280" fontWeight="600">View All </Text></Flex>
        <Box  mt="20px" h="87%">
         <SimpleGrid columns={5} gap="20px">
            <Box style={product}>
                <Img ml="43px" src="https://www.netmeds.com/images/category/v1/3420/thumb/shaving.jpg?v=1" />
                <Heading fontSize="22px">Shaving</Heading>
                <Text color="#5BA41C">UPTO 31% OFF</Text>
            </Box>
            <Box style={product}>
            <Img ml="43px" w="200px" src="https://www.netmeds.com/images/category/v1/3002/thumb/razors_cartridges_2.jpg?v=1" />
                <Heading fontSize="22px">Razors & Cartridges</Heading>
                <Text color="#5BA41C">UPTO 46% OFF</Text>

            </Box>
            <Box style={product}>
            <Img ml="43px" src="https://www.netmeds.com/images/category/v1/3591/thumb/beard_oil_2.jpg?v=1" />
                <Heading fontSize="22px">Beard Oil</Heading>
                <Text color="#5BA41C">UPTO 25% OFF</Text>

            </Box>
            <Box style={product}>
            <Img ml="43px" src="https://www.netmeds.com/images/category/v1/3593/thumb/beard_wash_2.jpg?v=1" />
                <Heading fontSize="22px">Beard Wash</Heading>
                <Text color="#5BA41C">UPTO 20% OFF</Text>

            </Box>
            <Box style={product}>
            <Img ml="43px" src="https://www.netmeds.com/images/category/v1/3704/thumb/hair_gels_waxes_2.jpg?v=1" />
                <Heading fontSize="22px">Hair Gels & Waxes</Heading>
                <Text color="#5BA41C">UPTO 23% OFF</Text>

            </Box>
         </SimpleGrid>
        </Box>
        </Box>

    </Box>
  )
}

export default PersonalGrooming