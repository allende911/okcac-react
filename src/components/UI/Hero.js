import React from 'react';
import { Nav } from '../pages/sections/Nav';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import { heroStack, heroHeader, heroText, heroBox } from './heroStyles';

export const Hero = ({ image, heading, text, ...props }) => {
  return (
    alert && (
      <Box {...heroBox}>
        <Box as="section" id="hero" align="center" justify="center">
          <Nav />
          <VStack {...heroStack} spacing={3} align="center">
            <Heading {...heroHeader}>{heading}</Heading>
            <Text {...heroText}>{text}</Text>
            {props.children}
          </VStack>
        </Box>
      </Box>
    )
  );
};
