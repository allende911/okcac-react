import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

const meetingInfo = [
  {
    heading: 'June Club Meeting',
    time: '7pm',
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
      <Flex
        flexDirection={{ md: 'row', lg: 'column' }}
        flexWrap="wrap"
        justifyContent="flex-start"
        alignSelf="stretch"
      >
        <Box m="8">
          {meetingInfo.map(meeting => (
            <>
              <Heading size="lg" mt={2}>
                {meeting.heading}
              </Heading>
              <Heading size="sm">
                {meeting.time}, {meeting.location}
              </Heading>
              <Text fontSize="lg" mt={8}>
                {meeting.topic}: {meeting.author}
              </Text>
              <Text>{meeting.description}</Text>
              <Heading size="sm" fontWeight="semibold" mt={8}>
                Meeting Info:
              </Heading>
              <Text fontSize="sm" my={2}>
                {meeting.boilerplate}
              </Text>
            </>
          ))}
        </Box>
      </Flex>
    </>
  );
};
