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

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE}`);

export const Signup = () => {
  const handleSubmit = values => {
    localStorage.setItem('data', JSON.stringify({ data: values }));
    stripePromise.then(stripe => {
      stripe
        .redirectToCheckout({
          lineItems: [
            {
              price: 'price_1KxCQIFf9B6igBMjMoQSpQLs',
              quantity: values.quantity,
            },
          ],
          mode: 'payment',
          successUrl: 'http://okcastroclub.org/otsp/imaging/register/success',
          cancelUrl: 'http://okcastroclub.org/otsp/imaging/register/error',
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
        quantity: 1,
        comments: '',
      }}
      onSubmit={handleSubmit}
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
                  id="email"
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
                  id="email"
                  name="lastName"
                  type="name"
                  variant="outline"
                  placeholder="Last name"
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
                <FormLabel htmlFor="comments">Comments:</FormLabel>
                <Field
                  as={Textarea}
                  id="email"
                  name="comments"
                  type="name"
                  variant="outline"
                  placeholder="Comments"
                />
              </FormControl>
            </Box>
            <Button type="submit">Checkout</Button>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};
