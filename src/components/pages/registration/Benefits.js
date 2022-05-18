import React from 'react';
import { Card } from '../../UI/Card';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { cards } from './benefitsList';
import { Segment } from '../../UI/Segment';

export const Benefits = props => {
  return (
    <Segment
      id="benefits"
      className="postTop"
      as="section"
      m={{ base: 4, md: 12, lg: 24 }}
    >
      <Heading size="lg" p="2">
        Member Benenfits
      </Heading>
      <Flex
        flexDirection={{ md: 'row', lg: 'row' }}
        flexWrap="wrap"
        justifyContent="space-around"
        alignSelf="stretch"
        border="1px"
        shadow="dark-lg"
        borderRadius="lg"
        borderColor="gray.800"
        bgColor="gray.900"
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
