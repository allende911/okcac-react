import React from 'react';
import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { Segment } from './Segment';
import { NSNevents } from './NSNevents';

export const ClubMeeting = () => {
  return (
    <>
      <Segment
        id="events"
        as="section"
        m={{ base: 4, md: 12, lg: 24 }}
        textAlign="left"
        border="1px"
        shadow="dark-lg"
        borderRadius="lg"
        borderColor="gray.800"
      >
        <Flex
          flexDirection={{ md: 'row', lg: 'column' }}
          flexWrap="wrap"
          justifyContent="flex-start"
          alignSelf="stretch"
        >
          <Box m="8">
            <Heading size="lg" mt={2}>
              May 13 Club Meeting
            </Heading>
            <Heading size="sm">7pm - 9pm, Science Museum Oklahoma</Heading>
            <Text fontSize="lg" mt={8}>
              Featured Speaker: Dr Bill Romanishin
            </Text>
            <Text>
              Dr. Bill will talk about the computer-controlled binocular mount
              that he is building to look at the sky with one's own eyeballs
              (not​ a CCD)!
            </Text>
            <Heading size="sm" fontWeight="semibold" mt={8}>
              Meeting Info:
            </Heading>
            <Text fontSize="sm" my={2}>
              Our club meetings are completely free and open to the public. This
              month we will be back inside the Science Live Auditorium just
              inside the main doors of SMO. Please be respectful of the Science
              Museum and its staff. Masking is not required, but please do not
              attend if you have been possibly exposed to COVID-19 or other
              pathogens.
            </Text>
          </Box>
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
        </Flex>
      </Segment>
    </>
  );
};
