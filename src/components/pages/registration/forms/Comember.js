import React from 'react';
import { Field, Form, Formik } from 'formik';
import { Button, Input, VStack } from '@chakra-ui/react';
import { coValidate } from '../../../utils/validate';
import { Error } from '../../../utils/Error';

export const Comember = ({ isCoMember }) => {
  return (
    <Formik
      initialValues={{ firstName: '', lastName: '' }}
      onSubmit={isCoMember}
      validationSchema={coValidate}
    >
      {({ errors, touched }) => (
        <Form>
          <VStack flexDirection="column" width="75%" spacing={2} margin="auto">
            {errors.firstName && touched.firstName ? (
              <Error>{errors.firstName}</Error>
            ) : null}
            <Field as={Input} name="firstName" placeholder="First name" />
            {errors.lastName && touched.lastName ? (
              <Error>{errors.lastName}</Error>
            ) : null}
            <Field as={Input} name="lastName" placeholder="Last name" />
            <Button type="submit" isFullWidth colorScheme="blue">
              Add Co-Member
            </Button>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};
