import React from 'react';
import { ClubMeeting } from './ClubMeeting';
import { NSNevents } from './NSNevents';
import { Segment } from '../../UI/Segment';
import { Box, Divider, Heading, Spinner } from '@chakra-ui/react';

export const Events = ({ clubMeeting }) => {
  return (
    <Segment id="events" as="section" textAlign="left">
      <Heading size="lg" p="2">
        Upcoming Events
      </Heading>
      <Box
        border="1px"
        shadow="dark-lg"
        borderRadius="lg"
        borderColor="gray.800"
        bgColor="gray.900"
      >
        <ClubMeeting clubMeeting={clubMeeting} />
        <Divider />
        <Box>
          {!NSNevents && (
            <>
              <Heading size="lg" mb={8}>
                Contacting the Night Sky Network
              </Heading>
              <Spinner size="lg" />
            </>
          )}
          {NSNevents && <NSNevents />}
        </Box>
      </Box>
    </Segment>
  );
};
