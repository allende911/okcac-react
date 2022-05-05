import React from 'react';
import { Card } from '../../utils/Card';
import { Box, Flex } from '@chakra-ui/react';
import { cards } from './aboutCards';
import { Segment } from '../sections/Segment';

export const About = props => {
  return (
    <Segment
      heading={'Our mission.'}
      id="about"
      className="postTop"
      as="section"
    >
      <Flex
        flexDirection={{ md: 'row', lg: 'row' }}
        flexWrap="wrap"
        justifyContent="space-around"
        alignSelf="stretch"
      >
        {cards.map((card, index) => (
          <Box key={index} maxW={{ base: 'full', md: '30%' }}>
            <Card heading={card.heading} icon={card.icon} text={card.text} />
          </Box>
        ))}
      </Flex>
    </Segment>
  );
};
