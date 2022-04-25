import React from 'react';
import { Box, Heading, Icon, Text, VStack } from '@chakra-ui/react';
import { GetHelp } from './GetHelp';
import { heroHeader, heroStack, heroText } from './heroStyles';
import { FaAngleDown } from 'react-icons/fa';

export const Hero = props => {
  return (
    <Box as="section" id="hero">
      <VStack {...heroStack} spacing={12}>
        <Heading {...heroHeader}>Explore the night sky with us.</Heading>
        <Text {...heroText}>
          The Oklahoma City Astronomy Club has been helping metro area residents
          observe the mysteries that our night sky has to offer. We use
          telescopes, binoculars, computers, cameras, and our own two eyes to
          observe and deepen our understanding of our universe.
        </Text>
        <GetHelp />
        <Icon as={FaAngleDown} w={8} h={8} color="white" />
      </VStack>
    </Box>
  );
};
