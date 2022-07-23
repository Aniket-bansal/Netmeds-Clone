import { Box, Button, Flex, Heading, Img, Input, Select, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import customer from '../CustomerReview.json'
import testtube from './testtube.png'
import certification from './certified.png'
import location from './location.png'
import discount from './discount.png'
const container={
    width:"80%",
    margin:"auto",
    height:"auto"
}
const test = {
    width:"100%",
    height:"160px",
    fontSize:"24px",
    fontWeight:"500",
    paddingTop:"50px",
    borderRadius:"12px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    backgroundColor:"#FFFF"
}
const highlight = {
    width:"440px",
    paddingLeft:"10px",
    paddingTop:"5px",
    height:'70px',
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
}
function LabTest() {
  return (
    <Box style={container}>
       <Flex backgroundColor="#E1F8FE" gap="10px">
        <Box w="100%" h="400px">
            <Img w="100%" h="100%" src="https://www.netmeds.com/images/cms/wysiwyg/cms/1656767883_Mobile_Home.jpg" />
        </Box>
        <Box backgroundColor="#fff" borderRadius="12px" w="70%" h="auto" textAlign="left" padding="10px">
            <Text color="grey" fontWeight="500">Please fill in your details</Text>
            <Text color="#03B6C2" fontWeight="500">NAME</Text>
            <Input variant="flushed" type="text"/><br/>
            <Text color="#03B6C2" fontWeight="500">MOBILE NUMBER</Text>
            <Input variant="flushed" type="text"/><br/>
            <Text color="#03B6C2" fontWeight="500">PINCODE</Text>
            <Input variant="flushed" type="text"/><br/>
            <Text color="#03B6C2" fontWeight="500">CHOOSE PACKAGE</Text>
            <Select placeholder="Select">
              <option>Netmeds Swasthya</option>
              <option>Fever Profile</option>
              <option>Anemia Profile</option>
              <option>Thyroid Tests</option>
              <option>Basic Allergy Package</option>
              <option>Netmeds Healthy Heart</option>
              <option>Netmeds Diabetic Checkup</option>
              <option>Vitamin Tests</option>
              <option>Covid Antibody GT Profile</option>
              <option>Covid Antibody Total</option>
            </Select>
            <Text mt="20px" fontWeight="500">
            <input type='checkbox' />&nbsp;
            I agree to Netmeds Terms and Conditions.
            </Text>
            <Button mt="10px" width="100%" backgroundColor="#32AEB1" color="#fff">BOOK NOW</Button>
        </Box>
       </Flex>
       {/* Popular tests */}
       <Box pl="10px" mt="40px" h="auto">
           <Heading textAlign="left">Popular Tests</Heading>
           <Text textAlign="left" mt="12px">and many more tests and packages <strong>@ THE BEST PRICES</strong></Text>
           <Box w="90%" h="auto" mt="30px" margin="auto">
                <SimpleGrid columns={5} mt="30px" gap={"20px"}>
                    <Box style={test}>Complete Hemogram</Box>
                    <Box style={test}>Liver Profile</Box>
                    <Box style={test}>Diabetes</Box>
                    <Box style={test}>Lipid Profile</Box>
                    <Box style={test}>Thyroid Profile</Box>
                    <Box style={test}>Iron Deficiency</Box>
                    <Box style={test}>Vitamin</Box>
                    <Box style={test}>Testosterone</Box>
                    <Box style={test}>Kidney Function Test</Box>
                </SimpleGrid>
           </Box>
       </Box>
       {/* Customer Speak */}
       <Box pl="10px" pt="8px" mt="40px" h="350px" mb="50px">
             <Heading fontWeight="500"  fontSize="24px" textAlign="left">Customer Speak</Heading>
             <Text textAlign="left" color="grey">Customers Speak Customer satisfaction is our prime focus. We would like to hear your comments about our service.</Text>
             <SimpleGrid columns={3} w="80%" margin="auto" mt="30px">
                {
                 customer.map((item)=>
                    <Box border="1px dotted #32AEB1" borderRadius="12px" backgroundColor="#fff"
                   boxShadow= "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" textAlign="left" pl='10px' w="350px" h="230px" key={Math.random()} >
                     <Text fontSize="22px" fontWeight='500'>{item.name}</Text>
                     <Text color="#32AEB1" borderBottom="1px dotted #32AEB1">{item.city}</Text>
                     <Text mt="10px" color="grey">{item.Description}</Text>
                    </Box>
                 )
                }
             </SimpleGrid>
       </Box>
      {/* Highlights */}
      <Box pl="10px" h="300px">
         <Heading textAlign="left">Our Highlights</Heading>
         <Flex gap="20px" margin="auto" mt="20px" w="90%">
            <Box style={highlight}>
                <Flex>
                <Img w="50px" src={testtube} />
                <Text mt="10px" pl="3px" fontWeight="500" fontSize="20px">Home Sample Collection</Text>
                </Flex>
            </Box>
            <Box style={highlight}>
            <Flex>
            <Img w="50px" src={location} />
            <Text mt="10px" pl="3px" fontWeight="500" fontSize="20px">2000+ Location Served</Text>
            </Flex>

            </Box>
            <Box style={highlight}>
            <Flex>
            <Img w="50px" src={certification} />
               <Text mt="10px" pl="3px" fontWeight="500" fontSize="20px">NABL, CAP ISO Certified</Text>
            </Flex>
            </Box>
            <Box style={highlight}>
            <Flex>
            <Img w="50px" src={discount} />
            <Text mt="10px" pl="3px" fontWeight="500" fontSize="20px">Upto 80% Discount</Text>
            </Flex>
            </Box>
            
         </Flex>
      </Box>
    </Box>
  )
}

export default LabTest