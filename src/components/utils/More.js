import React from 'react';
import { Box, Icon, Text, VStack } from '@chakra-ui/react';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-scroll';

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
        <Link to="postTop" spy={true} smooth={true} offset={-70} duration={500}>
          <Icon as={FaChevronDown} w={20} h={20} />
        </Link>

        {props.children}
      </VStack>
    </Box>
  );
};
