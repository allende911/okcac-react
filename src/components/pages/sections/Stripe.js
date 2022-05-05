import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Button } from '@chakra-ui/react';
import { Comember } from '../registration/forms/Comember';

const current = new Date();
const prices = {
  2: 'price_1KVNZIFf9B6igBMjIl6bCRgN',
  3: 'price_1Kj7GtFf9B6igBMjMGiyVrZo',
  4: 'price_1KUZhxFf9B6igBMjp0aqFSpp',
  5: 'price_1Kvqb9Ff9B6igBMj9Jv42kOL',
};

const stripePromise = loadStripe(
  'pk_test_51KTx32Ff9B6igBMjGFFnQpoISxB0W19RSwvkgPBmJvAUnJYdbuSCOpLNDElE8YBTITTWkUsv3IBNv19xnK5krXoj00xIpghiQV'
);

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
          successUrl: 'http://localhost:3000/success',
          cancelUrl: 'http://localhost:3000/error',
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
