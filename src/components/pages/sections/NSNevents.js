import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Segment } from './Segment';

export const NSNevents = () => {
  const [events, setEvents] = useState();

  const eventImages = [
    {
      eventName: 'OKCAC Member Night at CRO',
      photo: '4domes.jpg',
      alt: 'Four Domes at Cheddar Ranch',
    },
    {
      eventName: 'Oklahoma City Astronomy Club Meeting',
      photo: 'club-meeting.jpg',
      alt: 'Club Meeting at SMO',
    },
    {
      eventName: 'Space Day at Science Museum Oklahoma',
      photo: 'smo-outreach.jpg',
      alt: 'Space Day at SMO',
    },
    {
      eventName: 'OKCAC Executive Board Meeting',
      photo: 'bod.jpg',
      alt: 'OKCAC Board',
    },
  ];

  useEffect(() => {
    axios
      .get(
        'https://floating-temple-76076.herokuapp.com/https://nightsky.jpl.nasa.gov/js/data/events_json_api.cfm?&Club_ID=877&IncludeRN=1'
      )
      .then(response => setEvents(response.data.events));
  }, []);

  if (!events) {
    return;
  }

  const handleDates = date => {
    let tempDate = new Date(date);
    return tempDate.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Segment my={{ base: 2, md: 4, lg: 8 }}>
      <Flex flexDirection={{ base: 'column', lg: 'row' }}>
        <VStack
          border="1px"
          borderColor="gray.800"
          borderRadius="lg"
          m={2}
          px={8}
        >
          <Heading size="lg" my={2}>
            Public Outreach
          </Heading>
          {events
            .filter(
              local =>
                local.address_state === 'OK' &&
                local.title !== 'Oklahoma City Astronomy Club Meeting'
            )
            .map(
              (event, index) =>
                index < 3 && (
                  <Box key={index}>
                    {eventImages
                      .filter(image => image.eventName === event.title)
                      .map((meta, index) => (
                        <Box key={index} my={2}>
                          <Heading size="md" my={4}>
                            {event.title}
                          </Heading>
                          <Image
                            src={meta.photo}
                            alt={meta.alt}
                            width="full"
                            key={index}
                            borderRadius="lg"
                          />
                        </Box>
                      ))}

                    <Text fontWeight="semibold" my={4}>
                      {event.title} | {handleDates(event.start_dates)}
                    </Text>

                    <Text noOfLines={4} lineHeight="tall">
                      {event.description}
                    </Text>
                    <a href={event.partner_opp_url} target="_blank">
                      <Button
                        colorScheme="blue"
                        variant="outline"
                        size="sm"
                        my={4}
                      >
                        Read More
                      </Button>
                    </a>
                    <Divider />
                  </Box>
                )
            )}
        </VStack>

        <VStack
          maxW={{ base: 'full', lg: '30%' }}
          spacing={8}
          border="1px"
          borderColor="gray.800"
          borderRadius="lg"
          m={2}
          p={4}
        >
          <Heading size="sm">Astronomical &amp; Online Events</Heading>
          {events
            .filter(local => local.address_state !== 'OK')
            .map(
              (event, index) =>
                index < 5 && (
                  <Box textAlign="left" key={index}>
                    <Heading size="sm">{event.title}</Heading>
                    <Text fontWeight="bold">
                      {handleDates(event.start_dates)}
                    </Text>

                    <Text noOfLines={4} lineHeight="tall">
                      {event.description}
                    </Text>
                    <a href={event.partner_opp_url} target="_blank">
                      <Button
                        colorScheme="blue"
                        variant="outline"
                        size="sm"
                        my={2}
                      >
                        Read More
                      </Button>
                    </a>
                  </Box>
                )
            )}
        </VStack>
      </Flex>
      <a
        href="https://nightsky.jpl.nasa.gov/event-list.cfm?Club_ID=877"
        target="_blank"
      >
        <Button colorScheme="black" isFullWidth my={4}>
          See the entire club calendar at NSN
        </Button>
      </a>
    </Segment>
  );
};
