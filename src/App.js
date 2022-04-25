import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
//import Layouts from './components/Layouts';
import Navbar from './pages/Navbar';
import First from './pages/First';
import Second from './pages/Second';
import Second2 from './pages/Second2';
import Third from './pages/Third';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Navbar />
        <First />
        <Second />
        <Second2 />
        <Third />
        <Contact />
        <Footer />
      </ChakraProvider>
    </>
  );
}

export default App;
