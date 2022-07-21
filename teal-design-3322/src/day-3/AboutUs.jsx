import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Grid, Heading, Img, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

const AboutContainer={
    height:"auto",
}
function AboutUs() {
  return (
    <Box style={AboutContainer}>
     <SimpleGrid>
        <Box h="330px" width="60%" margin="auto" mt="10px">
        <Box textAlign="left" fontSize="14px" fontWeight='500'>
        <Breadcrumb>
         <BreadcrumbItem>
         <BreadcrumbLink href='/'>Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
         <BreadcrumbLink href='/about'>About Us
         </BreadcrumbLink>
        </BreadcrumbItem>
        </Breadcrumb>
        </Box>
        <Img w="100%" mt="40px" src="https://www.netmeds.com/images/cms/offers/1632848929_static-banner3.jpg" />
        </Box >
        {/* About */}
        <Heading margin="auto" mb="-90px" mt="30px" pt="20px" color="#24AEB1" w="20%" textAlign="left" >ABOUT US</Heading>
        <Box h="950px" width="60%" margin="auto" mt='100px'>
          <Grid gridTemplateColumns="repeat(3,1fr)">
            <Box borderRight="2px dotted " pr="8px" textAlign="right" height="400px">
                <Heading fontSize="30px" lineHeight="36px" fontWeight="500">
                THE TRUSTED <br/> ONLINE <br/> MEDICINE<br/> PARTNER  
                </Heading>
                <Heading mt="15px" fontSize="24px" lineHeight="29px" fontWeight="400">
                FOR MORE THAN <br/> FOUR MILLION <br/> LOYAL <br/> CUSTOMERS
                </Heading>
            </Box>
            <Box fontSize="14px" borderRight="2px dotted " textAlign="left" pl="8px" pr="8px" w="500px" height="400px">
                <Text fontWeight="500">Who we are - India's most convenient online pharmacy</Text> &nbsp;
                <Text>Netmeds.com, India Ki Pharmacy, is brought to you by the Dadha & Company – one of India’s most trusted pharmacies, with over 100 years’ experience in dispensing quality medicines. At netmeds.com, we help you look after your own health effortlessly as well as take care of loved ones wherever they may reside in India. You can buy and send medicines from any corner of the country - with just a few clicks of the mouse.</Text>&nbsp;
                <Text fontWeight="500">What we do – Offer fast online access to medicines with convenient home delivery</Text>&nbsp;
                <Text>At netmeds.com, we make a wide range of prescription medicines and other health products conveniently available all across India. Even second and third tier cities and rural villages can now have access to the latest medicines. Since we also offer generic alternatives to most medicines, online buyers can expect significant savings.</Text>
            </Box>
            <Box  height="400px">
               <Box textAlign="left" pl="8px"><i class="fa fa-2x fa-quote-left text-blue"></i></Box>
                 <Text w="60%" textAlign="left" margin="auto">It's very helpful to buy medicine online. I ordered medicine. Got right time delivered and secured. Satiesfied customer service. Thanks Netmeds!</Text> 
                 <br/>
                 <Text>- Venkatnarayanan</Text>
            </Box>
          </Grid>
          <Flex gap="-90px">
            <Box  w="300px" >
              <Flex direction="column" float="right">
              <Img float="right"  w="50px" src="https://www.netmeds.com/images/cms/wysiwyg/icons/convenience.png"/><br/><br/><br/><br/><br/><br/><br/><br/>
              <Img  float="right" w="50px" src="https://www.netmeds.com/images/cms/wysiwyg/icons/one-stop-shop.png"/><br/><br/><br/><br/>
              <Img float="right"  w="50px" src="https://www.netmeds.com/images/cms/wysiwyg/icons/trust.png"/>
              </Flex>
            </Box>
          <Box fontSize="14px" borderRight="2px dotted" margin="auto" textAlign="left" pl="8px" mt="1px" ml="20px" mb="50px" pr="8px" w="500px" height="500px">
          <Text fontSize="18px" color="#64BCC6" fontWeight="500">CONVENIENCE</Text>
                <Text>Heavy traffic, lack of parking, monsoons, shop closed, forgetfulness… these are some of the reasons that could lead to skipping of vital medications. Since taking medicines regularly is a critical component of managing chronic medical conditions, it’s best not to run out of essential medicines. Just log on to netmeds.com, place your order online and have your medicines delivered to you – without leaving the comfort of your home.</Text>&nbsp;
                <Text>What’s more, with easy access to reliable drug information, you get to know all about your medicine at netmeds.com, and once you’re a Netmeds customer, you’ll get regular refill reminders, so you’ll never again come up short of medicines.</Text>

                <Text fontSize="18px" color="#64BCC6" fontWeight="500">ONE-STOP SHOP</Text>

                <Text>At netmeds.com, we make a wide range of prescription medicines and other health products conveniently available all across India. Even second and third tier cities and rural villages can now have access to the latest medicines. Since we also offer generic alternatives to most medicines, online buyers can expect significant savings.</Text>
                <Text fontSize="18px" color="#64BCC6" fontWeight="500">TRUST</Text>
                <Text>
                Netmeds.com continues a legacy of 100 years of success in the pharmaceutical industry. We are committed to provide safe, reliable and affordable medicines as well as a customer service philosophy that is worthy of our valued customers’ loyalty. We offer a superior online shopping experience, which includes ease of navigation and absolute transactional security.
                </Text>
          </Box>
          </Flex>
        </Box>
     </SimpleGrid>
    </Box>
  )
}

export default AboutUs