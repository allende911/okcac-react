import React, { useEffect } from 'react';
import { Page } from '../../utils/Page';
import { Hero } from '../sections/Hero';
import { Text } from '@chakra-ui/react';

const baseUrl = 'https://okcac-server.herokuapp.com';

export const Error = props => {
  useEffect(() => {
    localStorage.clear('data');
  }, []);

  return (
    <Page id="error">
      <Hero
        heading={'Oops! There was an issue.'}
        text={'We ran into an issue completing your request. '}
        image={'/sadr-wide.jpg'}
      >
        <Text>
          If you received a receipt from Stripe, don't worry, you're now a club
          member! If you're unsure, you can send us an email at
        </Text>
        <Text color="blue.300" textDecoration="underline" fontWeight="bold">
          <a href="mailto:info@okcastroclub.com">info@okcastroclub.com</a>
        </Text>
        <Text>and we'll look into it.</Text>
      </Hero>
    </Page>
  );
};
