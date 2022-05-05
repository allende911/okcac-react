import React, { useState } from 'react';
import { Nav } from './Nav';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import { heroStack, heroHeader, heroText, heroBox } from './heroStyles';
import { AlertMessage } from '../sections/AlertMessage';

const alerts = {
  active: true,
  status: 'info',
  title: 'Beta',
  description: 'This website is not finished. Stuff will break.',
};

export const Hero = ({ image, heading, text, ...props }) => {
  const [open, setOpen] = useState(true);

  return (
    <Box
      {...heroBox}
      borderBottom="4px"
      borderColor="yellow.300"
      background={`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)),
    url(${image})`}
    >
      <Box as="section" id="hero" align="center" justify="center">
        {open && alerts.active && (
          <AlertMessage {...alerts} setOpen={setOpen} />
        )}
        <Nav />
        <VStack {...heroStack} spacing={3}>
          <Heading {...heroHeader}>{heading}</Heading>
          <Text {...heroText}>{text}</Text>
          {props.children}
        </VStack>
      </Box>
    </Box>
  );
};
