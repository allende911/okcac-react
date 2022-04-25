import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import * as icon from 'react-icons/fa';
import { Card } from '../../Card';

const cards = [
  {
    key: 1,
    icon: icon.FaUserAstronaut,
    heading: 'Established 1958',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    key: 2,
    icon: icon.FaRocket,
    heading: 'Science Advocacy',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    key: 3,
    icon: icon.FaCloudMoon,
    heading: 'Public Outreach',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

export const WhatWeDo = () => {
  return (
    <Flex
      flexDirection="column"
      align="center"
      justify="center"
      as="section"
      id="about"
      color="white"
      minH="80vh"
      borderBottom="4px"
      borderColor="blue.600"
    >
      <Heading size="lg" mt="8">
        Our mission.
      </Heading>

      <Flex
        m={['1', '4', '8']}
        flexDirection={['column', 'column', 'row']}
        justify="space-evenly"
        align="center"
      >
        {cards.map((card, index) => (
          <>
            <Card
              key={index}
              heading={card.heading}
              icon={card.icon}
              text={card.text}
            />
          </>
        ))}
      </Flex>
    </Flex>
  );
};
