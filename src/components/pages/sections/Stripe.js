import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Button } from '@chakra-ui/react';

const current = new Date();

const prices = {
  2: '',
  3: '',
  4: '',
  5: 'price_1KxBX1Ff9B6igBMj92UeEcao',
};

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE}`);

export const Stripe = ({ newMember, coMember }) => {
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
              price: `${prices[current.getMonth() + 1]}`,
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
