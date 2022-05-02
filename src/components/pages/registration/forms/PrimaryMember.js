import React from 'react';
import { Field, Form, Formik } from 'formik';
import { Persist } from 'formik-persist';
import * as validate from '../../../utils/validate';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  VStack,
} from '@chakra-ui/react';

export const PrimaryMember = ({ isStepOne }) => {
  return (
    <Formik
      initialValues={{
        primary: {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          extra: { address: '', city: '', state: '', zipcode: '' },
        },
      }}
      onSubmit={isStepOne}
    >
      {({ errors, touched }) => (
        <Form width="100%">
          <Persist name="newMember" isSessionStorage={true} />
          <VStack
            spacing={8}
            p={4}
            align="flex-start"
            color="white"
            minW="100%"
          >
            <VStack align="left" spacing={8} px="8">
              <HStack spacing={8}>
                <FormControl
                  isInvalid={!!errors.firstName && touched.firstName}
                  isRequired
                >
                  <FormLabel
                    htmlFor="firstName"
                    fontSize="sm"
                    fontWeight="semibold"
                  >
                    First Name
                  </FormLabel>
                  <FormErrorMessage mb={2}>{errors.firstName}</FormErrorMessage>
                  <Field
                    as={Input}
                    id="firstName"
                    name="primary.firstName"
                    type="text"
                    variant="flushed"
                    placeholder="John"
                    validate={validate.firstName}
                  />
                </FormControl>

                <FormControl
                  isInvalid={!!errors.lastName && touched.lastName}
                  isRequired
                >
                  <FormLabel
                    htmlFor="lastName"
                    fontSize="sm"
                    fontWeight="semibold"
                  >
                    Last Name
                  </FormLabel>
                  <FormErrorMessage>{errors.lastName}</FormErrorMessage>
                  <Field
                    as={Input}
                    id="lastName"
                    name="primary.lastName"
                    type="text"
                    variant="flushed"
                    placeholder="Glenn"
                    validate={validate.lastName}
                  />
                </FormControl>
              </HStack>

              <FormControl
                isInvalid={!!errors.email && touched.email}
                isRequired
              >
                <FormLabel htmlFor="email" fontSize="sm" fontWeight="semibold">
                  Email Address:
                </FormLabel>
                <FormErrorMessage>{errors.email}</FormErrorMessage>
                <Field
                  as={Input}
                  id="email"
                  name="primary.email"
                  type="email"
                  variant="flushed"
                  placeholder="example@okcastroclub.com"
                  validate={validate.email}
                />
              </FormControl>
              <FormControl
                isInvalid={!!errors.phone && touched.phone}
                isRequired
              >
                <FormLabel htmlFor="phone" fontSize="sm" fontWeight="semibold">
                  Phone Number :
                </FormLabel>
                <FormErrorMessage>{errors.phone}</FormErrorMessage>
                <Field
                  as={Input}
                  id="phone"
                  name="primary.phone"
                  type="text"
                  variant="flushed"
                  placeholder="(405) 867-5309"
                  validate={validate.phone}
                />
              </FormControl>
              <FormControl>
                <FormLabel
                  htmlFor="address"
                  fontSize="sm"
                  fontWeight="semibold"
                >
                  Street Address
                </FormLabel>

                <Field
                  as={Input}
                  id="address"
                  name="primary.extra.address"
                  type="text"
                  variant="flushed"
                  placeholder="111 Lunar Avenue"
                />
              </FormControl>
              <HStack>
                <FormControl>
                  <FormLabel htmlFor="city" fontSize="sm" fontWeight="semibold">
                    City
                  </FormLabel>

                  <Field
                    as={Input}
                    id="city"
                    name="primary.extra.city"
                    type="text"
                    variant="flushed"
                    placeholder="Pluto City"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel
                    htmlFor="state"
                    fontSize="sm"
                    fontWeight="semibold"
                  >
                    State
                  </FormLabel>

                  <Field
                    as={Input}
                    id="state"
                    name="primary.extra.state"
                    type="text"
                    variant="flushed"
                    placeholder="Oklahoma"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel
                    htmlFor="zipcode"
                    fontSize="sm"
                    fontWeight="semibold"
                  >
                    Zipcode
                  </FormLabel>

                  <Field
                    as={Input}
                    id="zipcode"
                    name="primary.extra.zipcode"
                    type="text"
                    variant="flushed"
                    placeholder="74955"
                  />
                </FormControl>
              </HStack>
              <Box py={4}>
                <Button type="submit" colorScheme="blue" variant="solid">
                  Save &amp; Continue
                </Button>
              </Box>
            </VStack>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};
