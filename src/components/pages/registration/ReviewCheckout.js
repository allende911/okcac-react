import React from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { DisplayFamily } from './DisplayFamily';

export const ReviewCheckout = ({ isStepBack, newMember, family }) => {
  return (
    <>
      <VStack
        w={['full', 'full', '50%']}
        color="white"
        p={12}
        spacing={6}
        align="flex-start"
        justifyContent="flex-start"
        textAlign="left"
      >
        <Heading as="h2">Review &amp; Checkout</Heading>
        <Text>
          Here's a review of your membership. If everything looks correct,
          clicking submit will redirect you to our Stripe checkout. The OKCAC
          does not store any kind of credit card or financial information.
        </Text>
      </VStack>
      <VStack w={['full', 'full', '50%']} p={12} color="white" spacing={4}>
        <Box border="1px" borderRadius="md" borderColor="gray.700" w="full">
          <VStack
            w="full"
            h="full"
            p={12}
            spacing={4}
            textAlign="left"
            align="left"
          >
            <Heading as="h3" size="md" color="yellow.300">
              Primary member:
            </Heading>
            <Text>
              Name:{' '}
              <strong>
                {newMember.primary.firstName} {newMember.primary.lastName}
              </strong>
            </Text>
            <Divider />
            <Heading as="h3" size="md" color="yellow.300">
              Contact information:
            </Heading>
            <Text>
              Email: <strong>{newMember.primary.email}</strong>
            </Text>
            <Text>
              Phone: <strong>{newMember.primary.phone}</strong>
            </Text>
            <Divider />
            <Heading as="h3" size="md" color="yellow.300">
              Address:
            </Heading>
            <Text>{newMember.primary.extra.address}</Text>
            <HStack>
              <Text>
                {newMember.primary.extra.city} {newMember.primary.extra.state},{' '}
                {newMember.primary.extra.zipcode}
              </Text>
            </HStack>

            <Divider />
            <DisplayFamily family={family} />
            <Divider />
            <ButtonGroup spacing={8}>
              <Button
                onClick={isStepBack}
                colorScheme="black"
                variant="outline"
              >
                Back
              </Button>
              <Button onClick={''} colorScheme="blue">
                Join the Club
              </Button>
            </ButtonGroup>
          </VStack>
        </Box>
      </VStack>
    </>
  );
};
