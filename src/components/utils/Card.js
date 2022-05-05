import React from 'react';
import {
  Box,
  Heading,
  Icon,
  LinkBox,
  LinkOverlay,
  Text,
} from '@chakra-ui/react';

export const Card = ({ date, icon, index, heading, link, text }) => {
  return (
    <LinkBox as="article" key={index}>
      <Box
        px={[4, 8, 12]}
        py={[4, 4, 8]}
        textAlign="center"
        bgColor="gray.900"
        minW="10em"
        m={[1, 2, 4]}
        borderRadius="md"
        _hover={{
          border: '1px',
          borderColor: 'yellow.100',
        }}
      >
        <LinkOverlay href={link}>
          <Icon
            as={icon}
            w="24"
            h="24"
            color="blue.300"
            _hover={{ color: 'yellow.100' }}
            p="4"
            m="6"
            display={!icon ? 'none' : 'initial'}
          />
          <Heading size="md" my="2">
            {heading}
          </Heading>
          <Text fontWeight="bold" py={2}>
            {date}
          </Text>
          <Text noOfLines={5}>{text}</Text>
        </LinkOverlay>
      </Box>
    </LinkBox>
  );
};
