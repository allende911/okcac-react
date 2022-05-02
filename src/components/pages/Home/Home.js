import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import { Nav } from '../sections/Nav';
import { Hero } from './Hero';
import { pageContainer } from './homeStyles';
import { heroBox } from './heroStyles';
import { About } from '../sections/About';
import { Apod } from '../sections/Apod';
import { Events } from '../sections/Events';
import { AlertMessage } from './AlertMessage';

const alerts = {
  active: true,
  status: 'info',
  title: 'Beta',
  description: 'This website is not finished. Stuff will break.',
};

export const Home = props => {
  return (
    <Container as="section" id="home" {...pageContainer}>
      <Box {...heroBox} borderBottom="4px" borderColor="yellow.300">
        {alerts.active === true ? <AlertMessage {...alerts} /> : null}
        <Nav />
        <Hero />
      </Box>
      <About />
      {/* <Events /> */}
      <Apod />
    </Container>
  );
};
