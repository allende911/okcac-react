import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';

export const Segment = ({ id, heading, ...props }) => {
  return (
    <Box id={id} {...props} mb={8}>
      <Flex
        flexDirection="column"
        align="center"
        justify="center"
        as="section"
        color="white"
        minH="50vh"
      >
        <Heading size="2xl" my={8}>
          {heading}
        </Heading>

        {props.children}
      </Flex>
    </Box>
  );
};
