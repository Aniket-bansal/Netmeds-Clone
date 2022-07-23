import { Box, Heading, Img } from '@chakra-ui/react'
import React from 'react'

const container={
    width:"50%",
    borderRadius:"12px",
    margin:"auto",
    height:"auto",
    backgroundColor:"#fff",
    marginBottom:"50px"
}
function Placed() {
  return (
    <Box style={container}>
      <Img ml="260px" src="https://media2.giphy.com/media/f7kkcJ4L9t15HBmuMZ/giphy.gif?cid=ecf05e47q77b3xndmr2ngiwn0f1q0d4gwywzy96huep21avx&rid=giphy.gif&ct=g" />
      <br />
      <br />
      <Heading color="green"> Your Order Will Reach You Soon</Heading>&nbsp;
      <Heading pb="100px" color="green">Thank You For Your Order</Heading>

    </Box>
  )
}

export default Placed