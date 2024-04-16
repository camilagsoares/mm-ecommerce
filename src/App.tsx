import React from 'react';
import 'tailwindcss/tailwind.css';
import './index.css';

import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { Index } from './pages/Index'
import { Error } from './pages/Error'
import Layout from './Layout'
import { AboutUs } from './pages/SobreNos';
import { TrocaDevolucao } from './pages/TrocaDevolucao/TrocaDevolucao'
import { Envio } from './pages/Envio';
import { PoliticaPrivacidade } from './pages/PoliticaPrivacidade';
import { Seguranca } from './pages/Seguranca';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="/sobre-nos" element={<AboutUs />} />
          <Route path="/troca-devolucao" element={<TrocaDevolucao />} />
          <Route path="/envio" element={<Envio />} />
          <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
          <Route path="/seguranca" element={<Seguranca />} />

          <Route path="*" element={<Error />} />
        </Route>
      </Routes>

    </Router>
  );
}

export default App;
