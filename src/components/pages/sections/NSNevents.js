import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Button, Flex, Heading, Spinner } from '@chakra-ui/react';
import { Card } from '../../UI/Card';

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
        `${process.env.REACT_APP_NSN}/https://nightsky.jpl.nasa.gov/js/data/events_json_api.cfm?&Club_ID=877&IncludeRN=1`
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

  return !events ? (
    <Flex align="center" justify="center" bgColor="gray.900">
      <Heading size="lg">Fetching events from the Night Sky Network</Heading>
      <Spinner size="lg" />
    </Flex>
  ) : (
    <>
      <Flex
        flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
        justifyContent={{ base: 'space-evenly', lg: 'flex-start' }}
        alignItems={{ base: 'center', md: 'stretch' }}
      >
        {events
          .filter(
            local =>
              local.address_state === 'OK' &&
              local.title !== 'Oklahoma City Astronomy Club Meeting'
          )
          .map(
            (event, index) =>
              index < 6 && (
                <Box key={index} color="white">
                  {eventImages
                    .filter(image => image.eventName === event.title)
                    .map((meta, index) => (
                      <Card
                        key={index}
                        heading={
                          event.title + ': ' + handleDates(event.start_dates)
                        }
                        image={meta.photo}
                        text={event.description}
                        link={event.partner_opp_url}
                      />
                    ))}
                </Box>
              )
          )}
      </Flex>
      <Box textAlign="center">
        <a
          href="https://nightsky.jpl.nasa.gov/event-list.cfm?Club_ID=877"
          target="_blank"
          rel="noreferrer"
        >
          <Button colorScheme="blue" mb={8}>
            See the entire club calendar at NSN
          </Button>
        </a>
      </Box>
    </>
  );
};
