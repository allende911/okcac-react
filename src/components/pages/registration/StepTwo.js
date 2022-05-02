import React from 'react';
import { Heading, Text, VStack } from '@chakra-ui/react';
import { Family } from './forms/Family';

export const StepTwo = props => {
  return (
    <>
      <VStack
        w={['full', 'full', '50%']}
        minH="100vh"
        color="white"
        p={12}
        spacing={6}
        align="flex-start"
        justifyContent="flex-start"
        background="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url('./4Domes.jpg')"
        backgroundSize="cover"
      >
        <Heading>Step Two: Family Members</Heading>
        <Text>
          Spouse, partner, child, adult child, sibling, whatever. They all join
          with you, provided you give us their name and their relation to you.
        </Text>
      </VStack>
      <VStack w={['full', 'full', '50%']} py={6}>
        <Family
          isStepBack={props.isStepBack}
          isSetFamily={props.isSetFamily}
          isStepTwo={props.isStepTwo}
          family={props.family}
          setFamily={props.setFamily}
        />
      </VStack>
    </>
  );
};
