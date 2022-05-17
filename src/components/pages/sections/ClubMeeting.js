import React from 'react';
import { Box, Flex, Heading, HStack, Image, Text } from '@chakra-ui/react';

const meetingInfo = [
  {
    heading: 'June Club Meeting',
    time: 'June 10, 7pm',
    location: 'Mitch Park Edmond, OK',
    topic: 'Club Party in the Park',
    description:
      'New location this month! Join us for some indoor and outdoor activities, including a brief presentation by board member Mike Mitchell. We will have some outdoor star gazing with telescopes setup. No gear or prior knowledge required!',
    boilerplate:
      'Our club meetings are completely free and open to the public. This month we will be back inside the Science Live Auditorium just inside the main doors of SMO. Please be respectful of the Science Museum and its staff. Masking is not required, but please do not attend if you have been possibly exposed to COVID-19 or other pathogens.',
  },
];

export const ClubMeeting = () => {
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
          {meetingInfo.map((meeting, index) => (
            <Box px="8" py="2" key={index}>
              <Heading size="lg" mt={2}>
                {meeting.heading}
              </Heading>
              <Heading size="sm">
                {meeting.time}, {meeting.location}
              </Heading>
              <Heading size="sm" fontWeight="semibold" mt={8}>
                {meeting.topic}: {meeting.author}
              </Heading>
              <Text>{meeting.description}</Text>
              <Heading size="sm" fontWeight="semibold" mt={8}>
                Meeting Info:
              </Heading>
              <Text fontSize="sm" my={2}>
                {meeting.boilerplate}
              </Text>
            </Box>
          ))}
        </Box>
      </HStack>
    </>
  );
};
