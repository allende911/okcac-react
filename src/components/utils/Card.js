import React from 'react';
import {
  Box,
  Heading,
  Icon,
  Image,
  LinkBox,
  LinkOverlay,
  Text,
} from '@chakra-ui/react';

export const Card = ({
  date,
  icon,
  image,
  index,
  heading,
  link,
  text,
  ...props
}) => {
  return (
    <LinkBox as="article" key={index} alignSelf="stretch">
      <Box
        px={[4, 8, 12]}
        py={[4, 4, 8]}
        textAlign="center"
        minW="5em"
        maxW="20em"
        minH="28em"
        m={[1, 2, 4]}
        borderRadius="md"
        {...props}
      >
        <LinkOverlay href={link}>
          {icon && (
            <Icon
              as={icon}
              w="24"
              h="24"
              color="blue.600"
              _hover={{ color: 'yellow.100' }}
              p="4"
              m="6"
              display={!icon ? 'none' : 'initial'}
            />
          )}
          <Heading size="md" my="2">
            {heading}
          </Heading>
          {image && (
            <Box>
              <Image src={image} w="100%" />
            </Box>
          )}
          <Text fontWeight="bold" py={2}>
            {date}
          </Text>
          <Text noOfLines={5}>{text}</Text>
        </LinkOverlay>
      </Box>
    </LinkBox>
  );
};
