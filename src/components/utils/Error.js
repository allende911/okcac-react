import React from 'react';
import { Box } from '@chakra-ui/react';

export const Error = props => {
  return (
    <Box fontWeight="bold" fontSize="xs" color="red.500">
      {props.children}
    </Box>
  );
};
