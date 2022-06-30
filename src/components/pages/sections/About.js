import React from 'react';
import { Card } from '../../UI/Card';
import { Box, Flex, Heading, Spinner } from '@chakra-ui/react';
import { Segment } from '../../UI/Segment';
import { FaUserAstronaut, FaRocket, FaCloudMoon } from 'react-icons/fa';

export const About = ({ about }) => {
  return !about ? (
    <Spinner />
  ) : (
    <Segment id="about" className="postTop" as="section">
      <Heading size="lg" p="2">
        {about.title}
      </Heading>
      <Flex
        flexDirection={{ md: 'row', lg: 'row' }}
        flexWrap="wrap"
        justifyContent="space-around"
        alignSelf="stretch"
        border="1px"
        shadow="dark-lg"
        borderRadius="lg"
        borderColor="gray.800"
        bgColor="gray.900"
      >
        {about.aboutCard.map((card, index) => (
          <Box key={index} maxW={{ base: 'full', md: '30%' }}>
            <Card
              heading={card.heading}
              icon={
                index === 0
                  ? FaUserAstronaut
                  : index === 1
                  ? FaRocket
                  : index === 2
                  ? FaCloudMoon
                  : ''
              }
              text={card.text}
              bgColor="gray.900"
            />
          </Box>
        ))}
      </Flex>
    </Segment>
  );
};
