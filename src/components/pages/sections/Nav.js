import React from 'react';
import { Box, Button, Flex, Image } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const tempButtons = [
  { name: 'About', linkTo: '#about' },
  { name: 'Contact', linkTo: 'mailto:info@okcastroclub.com' },
  { name: 'Events', linkTo: '#events' },
  { name: 'Forum', linkTo: 'http://okcastroclub.com/phpBB2/index.php' },
];

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
        <Link to="/">
          <Image src="/logo.png" w="225px" />
        </Link>
        <Flex justify="flex-end" w="full">
          {tempButtons.map((buttons, index) => (
            <a href={buttons.linkTo} key={index}>
              <Button
                color="gray.50"
                _hover={{ color: 'yellow' }}
                variant="link"
                fontWeight="normal"
                size="sm"
                mx={4}
                display={['none', 'none', 'flex']}
              >
                {buttons.name}
              </Button>
            </a>
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
