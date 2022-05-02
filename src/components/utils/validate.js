export const firstName = value => {
  let error;
  if (!value) {
    error = 'Required';
  } else if (value.length > 15) {
    error = 'Must be 15 characters or less';
  } else if (value.length < 2) {
    error = 'Must be greater than 2 characters';
  } else if (!/^[A-Z]'?[- a-zA-Z]+$/i.test(value)) {
    error = 'Cannot contain non-standard characters!';
  }
  return error;
};

export const lastName = value => {
  let error;
  if (!value) {
    error = 'Required';
  } else if (value.length > 20) {
    error = 'Must be 20 characters or less';
  } else if (value.length < 2) {
    error = 'Must be greater than 2 characters';
  } else if (!/^[A-Z]'?[- a-zA-Z]+$/i.test(value)) {
    error = 'Cannot contain non-standard characters!';
  }
  return error;
};

export const email = value => {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
};

export const phone = value => {
  let error;
  if (!/^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/i.test(value)) {
    error = 'Please use the (123) 222-3333 number format';
  }
  return error;
};

export const liability = value => {
  let error;
  if (!value) {
    error = 'Required';
  } else if (value === false) {
    error = 'You must accept the liability release.';
  }
  return error;
};
