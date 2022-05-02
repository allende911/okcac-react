import React from 'react';
import { Heading, HStack, Text } from '@chakra-ui/react';

export const DisplayFamily = ({ family }) => {
  return (
    <>
      <Heading as="h3" size="md" color="yellow.300">
        Family:
      </Heading>
      {family.map((member, index) => (
        <HStack key={index}>
          <Text>
            {member.firstName} {member.lastName} ({member.relation})
          </Text>
        </HStack>
      ))}
    </>
  );
};
