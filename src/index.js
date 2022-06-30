import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { theme } from './components/utils/theme';
import App from './App';

import '@fontsource/inter/100.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/800.css';
import '@fontsource/inter/900.css';
import { Registration } from './components/pages/registration/Registration';
import { Success } from './components/pages/registration/Success';
import { OTSPSuccess } from './components/pages/otsp-imaging/OTSPSuccess';
import { Error } from './components/pages/registration/Error';
import { NotFound } from './components/pages/404';
import { ImagingSession } from './components/pages/otsp-imaging/ImagingSession';
import { Apod } from './components/pages/sections/Apod';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ChakraProvider theme={theme} resetCSS>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="join" element={<Registration />} />
        <Route path="join/success" element={<Success />} />
        <Route path="join/error" element={<Error />} />
        <Route path="otsp/imaging/register" element={<ImagingSession />} />
        <Route path="otsp/imaging/register/success" element={<OTSPSuccess />} />
        <Route path="otsp/imaging/register/error" element={<Error />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Apod />
      {/* <Footer /> */}
    </BrowserRouter>
  </ChakraProvider>
);
