import React from 'react';
import { Box, Icon, Text, VStack } from '@chakra-ui/react';
import { FaChevronDown } from 'react-icons/fa';

export const More = ({ icon, text, ...props }) => {
  return (
    <Box py={4} {...props}>
      <VStack spacing={2}>
        <Text
          fontWeight="normal"
          lineHeight="tall"
          pb={[1, 2, 4]}
          color="white"
        >
          {text}
        </Text>
        <Icon as={FaChevronDown} w={20} h={20} />

        {props.children}
      </VStack>
    </Box>
  );
};
