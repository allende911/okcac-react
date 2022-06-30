import React from 'react';
import { Page } from '../UI/Page';
import { Hero } from '../UI/Hero';

export const NotFound = () => {
  return (
    <Page
      id="404"
      background={`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)),
    url("/sadr-wide.jpg")`}
      backgroundAttachment="fixed"
      backgroundSize="cover"
      backgroundPosition="center center fixed"
      backgroundRepeat="no-repeat"
    >
      <Hero
        heading={'Page not found.'}
        text={"Sorry, that page doesn't exist."}
      ></Hero>
    </Page>
  );
};
