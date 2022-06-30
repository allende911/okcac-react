import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export const Apod = () => {
  const [apod, setApod] = useState();
  const [hide, setHide] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA}`
      )
      .then(response => setApod(response));
  }, []);

  const handleHidden = () => setHide(!hide);

  return (
    <Box
      color="white"
      minH="80vh"
      maxH="80vh"
      p={10}
      minW="full"
      backgroundImage={!apod ? null : `url(${apod.data.hdurl})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      borderBottom="4px"
      borderTop="4px"
      borderColor="yellow.300"
    >
      <Box>
        {!apod ? (
          <>
            <Heading size="lg">Loading APOD...</Heading>

            <Spinner size="lg" my={8} />
          </>
        ) : (
          <>
            <Icon
              as={hide === false ? FaEyeSlash : FaEye}
              mx={4}
              my={2}
              w={8}
              h={8}
              onClick={handleHidden}
              color={hide === false ? 'white' : 'gray.500'}
              float={['none', 'none', 'left']}
            />
            <Flex
              flexDirection="column"
              align="flex-start"
              justify="center"
              m={['2', '5', '10']}
              display={hide === true ? 'none' : null}
            >
              <Heading size="lg" m={[1, 2, 4]} textShadow="1px 1px 2px black">
                NASA Astronomy Photo of the Day
              </Heading>
              <Heading size="md" m={[1, 2, 4]} textShadow="1px 1px 2px black">
                {apod.data.title}
              </Heading>
              <Heading size="md" m={[1, 2, 4]} textShadow="1px 1px 2px black">
                {apod.data.caption}
              </Heading>
              <Text
                mx={[1, 2, 4]}
                textAlign="left"
                minH="25vh"
                w={['full', 'full', '60%']}
                lineHeight="taller"
                noOfLines="8"
                textShadow="1px 1px 2px black"
              >
                {apod.data.explanation}
              </Text>
              <a
                href="https://apod.nasa.gov/apod/"
                target="_blank"
                rel="noreferrer"
              >
                <Button colorScheme="blue" m={4}>
                  See more
                </Button>
              </a>
            </Flex>
          </>
        )}
      </Box>
    </Box>
  );
};
