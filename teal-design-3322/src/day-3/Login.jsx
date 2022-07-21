import { Box, Button, Flex, Heading, HStack, Img, Input, InputGroup, InputLeftAddon, InputLeftElement, Text } from '@chakra-ui/react'
import React from 'react'
import google from './Icons/google.png'
import facebook from './Icons/facebook.png'
const LoginBox={
    width:"60%",
    margin:"auto",
    height:"600px",
    marginBottom:"100px",
    backgroundColor:"#fff",
    borderRadius:"20px"
}
function Login() {
  return (
    <Box style={LoginBox}>
      <Flex>
        <Box pl="40px" w="50%" h="600px">
            <Img src="https://www.netmeds.com/images/cms/wysiwyg/cms/1588773798_sign-in-banner-new.png" />
        </Box>
        <Box w="50%" h="600px">
         <Box textAlign="left" w="70%" margin="auto" mt="80px">
         <Heading fontSize="24px" fontWeight="500" lineHeight="29px">Sign In / Sign Up</Heading>
         <Text fontSize="14px" mt="10px">Sign up or Sign in to access your orders, special offers, health tips and more!</Text>
         <br />
         <Text fontSize="13px" color="#24AEB1" >PHONE NUMBER</Text>
         {/* <InputLeftAddon placeholder="+91" /> */}
        <HStack>
        <InputGroup>
        <InputLeftAddon backgroundColor="#fff" borderRight="1px solid" children='+91' />
         <Input variant="flushed" pl="10px" type="number" placeholder="Enter your mobile no." />
        </InputGroup>
        </HStack><br/><br/>
        <Button w="100%" backgroundColor="#24AEB1" color="#ffff">USE OTP</Button>
         </Box>
         <Box>
            <Flex w="70%" margin="auto" mt="60px" h="80px">
                <Box  h="80px" w="50%">
                    <Button backgroundColor="#fff" w="160px" border="1px solid lightgrey">
                        <Img w="26px" src={google}/> &nbsp;
                        Google
                    </Button>
                </Box>
                <Box h="80px" w="50%">
                    <Button backgroundColor="#fff" w="160px" border="1px solid lightgrey">
                        <Img w="26px" src={facebook}/> &nbsp;
                        Facebook
                    </Button>
                </Box>
            </Flex>
         </Box>
        </Box>
      </Flex>
    </Box>
  )
}

export default Login