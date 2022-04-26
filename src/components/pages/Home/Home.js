import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import { Nav } from '../sections/Nav';
import { Hero } from '../sections/Hero';
import { homeContainer } from './homeStyles';
import { heroBox } from '../sections/heroStyles';
import { WhatWeDo } from './WhatWeDo';
import { Apod } from '../sections/Apod';
import { Events } from '../sections/Events';
import { AlertMessage } from '../sections/AlertMessage';

const alerts = {
  active: false,
  status: 'info',
  title: 'June Meeting Announcement',
  description: 'The June meeting will be held virtually on YouTube.',
};

export const Home = props => {
  return (
    <Container as="section" id="home" {...homeContainer}>
      <Box {...heroBox} borderBottom="4px" borderColor="yellow.300">
        {alerts.active === true ? <AlertMessage {...alerts} /> : null}
        <Nav />
        <Hero />
      </Box>
      <WhatWeDo />
      <Events />
      <Apod />
    </Container>
  );
};
