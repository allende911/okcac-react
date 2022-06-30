import React from 'react';
import {
  Box,
  Button,
  HStack,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Heading,
  Stack,
  Text,
  VStack,
  Divider,
} from '@chakra-ui/react';
import { Stripe } from '../sections/Stripe';
import { Comember } from './forms/Comember';

export const Checkout = ({
  isOpen,
  onClose,
  newMember,
  coMember,
  setCoMember,
  isCoMember,
  setSuccess,
  price,
}) => {
  if (!newMember) {
    return;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="5xl">
      <ModalOverlay />
      <ModalContent bgColor="gray.900" color="white">
        <ModalHeader bgColor="blue.600">
          <HStack minW="full" justify="space-between">
            <Image src="./logo.png" h={12} />
          </HStack>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody my={4} m={6} textAlign={{ base: 'center', md: 'left' }}>
          <Heading size="lg" fontWeight="bold">
            Welcome, {newMember.firstName}!
          </Heading>
          <Stack
            spacing={4}
            my={8}
            flexDirection={{ base: 'column', md: 'row' }}
            justifyContent="center"
            alignItems="center"
          >
            <Box width={{ base: '80%', md: '50%' }}>
              <Text>
                If you'd like to designate a spouse or partner as a co-member,
                please enter their name. Otherwise, that's it!
              </Text>
            </Box>
            <Box width="20em" height="10em">
              {!coMember && <Comember isCoMember={isCoMember} />}
              {coMember && (
                <VStack spacing={4}>
                  <Heading size="md" fontWeight="semibold" color="yellow.300">
                    Primary Member:
                  </Heading>

                  <Heading size="md">
                    {newMember.firstName} {newMember.lastName}
                  </Heading>

                  <Heading size="md" fontWeight="semibold" color="yellow.300">
                    Co-Member:
                  </Heading>

                  <Heading size="md">
                    {coMember.firstName} {coMember.lastName}
                  </Heading>
                  <Button variant="ghost" onClick={() => setCoMember(null)}>
                    Edit
                  </Button>
                </VStack>
              )}
            </Box>
          </Stack>
          <Divider pt={6} />
          <VStack mt={8}>
            <Stripe
              setSuccess={setSuccess}
              newMember={newMember}
              coMember={coMember}
              price={price}
            />
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button bgColor="red.100" color="black" mr={3} onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
