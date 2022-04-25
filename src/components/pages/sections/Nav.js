import React from 'react';
import { Box, Button, Flex, Image } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const tempButtons = ['About', 'Contact', 'Events', 'Forum'];

export const Nav = () => {
  return (
    <Box as="nav" id="nav">
      <Flex
        p={[3, 5]}
        as="nav"
        flexDirection="row"
        align="center"
        justify={['flex-start']}
      >
        <Image src="./logo.png" w="225px" />
        <Flex justify="flex-end" w="full">
          {tempButtons.map((buttons, index) => (
            <Button
              color="gray.50"
              _hover={{ color: 'yellow' }}
              variant="link"
              fontWeight="normal"
              size="sm"
              mx={4}
              display={['none', 'none', 'flex']}
              key={index}
            >
              {buttons}
            </Button>
          ))}
          <HamburgerIcon
            display={['flex', 'flex', 'none']}
            color="white"
            fontSize="2xl"
          />
        </Flex>
      </Flex>
    </Box>
  );
};
