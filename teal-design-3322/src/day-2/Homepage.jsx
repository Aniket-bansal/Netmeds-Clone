import { Box, Grid, Img, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Select, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import medicine from './icons/medicine.png';
import wellness from './icons/wellness.png';
import lab from './icons/test-tube.png'
import spray from './icons/spray.png'
import book from './icons/book.png'
import { NavLink } from 'react-router-dom';
import AdCarousel from './HomePageComponents/AdCarousel';
import OffersTab from './HomePageComponents/OffersTab';
import OfferSlider from './HomePageComponents/OfferSlider';
import ShopbyCategory from './HomePageComponents/ShopbyCategory';
import NewArrivals from './HomePageComponents/NewArrivals';
import TopBrands from './HomePageComponents/TopBrands';
import Membership from './HomePageComponents/Membership';
import CategoriesinFocus from './HomePageComponents/CategoriesinFocus';
import PersonalGrooming from './HomePageComponents/PersonalGrooming';
import Refill from './HomePageComponents/Refill';
import HealthLibrary from './HomePageComponents/HealthLibrary';


function Homepage() {
  return (
      <>
    <Box height="auto">
    <AdCarousel/>
    <OffersTab />
    <OfferSlider/>
    <ShopbyCategory />
    <NewArrivals />
    <TopBrands/>
    <Membership/>
    <CategoriesinFocus/>
    <PersonalGrooming />
    <Refill />
    <HealthLibrary/>
    </Box>
      </>
  )
}

export default Homepage