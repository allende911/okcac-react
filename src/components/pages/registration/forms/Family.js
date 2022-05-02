import React from 'react';
import { Field, Form, Formik } from 'formik';
import {
  Button,
  ButtonGroup,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Select,
  Text,
  VStack,
} from '@chakra-ui/react';

export const Family = ({
  isSetFamily,
  isStepTwo,
  family,
  setFamily,
  isStepBack,
}) => {
  return (
    <>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          relation: 'partner',
          id: family.length,
        }}
        onSubmit={isSetFamily}
        enableReinitialize
      >
        <Form width="100%">
          <VStack
            spacing={4}
            py={4}
            px={12}
            align="flex-start"
            color="white"
            minW="100%"
          >
            <HStack spacing={8}>
              <FormControl>
                <FormLabel
                  htmlFor="firstName"
                  fontSize="sm"
                  fontWeight="semibold"
                >
                  First Name
                </FormLabel>

                <Field
                  as={Input}
                  id="firstName"
                  name="firstName"
                  type="text"
                  variant="outline"
                  placeholder="Yuri"
                />
              </FormControl>
              <FormControl>
                <FormLabel
                  htmlFor="lastName"
                  fontSize="sm"
                  fontWeight="semibold"
                >
                  Last Name
                </FormLabel>

                <Field
                  as={Input}
                  id="lastName"
                  name="lastName"
                  type="text"
                  variant="outline"
                  placeholder="Gagarin"
                />
              </FormControl>
              <FormControl>
                <FormLabel
                  htmlFor="relation"
                  fontSize="sm"
                  fontWeight="semibold"
                >
                  Relation
                </FormLabel>
                <Field
                  as={Select}
                  variant="outline"
                  name="relation"
                  id="select-family__relation"
                  color="white"
                  backgroundColor="black"
                  fontWeight="bold"
                >
                  <option value="partner" style={{ color: 'black' }}>
                    Spouse/Partner
                  </option>
                  <option value="parent" style={{ color: 'black' }}>
                    Parent
                  </option>
                  <option value="child" style={{ color: 'black' }}>
                    Child
                  </option>
                  <option value="sibling" style={{ color: 'black' }}>
                    Sibling
                  </option>
                </Field>
              </FormControl>
            </HStack>

            <Button type="submit" mt={8} colorScheme="yellow">
              Add Family
            </Button>
            <Divider />

            <ButtonGroup spacing={8}>
              <Button
                onClick={isStepBack}
                colorScheme="black"
                variant="outline"
              >
                Back
              </Button>
              <Button onClick={isStepTwo} colorScheme="blue">
                Save &amp; Continue
              </Button>
            </ButtonGroup>
          </VStack>
        </Form>
      </Formik>

      <VStack
        width="100%"
        justify="flex-start"
        align="flex-start"
        color="white"
        spacing={8}
        p={12}
      >
        {family.length === 0 ? null : (
          <>
            <Heading size="sm" fontWeight="semibold">
              Family Members:
            </Heading>
            {family.map(member => (
              <HStack key={member.id}>
                <Button
                  size="sm"
                  colorScheme="yellow"
                  variant="outline"
                  onClick={event =>
                    setFamily(
                      family.filter(item => {
                        return item.id !== member.id;
                      })
                    )
                  }
                >
                  Remove
                </Button>
                <Text>
                  {member.firstName} {member.lastName} ({member.relation})
                </Text>
              </HStack>
            ))}
          </>
        )}
      </VStack>
    </>
  );
};
