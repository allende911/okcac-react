import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Flex, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react';

export const Events = () => {
  const [events, setEvents] = useState();

  const eventImages = [
    {
      eventName: 'OKCAC Member Night at CRO',
      photo: './4domes.jpg',
      alt: 'Four Domes at Cheddar Ranch',
    },
    {
      eventName: 'Oklahoma City Astronomy Club Meeting',
      photo: './club-meeting.jpg',
      alt: 'Club Meeting at SMO',
    },
    {
      eventName: 'Space Day at Science Museum Oklahoma',
      photo: './bod.jpg',
      alt: 'OKCAC Board of Directors',
    },
    {
      eventName: 'OKCAC Executive Board Meeting',
      photo: './4domes.jpg',
      alt: 'OKCAC Board',
    },
  ];

  useEffect(() => {
    axios
      .get(
        'http://localhost:8080/https://nightsky.jpl.nasa.gov/js/data/events_json_api.cfm?&Club_ID=877&IncludeRN=1'
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
    <>
      <Flex
        flexDirection="column"
        as="section"
        id="events"
        color="white"
        minH="80vh"
        w="full"
        borderBottom="4px"
        borderColor="blue.600"
        justify="center"
        align="center"
      >
        <Heading size="2xl" mt="8" w="full">
          Our Events.
        </Heading>
        <Grid
          gridTemplateColumns="repeat(2, 1fr)"
          gap={2}
          textAlign="left"
          width="50%"
        >
          {events
            .filter(local => local.address_state === 'OK')
            .map(event => (
              <>
                <GridItem width="250px" minH="10em">
                  {eventImages
                    .filter(image => image.eventName == event.title)
                    .map(meta => (
                      <Image src={meta.photo} alt={meta.alt} width="250px" />
                    ))}
                </GridItem>
                <GridItem w="full">
                  <Heading size="sm">{event.title}</Heading>

                  <Text noOfLines={4} lineHeight="tall">
                    {event.description}
                  </Text>
                </GridItem>
              </>
            ))}
        </Grid>
      </Flex>
    </>
  );
};
