import React from 'react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from '@chakra-ui/react';

export const AlertMessage = ({
  description,
  alertType,
  title,
  expires,
  setOpen,
}) => {
  const d = new Date().toISOString().slice(0, 10);

  return (
    expires >= d && (
      <Alert status={alertType}>
        <AlertIcon />
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{description}</AlertDescription>
        <CloseButton marginLeft="auto" onClick={() => setOpen(false)} />
      </Alert>
    )
  );
};
