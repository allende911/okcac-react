import React from 'react';
import { Box, Button, Heading, Text, VStack } from '@chakra-ui/react';
import { heroHeader, heroStack, heroText } from '../home/heroStyles';

export const RegisterHero = props => {
  return (
    <Box as="section" id="hero">
      <VStack {...heroStack} spacing={12}>
        <Heading {...heroHeader}>Join today; observe tonight.</Heading>
        <Text {...heroText}>
          Interested in joining? Club dues are $36 per year, pro-rated your
          first year. A new membership is currently <strong>$33</strong>. Your
          family joins with you, for free. All we require is name, email address
          and phone number. You do not have to be a resident of the Oklahoma
          City Metro to join our astronomy club.
        </Text>
        <Button colorScheme="blue" size="lg">
          Get Started
        </Button>
      </VStack>
    </Box>
  );
};
