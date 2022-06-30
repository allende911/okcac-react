import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { Page } from '../../UI/Page';
import { Apod } from '../sections/Apod';
import { Hero } from '../../UI/Hero';
import { Checkout } from './Checkout';

export const ImagingSession = () => {
  return (
    <Page
      id="astrophotography-seminar"
      background={`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)),
    url("/otsp.jpg")`}
      backgroundAttachment="fixed"
      backgroundSize="cover"
      backgroundPosition="center right fixed"
      backgroundRepeat="no-repeat"
    >
      <Hero
        heading="2022 Astrophotography Session"
        text="Add on to your Okie-Tex 2022 experience with a two-day immersive astrophotography seminar. Sunday, September 25 and Monday, September 26, join hosts Jon Talbot and Trevor Jones as they give us an in-depth look into PixInsight and widefield astrophotography. "
      >
        <Text>
          The seminar is $100 per person and does not include any other Okie-Tex
          registration fees.
        </Text>
        <Text>
          This seminar is only available to Okie-Tex 2022 registrants.
        </Text>
        <Checkout />
        <Flex
          flexDirection="row"
          justify="flex-start"
          align="flex-start"
          m="12"
          color="white"
          minH="30em"
          shadow="md"
          borderRadius="md"
        >
          <Box p={{ base: '4', md: '8' }} my="8" textAlign="center">
            <Heading as="h3" size="lg" my="8">
              Meet the Instructors
            </Heading>
            <Flex
              flexDirection={{ base: 'column', md: 'row' }}
              alignItems="stretch"
            >
              <Box
                maxW={{ sm: 'full', md: '50%' }}
                shadow="dark-lg"
                align="left"
                borderRadius="md"
                bgColor="gray.900"
                mx={{ md: 2, lg: 4 }}
              >
                <Box
                  bgImage="/jon-talbot.jpg"
                  w="100%"
                  minH="20em"
                  borderTopRadius="md"
                  backgroundSize="cover"
                  backgroundPosition="top center"
                />
                <Box p={4}>
                  <Heading as="h3" size="md" fontWeight="semibold" p="2">
                    Day One: Jon Talbot
                  </Heading>
                  <Text p="2">PixInsight - The Basics</Text>
                  <Text p="2">
                    The first day of the seminar will be an all-day introduction
                    to PixInsight. Jon will cover all that you need to know to
                    get going with the software and will set you well on your
                    way to becoming proficient at processing your
                    astrophotography. Jon provides sample data to follow along
                    with during the course.
                  </Text>
                  <Text p="2">
                    This is Jon's fourth year of doing these astrophotography
                    sessions at the Okie-Tex Star Party.
                  </Text>
                </Box>
              </Box>
              <Box
                maxW={{ sm: 'full', md: '50%' }}
                shadow="dark-lg"
                align="left"
                borderRadius="md"
                bgColor="gray.900"
                mx={{ md: 2, lg: 4 }}
              >
                <Box
                  bgImage="/trevor-jones.jpg"
                  w="100%"
                  minH="20em"
                  borderTopRadius="md"
                  backgroundSize="cover"
                  backgroundPosition="top center"
                />
                <Box p={4}>
                  <Heading as="h3" size="md" fontWeight="semibold" p="2">
                    Day Two: Trevor Jones
                  </Heading>
                  <Text p="2">Widefield Astrophotography</Text>
                  <Text p="2">
                    Day two will be taught by Trevor Jones of AstroBackyard.
                  </Text>
                  <Text p="2">
                    This will be Trevor's first year teaching at the Okie-Tex
                    Star Party, but Trevor is a seasoned teacher, lecturer and
                    broadcaster. Trevor runs an incredibly popular YouTube
                    channel where he details product reviews, astrophotography
                    tutorials, and night sky events.
                  </Text>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Flex>
        {/* </Box> */}
      </Hero>
    </Page>
  );
};
