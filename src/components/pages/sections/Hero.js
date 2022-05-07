import React, { useState } from 'react';
import { Nav } from './Nav';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import { heroStack, heroHeader, heroText, heroBox } from './heroStyles';
import { AlertMessage } from '../sections/AlertMessage';

const alerts = {
  active: true,
  status: 'info',
  title: 'Beta',
  description:
    'This website is a work in progress. Not all content is available.',
};

export const Hero = ({ image, heading, text, ...props }) => {
  const [open, setOpen] = useState(true);

  return (
    <Box
      {...heroBox}
      borderBottom="1px"
      borderColor="gray.800"
      background={`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)),
    url(${image})`}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
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
