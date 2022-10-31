
import {ChakraProvider, ColorModeScript} from '@chakra-ui/react'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode='light'></ColorModeScript>
    <App />

    </ChakraProvider>
  </React.StrictMode>
);
 

reportWebVitals();
