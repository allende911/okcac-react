import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './components/utils/theme';
import App from './App';
import '@fontsource/lexend-deca/100.css';
import '@fontsource/lexend-deca/400.css';
import '@fontsource/lexend-deca/600.css';
import '@fontsource/lexend-deca/900.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/900.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>
);
