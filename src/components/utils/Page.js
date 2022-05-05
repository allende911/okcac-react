import React from 'react';
import { Container } from '@chakra-ui/react';
import { pageContainer } from './pageStyles';

export const Page = ({ id, ...props }) => {
  return (
    <Container as="div" id={id} {...pageContainer} {...props}>
      {props.children}
    </Container>
  );
};
