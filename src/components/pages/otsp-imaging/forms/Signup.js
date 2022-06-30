import React from 'react';
import { Field, Form, Formik } from 'formik';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Flex,
  Input,
  Textarea,
} from '@chakra-ui/react';
import { Error } from '../../../utils/Error';
import { loadStripe } from '@stripe/stripe-js';
import { coValidate } from '../../../utils/validate';

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE}`);
const react = process.env.REACT_APP_REACT;
const basePrice = 100;

export const Signup = () => {
  const handleSubmit = values => {
    let paid = values.quantity * basePrice;
    let registrationInfo = { paid, ...values };
    localStorage.setItem('data', JSON.stringify({ data: registrationInfo }));
    stripePromise.then(stripe => {
      stripe
        .redirectToCheckout({
          customerEmail: values.email,
          lineItems: [
            {
              price: 'price_1L05y7Ff9B6igBMjvex7ou91',
              quantity: values.quantity,
            },
          ],
          mode: 'payment',
          successUrl: `${react}/otsp/imaging/register/success`,
          cancelUrl: `${react}/otsp/imaging/register/error`,
        })
        .then(response => console.log(response.error))
        .catch(error => console.log(error));
    });
  };

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        quantity: 1,
        notes: '',
        products: { id: 2 },
      }}
      onSubmit={handleSubmit}
      validationSchema={coValidate}
    >
      {({ errors, touched }) => (
        <Form>
          <Flex flexDirection="column">
            <Box>
              <FormControl my={4}>
                <FormLabel htmlFor="firstName">First name:</FormLabel>
                {errors.firstName && touched.firstName ? (
                  <Error>{errors.firstName}</Error>
                ) : null}
                <Field
                  as={Input}
                  id="firstName"
                  name="firstName"
                  type="name"
                  variant="outline"
                  placeholder="First name"
                />
              </FormControl>

              <FormControl my={4}>
                <FormLabel htmlFor="lastName">Last name:</FormLabel>

                {errors.lastName && touched.lastName ? (
                  <Error>{errors.lastName}</Error>
                ) : null}
                <Field
                  as={Input}
                  id="lastName"
                  name="lastName"
                  type="name"
                  variant="outline"
                  placeholder="Last name"
                />
              </FormControl>

              <FormControl my={4}>
                <FormLabel htmlFor="email">Email:</FormLabel>

                {errors.email && touched.email ? (
                  <Error>{errors.email}</Error>
                ) : null}
                <Field
                  as={Input}
                  id="email"
                  name="email"
                  type="email"
                  variant="outline"
                  placeholder="Email"
                />
              </FormControl>

              <FormControl my={4}>
                <FormLabel>Quantity:</FormLabel>

                <Field
                  as={Input}
                  id="quantity"
                  name="quantity"
                  type="number"
                  variant="outline"
                ></Field>
              </FormControl>

              <FormControl my={4}>
                <FormLabel htmlFor="comments">Notes:</FormLabel>
                <Field
                  as={Textarea}
                  id="notes"
                  name="notes"
                  type="name"
                  variant="outline"
                  placeholder="If registering for multiple people, please provide their names here."
                />
              </FormControl>
            </Box>
            <Button
              type="submit"
              bgColor="blue.600"
              fontSize="md"
              fontWeight="bold"
              _hover={{ color: 'black', bgColor: 'yellow.600' }}
              isFullWidth
            >
              Checkout
            </Button>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};
