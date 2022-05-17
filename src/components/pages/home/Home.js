import React from 'react';
import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { Apod } from '../sections/Apod';
import { Page } from '../../utils/Page';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Events } from '../sections/Events';

export const Home = props => {
  return (
    <Page
      id="home"
      background={`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)),
    url("/04.jpg")`}
      backgroundAttachment="fixed"
      backgroundSize="cover"
      backgroundPosition="center right fixed"
      backgroundRepeat="no-repeat"
    >
      <Hero
        heading={'Explore the night sky with us.'}
        text={
          'The Oklahoma City Astronomy Club has been helping metro area residents observe the mysteries that our night sky has to offer since 1958. We use telescopes, binoculars, computers, cameras, and our own two eyes to observe and deepen our understanding of our universe.'
        }
      >
        <Link to="join" margin="0 auto">
          <Button
            size="lg"
            fontWeight="bold"
            fontSize="sm"
            colorScheme={'blue'}
            textTransform="uppercase"
          >
            Join the Club Online
          </Button>
        </Link>
      </Hero>
      <About />
      <Events />
      <Apod />
    </Page>
  );
};
