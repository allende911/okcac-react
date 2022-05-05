import React from 'react';
import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { Apod } from '../sections/Apod';
import { Events } from '../sections/Events';
import { More } from '../../utils/More';
import { GetHelp } from './GetHelp';
import { Page } from '../../utils/Page';

export const Home = props => {
  return (
    <Page id="home">
      <Hero
        heading={'Explore the night sky with us.'}
        text={
          'The Oklahoma City Astronomy Club has been helping metro area residents observe the mysteries that our night sky has to offer since 1958. We use telescopes, binoculars, computers, cameras, and our own two eyes to observe and deepen our understanding of our universe.'
        }
        image={'04.jpg'}
      >
        <GetHelp />
        <More paddingTop="10em" />
      </Hero>
      <About />
      {/* <Events /> */}
      <Apod />
    </Page>
  );
};
