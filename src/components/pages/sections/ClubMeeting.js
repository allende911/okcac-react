import React from 'react';
import { Box, Heading, HStack, Image, Text } from '@chakra-ui/react';
import { getDateTime } from '../../utils/getDate';

export const ClubMeeting = ({ clubMeeting }) => {
  return (
    <>
      <HStack alignItems="stretch" spacing={1}>
        <Image
          src="/okcac-clubmeeting.jpg"
          objectFit="cover"
          boxSize="25em"
          display={{ base: 'none', lg: 'initial' }}
        />

        <Box m="8">
          <Box px="8" py="2">
            <Heading size="lg" mt={2}>
              {clubMeeting.title}
            </Heading>
            <Heading size="sm">
              {getDateTime(clubMeeting.dateTime)} {clubMeeting.location}
            </Heading>
            <Heading size="sm" fontWeight="semibold" mt={8}>
              {clubMeeting.topic}: {clubMeeting.speaker}
            </Heading>
            <Text>{clubMeeting.description}</Text>
            <Heading size="sm" fontWeight="semibold" mt={8}>
              Meeting Info:
            </Heading>
            <Text fontSize="sm" my={2}>
              {clubMeeting.boilerplate}
            </Text>
          </Box>
        </Box>
      </HStack>
    </>
  );
};
