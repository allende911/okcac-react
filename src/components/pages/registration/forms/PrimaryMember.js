import React from 'react';
import { Field, Form, Formik } from 'formik';
import { Error } from '../../../utils/Error';
import { Validate } from '../../../utils/validate';
import { Button, Flex, Input, Select, Stack, VStack } from '@chakra-ui/react';

const options = [
  {
    key: 1,
    name: 'astrophotography',
    title: 'I want to learn or share astrophotography.',
  },
  {
    key: 2,
    name: 'telescopes',
    title: 'I want to learn about or borrow telescopes.',
  },
  {
    key: 3,
    name: 'cro',
    title: 'I want my own keys to Cheddar Ranch Observatory.',
  },
  {
    key: 4,
    name: 'community',
    title: 'I want to join a community of astronomers.',
  },
  {
    key: 5,
    name: 'observing',
    title: 'I want to learn the night sky and how to best observe.',
  },
  { key: 6, name: 'otsp', title: 'I love the Okie-Tex Star Party.' },
  {
    key: 7,
    name: 'education',
    title: "I'm interested in science and science education.",
  },
  {
    key: 8,
    name: 'other',
    title: "My reason isn't listed here.",
  },
];

export const PrimaryMember = ({ isJoin }) => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        interest: '',
        joined: new Date().toISOString().slice(0, 10),
      }}
      onSubmit={isJoin}
      validationSchema={Validate}
    >
      {({ errors, touched }) => (
        <Form>
          <Stack spacing={6} marginBottom="12">
            <Stack spacing={4}>
              <Flex flexDirection={['column', 'row']}>
                <VStack marginRight={[0, 1]}>
                  {errors.firstName && touched.firstName ? (
                    <Error>{errors.firstName}</Error>
                  ) : null}
                  <Field
                    as={Input}
                    id="email"
                    name="firstName"
                    type="name"
                    variant="outline"
                    placeholder="First name"
                  />
                </VStack>
                <VStack marginLeft={[0, 1]}>
                  {errors.lastName && touched.lastName ? (
                    <Error>{errors.lastName}</Error>
                  ) : null}
                  <Field
                    as={Input}
                    id="email"
                    name="lastName"
                    type="name"
                    variant="outline"
                    placeholder="Last name"
                  />
                </VStack>
              </Flex>
              <Flex flexDirection={['column', 'row']}>
                <VStack w="full">
                  {errors.email && touched.email ? (
                    <Error>{errors.email}</Error>
                  ) : null}

                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    variant="outline"
                    placeholder="Email address"
                  />
                  <Field
                    as={Select}
                    id="interest"
                    name="interest"
                    variant="outline"
                    color="white"
                    placeholder="I'm joining because..."
                  >
                    {options.map(option => (
                      <option
                        key={option.key}
                        style={{ backgroundColor: 'black' }}
                        color="yellow.900"
                        value={option.name}
                      >
                        {option.title}
                      </option>
                    ))}
                  </Field>
                </VStack>
              </Flex>
            </Stack>

            <Button
              type="submit"
              colorScheme="blue"
              variant="solid"
              isFullWidth
            >
              Get Started
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};
