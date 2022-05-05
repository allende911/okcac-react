import React from 'react';

export const Submit = ({ family, newMember }) => {
  const submission = () => {
    let combine = { newMember, family };
    let submit = { data: { ...combine } };
    console.log(submit);
    return submit;
  };

  return <>{JSON.stringify(submission())}</>;
};
