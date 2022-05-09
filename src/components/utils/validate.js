import * as Yup from 'yup';

// const phoneRegEx = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/i;
export const Validate = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too few characters.')
    .max(12, 'Too many characters.')
    .matches(/^[A-Za-z/s.'-]+$/, 'No special characters or white space.')
    .required('Name required to continue.'),
  lastName: Yup.string()
    .min(2, 'Too few characters.')
    .max(20, 'Too many characters.')
    .matches(/^[A-Za-z/s.'-]+$/, 'No special characters or white space.')
    .required('Name required to continue.'),
  email: Yup.string()
    .email('Invalid email.')
    .required('Email required to continue.'),
  interest: Yup.string().required('Pick one'),
  // phone: Yup.string()
  //   .matches(phoneRegEx, '(405) 232-4980 format.')
  //   .required('Phone number required.'),
});

export const coValidate = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too few characters.')
    .max(12, 'Too many characters.')
    .matches(/^[A-Za-z/s.'-]+$/, 'No special characters or white space.')
    .required('Name required to continue.'),
  lastName: Yup.string()
    .min(2, 'Too few characters.')
    .max(20, 'Too many characters.')
    .matches(/^[A-Za-z/s.'-]+$/, 'No special characters or white space.')
    .required('Name required to continue.'),
});
