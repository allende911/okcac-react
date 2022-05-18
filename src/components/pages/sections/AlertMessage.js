import React from 'react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';

export const AlertMessage = ({ description, status, title, setOpen }) => {
  return (
    <Alert status={status}>
      <AlertIcon />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
      {/* <CloseButton marginLeft="auto" onClick={() => setOpen(false)} /> */}
    </Alert>
  );
};
