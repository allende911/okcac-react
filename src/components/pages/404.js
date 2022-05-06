import React from 'react';
import { Page } from '../utils/Page';
import { Hero } from './sections/Hero';

export const NotFound = () => {
  return (
    <Page id="404">
      <Hero
        heading={'Page not found.'}
        text={"Sorry, that page doesn't exist."}
        image={'/04.jpg'}
      ></Hero>
    </Page>
  );
};
