import React from 'react';
import { PrimaryMember } from './forms/PrimaryMember';
import { Heading, Text, VStack } from '@chakra-ui/react';

export const StepOne = ({ isStepOne }) => {
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
        background="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url('./okcac-clubmeeting.jpg')"
        backgroundSize="cover"
      >
        <Heading>Step One: Primary Member</Heading>
        <Text>
          This is you. This is the primary point of contact for your club
          membership. You will be able to add your family in the next step.
          Name, phone and email are required, but only for the primary member.
        </Text>
        <Text>
          We don't require you to live in the Oklahoma City Metro to be a club
          member. If you choose to provide your address, we use the information
          to subscribe you to the paper version of the Astronomical League
          magazine, The Reflector. This magazine is also freely available online
          and providing address data is completely optional.
        </Text>
      </VStack>
      <VStack w={['full', 'full', '50%']} py={6}>
        <PrimaryMember isStepOne={isStepOne} />
      </VStack>
    </>
  );
};
