import React from 'react';
import { Box, Flex, Heading, Image, Spinner, Text } from '@chakra-ui/react';
import { Segment } from './Segment';
import { NSNevents } from './NSNevents';

export const ClubMeeting = () => {
  return (
    <>
      <Segment heading={'Upcoming events'} id="events" as="section">
        <Box maxW="80%">
          <Box textAlign="left" p={4}>
            <Heading size="md" paddingLeft={8}>
              May 13 Club Meeting
            </Heading>
          </Box>
          <Flex
            flexDirection={{ base: 'column', lg: 'row' }}
            justifyContent="space-between"
          >
            <Box textAlign="left" m={4} alignSelf="stretch" minW="55%" p={4}>
              <Heading size="md">Featured Speaker: Dr Bill Romanishin</Heading>
              <Text fontWeight="semibold">
                Seeing the light with your own two retinas
              </Text>

              <Text lineHeight="tall">
                Dr. Bill will talk about the computer-controlled binocular mount
                that he is building to look at the sky with one's own eyeballs
                (not​ a CCD)!
              </Text>
            </Box>
            <Box
              textAlign="left"
              p={4}
              alignSelf="stretch"
              border="1px"
              borderColor="gray.800"
              borderRadius="md"
            >
              <Heading size="sm">Meeting Details:</Heading>
              <Text fontWeight="semibold">Science Museum Oklahoma</Text>
              <Text>7:00pm - 9:00pm</Text>
              <Image
                src="okcac-clubmeeting.jpg"
                w="full"
                borderRadius="lg"
                py={2}
              />
              <Text lineHeight="tall">
                Our club meetings are completely free and open to the public.
                This month we will be back inside the Science Live Auditorium
                just inside the main doors of SMO. Please be respectful of the
                Science Museum and its staff. Masking is not required, but
                please do not attend if you have been possibly exposed to
                COVID-19 or other pathogens.
              </Text>
            </Box>
          </Flex>

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
      </Segment>
    </>
  );
};
