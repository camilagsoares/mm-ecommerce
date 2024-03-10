import React from 'react';
import 'tailwindcss/tailwind.css';
import './index.css';

import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { Index } from './pages/Index'
import { Error } from './pages/Error'
import Layout from './Layout'
import { AboutUs } from './pages/AboutUs';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
         <Route path="/about-us" element={<AboutUs />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>

    </Router>
  );
}

export default App;
