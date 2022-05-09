import React, { useState } from 'react';
import {
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
  useDisclosure,
} from '@chakra-ui/react';
import { Signup } from './forms/Signup';

export const Checkout = () => {
  const [registrant, setRegistrant] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        bgColor="blue.600"
        fontSize="md"
        fontWeight="bold"
        _hover={{ color: 'black', bgColor: 'yellow.600' }}
        size="lg"
        onClick={onOpen}
      >
        SIGNUP
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent bgColor="gray.900" color="white">
          <ModalHeader bgColor="blue.600" borderTopRadius="md">
            <HStack minW="full" justify="space-between">
              <Image src="/logo.png" h={12} />
            </HStack>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody my={4} m={6} textAlign={{ base: 'center', md: 'left' }}>
            <Signup
              registrant={registrant}
              setRegistrant={setRegistrant}
            ></Signup>
          </ModalBody>

          <ModalFooter>
            <Button bgColor="red.100" color="black" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
