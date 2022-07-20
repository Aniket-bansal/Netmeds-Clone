import { Box, Button, Heading, Img, SimpleGrid, Text } from '@chakra-ui/react';
import {NavLink} from 'react-router-dom'
import React from 'react'
import meds from '../Carouselimages/OfferImage/orderMedicine.svg'
import beauty from '../Carouselimages/OfferImage/Beautynew.svg'
import wellness from '../Carouselimages/OfferImage/wellness.svg'
import shopping from '../Carouselimages/OfferImage/shopping.svg'
import buyBeauty from '../Carouselimages/OfferImage/buyBeauty.svg'
const mainConatiner={
    height:'250px',
    marginTop:"30px",
}
const offerBox={
width:"100%",
height:"90px",
borderRadius:"5px",
display:"flex",
gap:"10px",
backgroundColor:"#fff",
boxShadow: "rgba(0, 0, 0, 0.17) 0px 3px 8px",
cursor:"pointer"
}
const textBox={
    width:"100%",
    paddingLeft:"10px",
    display:"flex",
    flexDirection:"column",
    textAlign:"left",
    marginTop:"15px"
}
function OffersTab() {
  return (
    <Box style={mainConatiner}>
     <SimpleGrid columns={3} width="80%" gap="100px" height="100px" margin="auto">
        <Box style={offerBox}>
            <Img ml="20px" width="52px" src={meds} />
            <Box style={textBox}>
             <Heading float="left" fontSize="22px">Order Medicine</Heading>            
             <Text color="green">Save Upto 25% off</Text>
             
            </Box>
        </Box>
        <Box style={offerBox}>
            <Img ml="20px" width="52px" src={beauty} />
             <Box style={textBox}>
             <Heading float="left" fontSize="22px">Beauty</Heading>
             <Text color="green">Save Upto 40% off</Text>
             
             </Box>
        </Box>
        <Box style={offerBox}>
            <Img ml="20px" width="52px" src={wellness} />
            <Box style={textBox}>
             <Heading float="left" fontSize="22px">Wellness</Heading>
             <Text color="green">Save Upto 15% off</Text>
            </Box>
        </Box>
     </SimpleGrid>
     <SimpleGrid columns={2} width="80%" margin="auto" mt="20px" height="220px">
    
           <Box  borderRight="1px solid #C4CBCF" width="100%">
             <SimpleGrid columns={2}  gap="50px">
                <Box height="220px" width="100%" textAlign="left" padding="30px">
                    <Heading>Previous Orders</Heading>
                    <br />
                    <Text>Your previously ordered products</Text>
                    <br />
                    <br />
                    <NavLink to="#" style={{color:"#24AEB1"}}>View Orders <i class="fa-solid fa-circle-chevron-right"></i></NavLink>
                </Box>
                <Box  height="220px" width="100%">
                    <Img float="right" width="150px" mt="30px" src={shopping}/>
                </Box>
             </SimpleGrid>
           </Box>
           <Box  width="100%">
           <SimpleGrid columns={2}  gap="50px">
                <Box height="220px" width="100%" textAlign="left" padding="30px">
                    <Heading>Beauty Products</Heading>
                    <br />
                    <Text color="#5BA41C" >Save upto 40% off</Text>
                    <br />
                    <br />
                    <Button mt="-14px" backgroundColor="#24AEB1" color="#fff">Explore Beauty</Button>
                </Box>
                <Box  height="220px" width="100%">
                    <Img float="right" width="210px" mt="30px" src={buyBeauty}/>
                </Box>
             </SimpleGrid>
           </Box>
        
     </SimpleGrid>
    </Box>
    )
}

export default OffersTab