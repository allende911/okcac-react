import React from 'react';
import { Box, Heading, Icon, Text } from '@chakra-ui/react';

export const Card = ({ date, icon, heading, index, text }) => {
  return (
    <Box
      p={8}
      textAlign="center"
      bgColor="gray.900"
      border="2px"
      borderColor="gray.800"
      borderRadius="2xl"
      minW="25em"
      m="4"
      key={index}
    >
      <Icon
        as={icon}
        w="24"
        h="24"
        color="blue.300"
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
    </Box>
  );
};
