import React, { useState } from 'react';
import { Page } from '../../utils/Page';
import { Benefits } from './Benefits';
import { Hero } from '../sections/Hero';
import { More } from '../../utils/More';
import { PrimaryMember } from './forms/PrimaryMember';
import { Apod } from '../sections/Apod';
import { Checkout } from './Checkout';
import { useDisclosure } from '@chakra-ui/react';
import { MemberPrice } from '../sections/MemberPrice';
import { Text } from '@chakra-ui/react';

export const Registration = props => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newMember, setNewMember] = useState();
  const [coMember, setCoMember] = useState();

  const handleJoin = values => {
    setNewMember(values);
    onOpen(!isOpen);
  };

  const handleAddCo = values => {
    setCoMember(values);
  };

  return (
    <Page id="join-the-club">
      <Hero heading={'Join today, gaze tonight.'} image={'sadr-wide.jpg'}>
        <Text>
          Club dues are $36 per year, pro-rated your first year. A new
          membership is currently $<MemberPrice />.
        </Text>
        <PrimaryMember isJoin={handleJoin} />
        <More text={'View membership benefits'} />

        <Checkout
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          newMember={newMember}
          isCoMember={handleAddCo}
          coMember={coMember}
          setCoMember={setCoMember}
        />
      </Hero>

      <Benefits />
      <Apod />
    </Page>
  );
};
