import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    body: 'Lato, Helvetica, sans-serif',
    heading: 'Lexend Deca, Helvetica, sans-serif',
  },
  fontWeights: {
    thin: '100',
    regular: '400',
    bold: '600',
    black: '900',
  },
  colors: {
    yellow: {
      50: '#FEFCE6',
      100: '#FDF8BA',
      200: '#FBF38D',
      300: '#FAEE61',
      400: '#F9EA34',
      500: '#F7E508',
      600: '#C6B706',
      700: '#948905',
      800: '#635C03',
      900: '#312E02',
    },
    blue: {
      50: '#ECF3F9',
      100: '#C9DDEE',
      200: '#A6C7E2',
      300: '#84B1D7',
      400: '#619BCC',
      500: '#3E85C1',
      600: '#326A9A',
      700: '#255074',
      800: '#19354D',
      900: '#0C1B27',
    },
    gray: {
      50: '#F2F2F2',
      100: '#DBDBDB',
      200: '#C4C4C4',
      300: '#ADADAD',
      400: '#969696',
      500: '#808080',
      600: '#666666',
      700: '#4D4D4D',
      800: '#333333',
      900: '#1A1A1A',
    },
  },
});
