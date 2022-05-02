import React from 'react';
import { Box, Heading, Icon, Text, VStack } from '@chakra-ui/react';
import { heroHeader, heroStack, heroText } from '../home/heroStyles';
import { FaAngleDown } from 'react-icons/fa';

export const RegisterHero = props => {
  return (
    <Box as="section" id="hero">
      <VStack {...heroStack} spacing={12}>
        <Heading {...heroHeader}>Join today.</Heading>
        <Text {...heroText}>
          Interested in joining? Club dues are $36 per year, pro-rated your
          first year. A new membership is currently <strong>$33</strong>. Your
          family joins with you, for free. You do not have to be a resident of
          the Oklahoma City Metro to join our astronomy club.
        </Text>
        <Icon as={FaAngleDown} w={8} h={8} color="white" />
      </VStack>
    </Box>
  );
};
