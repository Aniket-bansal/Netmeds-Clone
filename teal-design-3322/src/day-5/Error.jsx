import { Box, Heading, Img } from '@chakra-ui/react'
import React from 'react'

function Error() {
  return (
    <Box w="80%" margin="auto" mb="100px" mt='100px'>
        <Img ml='400px' w='800px' src="https://media1.giphy.com/media/5QJd1IC6yBLumMhmtu/giphy.gif?cid=ecf05e47z16j9por6pl8vts0b4lv6bi7pyf1f7nmctyh739e&rid=giphy.gif&ct=g" />
        <br/>
        <Heading fontSize="70px" pl='140px'>Not Found!!</Heading>
    </Box>
  )
}

export default Error