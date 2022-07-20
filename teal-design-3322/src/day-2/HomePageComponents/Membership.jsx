import { Box, Button, Flex, Grid, Heading, Img, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'


const container={
    borderTop:"1px solid lightgrey",
    borderBottom:"1px solid lightgrey",
     height:"180px",
     width:"80%",
     margin:"auto",
     marginTop:"100px"
}
function Membership() {
  return (
    <Box style={container}>
      <Flex gap="20px">
        <Box width="10%" height="200px" >
            <Img src={"https://www.netmeds.com/assets/gloryweb/images/icons/new-icons/netmeds_first_membership.svg"} mt="60px" ml="25px"/>
        </Box>
        <Box textAlign="left" mt="40px" padding="5px" width="60%" height="200px" >
            <Heading fontSize="21px">Netmeds First Membership</Heading>
            <Box width="80%" ml="30px" mt="20px" h="100px">
                <li>Get special discounts and offers on Netmeds services.</li>
                <li>Get 2.5% NMS Cash on pre-paid, Medicine orders of ANY value!</li>
            </Box>
        </Box>
        <Box  width="60%" height="180px">
         <Box display="flex" gap="20px" justifyContent="flex-end"  mt="70px" h="50px">
         <Text color="#EE4280" mt="8px" fontSize="16px" fontWeight="500">⚡Starting at ₹299</Text><Button backgroundColor="#32AEB1" color="#fff">Explore Plans</Button>
         </Box>
        </Box>
      </Flex>
    </Box>
  )
}

export default Membership