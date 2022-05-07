import React from 'react';
import { Field, Form, Formik } from 'formik';
import { Error } from '../../../utils/Error';
import { Validate } from '../../../utils/validate';
import { Button, Flex, Input, Select, Stack, VStack } from '@chakra-ui/react';
import { options } from './options';

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
            <Stack spacing={1}>
              <Flex flexDirection={['column', 'row']}>
                <VStack marginRight={[0, 1]} my={{ base: 1, md: 0 }}>
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
                <VStack marginLeft={[0, 1]} my={{ base: 1, md: 0 }}>
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
                  {errors.interest && touched.interest ? (
                    <Error>{errors.interest}</Error>
                  ) : null}
                  <Field
                    as={Select}
                    id="interest"
                    name="interest"
                    variant="outline"
                    placeholder="I'm interested in joining because..."
                  >
                    {options.map(option => (
                      <option
                        key={option.key}
                        style={{ backgroundColor: 'black' }}
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
