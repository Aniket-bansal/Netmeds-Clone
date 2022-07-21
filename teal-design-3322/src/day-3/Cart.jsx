import { Box, Button, Heading, Img, Text } from '@chakra-ui/react'
import React from 'react'


const Container={
    height:"700px",
    width:"80%",
    margin:"auto",
    borderRadius:"15px",
    backgroundColor:"#ffffff"
}
function Cart() {
  return (
    <Box style={Container}>
      <Heading textAlign="left" pl="10px" pt="10px" fontSize="29px">My Cart</Heading>
      <Box w="90%" margin="auto" mt="30px" h="600px">
       <Img w="250px" ml="40%" src="https://www.netmeds.com/msassets/images/emptycart.svg" />
       <Text fontWeight={"500"}>Your Cart is empty!</Text>
       <Text fontSize="14px">You have no items added in the cart.<br/>
Explore and add products you like!</Text><br/>
          <Button backgroundColor="#24AEB1" color="#fff" w="200px">ADD PRODUCTS</Button>
      </Box>
    </Box>
  )
}

export default Cart