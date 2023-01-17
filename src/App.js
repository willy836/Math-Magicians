import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Header from './components/Header';
import Home from './components/Home';
import Quote from './components/Quote';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Calculator" element={<Calculator />} />
      <Route path="/Quote" element={<Quote />} />
    </Routes>
  </>
);
export default App;
