import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';

export const Segment = ({ id, heading, ...props }) => {
  return (
    <Box id={id} {...props} my={{ base: 4, md: 12, lg: 24 }}>
      <Flex
        flexDirection="column"
        align="center"
        justify="center"
        as="section"
        color="white"
      >
        <Heading size="2xl">{heading}</Heading>

        {props.children}
      </Flex>
    </Box>
  );
};
