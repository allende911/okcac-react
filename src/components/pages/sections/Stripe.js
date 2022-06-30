import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Button } from '@chakra-ui/react';

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE}`);

export const Stripe = ({ newMember, coMember, price }) => {
  const submission = JSON.stringify({
    data: { ...newMember, additionalMember: coMember },
  });

  const handleClick = event => {
    localStorage.setItem('data', submission);
    stripePromise.then(stripe => {
      stripe
        .redirectToCheckout({
          customerEmail: newMember.email,
          billingAddressCollection: 'required',
          lineItems: [
            {
              price: price.stripeID,
              quantity: 1,
            },
          ],
          mode: 'payment',
          successUrl: 'https://okcastroclub.org/join/success',
          cancelUrl: 'https://okcastroclub.org/join/error',
        })
        .then(response => console.log(response.error))
        .catch(error => console.log(error));
    });
  };

  return (
    <Button
      colorScheme="black"
      size="lg"
      border="2px"
      borderColor="white"
      onClick={handleClick}
    >
      Become a Member
    </Button>
  );
};
