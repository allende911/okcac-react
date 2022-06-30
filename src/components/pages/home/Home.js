import React from 'react';
import { Hero } from '../../UI/Hero';
import { About } from '../sections/About';
import { Apod } from '../sections/Apod';
import { Page } from '../../UI/Page';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Events } from '../sections/Events';

export const Home = ({ about, alert, baseUrl, clubMeeting, home }) => {
  return (
    home && (
      <Page
        id="home"
        background={`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)),
      url(${baseUrl}${home.backgroundImage.data.attributes.url})`}
        backgroundAttachment="fixed"
        backgroundSize="cover"
        backgroundPosition="center right fixed"
        backgroundRepeat="no-repeat"
      >
        <Hero heading={home.heading} text={home.description} alert={alert}>
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
        <About about={about} />
        <Events clubMeeting={clubMeeting} />
      </Page>
    )
  );
};
