import React, { useState, useEffect } from 'react';
import { Page } from '../../utils/Page';
import { Hero } from '../sections/Hero';
import { Box, Text } from '@chakra-ui/react';
import axios from 'axios';
import { NotFound } from '../404';

const baseUrl = process.env.REACT_APP_STRAPI;
const post = process.env.REACT_APP_MEMBERPOST;
axios.defaults.headers.common = { Authorization: `Bearer ${post}` };

export const OTSPSuccess = props => {
  const [logError, setError] = useState();
  useEffect(() => {
    if (localStorage.getItem('data') === null) {
      setError('no data');
    } else {
      axios
        .post(
          `http://localhost:1337/api/otsp-seminar`,
          JSON.parse(localStorage.getItem('data'))
        )
        .then(response => {
          if (!response.error) {
            localStorage.clear('data');
          } else {
            setError(response.error);
            localStorage.clear('data');
          }
        })
        .catch(error => {
          if (!error) {
            localStorage.clear('data');
          } else {
            setError(error);
            localStorage.clear('data');
          }
        });
    }
  }, []);

  return logError === 'no data' ? (
    <NotFound />
  ) : (
    <Page id="success">
      <Hero
        heading={'You are registered!'}
        text={
          'Thank you for registering for the 2022 Okie-Tex Astrophotography Seminar. Additional instructions will be sent to you closer to the star party. See you there!'
        }
        image={'/sadr-wide.jpg'}
      >
        {logError && (
          <Box
            w={{ base: 'full', md: '50%' }}
            border="1px"
            borderRadius="lg"
            borderColor="red.600"
            backgroundColor="red.800"
            p={4}
          >
            <Text fontWeight="bold">
              Your payment was successful, but your information was not uploaded
              to our database. Don't worry, you're order was still processed! We
              will contact you at your payment email address. We apologize for
              the issue.
            </Text>
          </Box>
        )}
      </Hero>
    </Page>
  );
};
