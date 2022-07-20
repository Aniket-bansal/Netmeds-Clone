import { Box, HStack, Img, Input, InputGroup, InputLeftAddon,Modal,
    ModalContent,
    ModalBody,
    Button,
    useDisclosure,
    Heading,
    Text, } from '@chakra-ui/react'

import React from 'react'
import {FaSearchLocation} from 'react-icons/fa';


const NavContainer={
//    border:"1px solid red",
   width:"100%",
   height:"100px",
   backgroundColor:"#32AEB1",
   position:"fixed",
   color:"#fff",
   zIndex:"20"
}
const modal={
    marginLeft:"-125px",
    
}
const textStyle={
    display:"flex",
    color:"#EE4280",
    marginTop:"12px",
    gap:"10px"
}
function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <Box style={NavContainer}>
    <HStack width="60%" margin="auto" gap="60px" mt="20px">
    <Img src="https://www.netmeds.com/assets/gloryweb/images/home-logo-netmeds-new.svg" />
    <InputGroup>
    <InputLeftAddon width="170px" height="50px" cursor="pointer" fontWeight="700" backgroundColor="#fff" color="black" children="Deliver to 110094" onClick={onOpen}/>
    <Modal  isOpen={isOpen} onClose={onClose}>
        <ModalContent style={modal}>
          <ModalBody>
            <Heading fontSize="18px">Enter Pincode</Heading>
            <Text fontSize="12px">Select pincode to see product availability.</Text>
            <Input type="text" placeholder="Enter Pincode" />
            <Text style={textStyle}><FaSearchLocation style={{width:"20px",height:"20px" ,fontWeight:"100"}}/>Detect my location</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    <Input backgroundColor="#fff" height="50px" type="text" placeholder="Search for medicine & wellness products..." color="lightgrey" />
    </InputGroup>
    <Button variant="link" color="#fff"><i class="fa-solid fa-scroll">&nbsp;</i>Upload</Button>
    <Button variant="link" color="#fff"><i class="fa-solid fa-cart-shopping">&nbsp;</i>Cart</Button>
    <Button variant="link" color="#fff"><i class="fa-solid fa-user"></i>&nbsp; Sign in/Sign up</Button>
    </HStack>
    </Box>
    </>
  )
}

export default Navbar