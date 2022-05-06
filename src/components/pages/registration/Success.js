import React, { useEffect } from 'react';
import { Page } from '../../utils/Page';
import { Hero } from '../sections/Hero';
import { Card } from '../../utils/Card';
import { cards } from './successCards';
import { Box, Flex, Text } from '@chakra-ui/react';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_STRAPI;

export const Success = props => {
  useEffect(() => {
    axios
      .post(`${baseUrl}/api/members`, JSON.parse(localStorage.getItem('data')))
      .then(response => {
        if (!response.error) {
          localStorage.clear('data');
        }
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <Page id="success">
      <Hero
        heading={'Welcome to the club!'}
        text={
          'Thank you for joining the Oklahoma City Astronomy Club! You will receive an introductory email from our Membership Secretary with all the new membership details. While you wait on that, join our club forum and our club private Facebook group and introduce yourself.'
        }
        image={'/sadr-wide.jpg'}
      >
        <Text>
          Be sure to check out our upcoming events and club meetings and we hope
          to meet you at one very soon.
        </Text>
        <Text>
          This online system is all very new for us, so if you have any
          feedback, we'd love to hear it at webmaster@okcastroclub.com.
        </Text>
        <Flex
          flexDirection={{ md: 'row', lg: 'row' }}
          flexWrap="wrap"
          justifyContent="space-evenly"
        >
          {cards.map((toDo, index) => (
            <Box
              key={index}
              minW={'25em'}
              maxW={{ base: 'full', md: '30%' }}
              align-self="stretch"
              justifyContent="space-stretch"
            >
              <Card
                heading={toDo.heading}
                icon={toDo.icon}
                text={toDo.text}
                link={toDo.link}
              />
            </Box>
          ))}
        </Flex>
      </Hero>
    </Page>
  );
};
