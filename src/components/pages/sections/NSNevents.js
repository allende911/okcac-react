import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Segment } from './Segment';
import { Card } from '../../utils/Card';

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
        `${process.env.REACT_APP_NSN}https://nightsky.jpl.nasa.gov/js/data/events_json_api.cfm?&Club_ID=877&IncludeRN=1`
      )
      .then(response => setEvents(response.data.events));
  }, []);

  const handleDates = date => {
    let tempDate = new Date(date);
    return tempDate.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      {!events ? (
        <Flex align="center" justify="center">
          <Heading size="lg">
            Fetching events from the Night Sky Network
          </Heading>
          <Spinner size="lg" />
        </Flex>
      ) : (
        <Box textAlign={{ base: 'center' }}>
          <Heading size="md">Upcoming Outreach Events</Heading>
          <Flex
            flexDirection={{ md: 'row', lg: 'row' }}
            flexWrap="wrap"
            justifyContent="space-around"
            alignItems="stretch"
          >
            {events
              .filter(
                local =>
                  local.address_state === 'OK' &&
                  local.title !== 'Oklahoma City Astronomy Club Meeting'
              )
              .map(
                (event, index) =>
                  index < 5 && (
                    <Box key={index} color="white">
                      {eventImages
                        .filter(image => image.eventName === event.title)
                        .map((meta, index) => (
                          <Card
                            key={index}
                            heading={
                              event.title +
                              ': ' +
                              handleDates(event.start_dates)
                            }
                            image={meta.photo}
                            text={event.description}
                            link={event.partner_opp_url}
                          />
                        ))}

                      <a
                        href={event.partner_opp_url}
                        target="_blank"
                        rel="noreferrer"
                      ></a>
                    </Box>
                  )
              )}
          </Flex>
          {/* <Heading size="sm">Astronomical &amp; Online Events</Heading>
          {events
            .filter(local => local.address_state !== 'OK')
            .map(
              (event, index) =>
                index < 5 && (
                  <Box textAlign="left" key={index} px={6}>
                    <Heading size="sm">{event.title}</Heading>
                    <Text fontWeight="bold">
                      {handleDates(event.start_dates)}
                    </Text>

                    <Text noOfLines={4} lineHeight="tall">
                      {event.description}
                    </Text>
                    <a
                      href={event.partner_opp_url}
                      target="_blank"
                      rel="noreferrer"
                    >
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
            )} */}
        </Box>
      )}
      <Box textAlign="center">
        <a
          href="https://nightsky.jpl.nasa.gov/event-list.cfm?Club_ID=877"
          target="_blank"
          rel="noreferrer"
        >
          <Button colorScheme="blue" m={4}>
            See the entire club calendar at NSN
          </Button>
        </a>
      </Box>
    </>
  );
};
