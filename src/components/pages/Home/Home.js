import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import { Nav } from '../sections/Nav';
import { Hero } from '../sections/Hero';
import { homeContainer } from './homeStyles';
import { heroBox } from '../sections/heroStyles';
import { WhatWeDo } from './WhatWeDo';
import { Apod } from '../sections/Apod';

export const Home = props => {
  return (
    <Container as="section" id="home" {...homeContainer}>
      <Box {...heroBox} borderBottom="4px" borderColor="yellow.300">
        <Nav />
        <Hero />
      </Box>
      <WhatWeDo />
      <Apod />
    </Container>
  );
};
