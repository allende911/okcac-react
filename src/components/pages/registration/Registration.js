import React, { useState } from 'react';
import { Box, Container, Stack } from '@chakra-ui/react';
import { pageContainer } from '../home/homeStyles';
import { registrationBox } from '../home/heroStyles';
import { Nav } from '../sections/Nav';
import { RegisterHero } from './RegisterHero';
import { StepOne } from './StepOne';
import { StepTwo } from './StepTwo';
import { ReviewCheckout } from './ReviewCheckout';

export const Registration = props => {
  const [step, setStep] = useState(1);
  const [newMember, setNewMember] = useState();
  const [family, setFamily] = useState([]);

  const handleStepOne = values => {
    setNewMember(values);
    setStep(prevStep => prevStep + 1);
  };

  const handleFamily = (values, { resetForm }) => {
    setFamily(prevState => [values, ...prevState]);
    resetForm();
  };

  const handleStepTwo = () => {
    setStep(prevStep => prevStep + 1);
  };

  const handleStepBack = () => {
    setStep(prevStep => prevStep - 1);
  };

  return (
    <Container as="section" id="home" {...pageContainer}>
      <Box {...registrationBox} borderBottom="4px" borderColor="yellow.300">
        <Nav />
        <RegisterHero />
      </Box>
      <Stack
        flexDirection={['column', 'column', 'row']}
        align="flex-start"
        justifyContent="flex-start"
        textAlign="left"
        borderBottom="4px"
        borderColor="blue.600"
        minH="100vh"
      >
        {step === 1 && (
          <StepOne isStepOne={handleStepOne} newMember={newMember} />
        )}
        {step === 2 && (
          <StepTwo
            isStepTwo={handleStepTwo}
            isSetFamily={handleFamily}
            family={family}
            setFamily={setFamily}
            isStepBack={handleStepBack}
            setStep={setStep}
            step={step}
          />
        )}
        {step === 3 && (
          <ReviewCheckout
            newMember={newMember}
            family={family}
            isStepBack={handleStepBack}
          />
        )}
      </Stack>
    </Container>
  );
};
