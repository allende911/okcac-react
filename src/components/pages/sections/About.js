import React from 'react';
import { Card } from '../../utils/Card';
import { Box, Flex } from '@chakra-ui/react';
import { cards } from './aboutCards';
import { Segment } from '../sections/Segment';

export const About = props => {
  return (
    <Segment
      id="about"
      className="postTop"
      as="section"
      m={{ base: 4, md: 12, lg: 24 }}
    >
      <Flex
        flexDirection={{ md: 'row', lg: 'row' }}
        flexWrap="wrap"
        justifyContent="space-around"
        alignSelf="stretch"
        border="1px"
        shadow="dark-lg"
        borderRadius="lg"
        borderColor="gray.800"
      >
        {cards.map((card, index) => (
          <Box key={index} maxW={{ base: 'full', md: '30%' }}>
            <Card
              heading={card.heading}
              icon={card.icon}
              text={card.text}
              bgColor="gray.900"
            />
          </Box>
        ))}
      </Flex>
    </Segment>
  );
};
