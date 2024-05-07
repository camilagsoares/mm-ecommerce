import React from 'react';
import 'tailwindcss/tailwind.css';
import './index.css';

import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { Index } from './pages/Index/Index'
import { Error } from './pages/Error/Error'
import Layout from './Layout'
import CommonLayout from './CommonLayout';
import { AboutUs } from './pages/SobreNos/SobreNos';
import { TrocaDevolucao } from './pages/TrocaDevolucao/TrocaDevolucao'
import { Envio } from './pages/Envio/Envio';
import { PoliticaPrivacidade } from './pages/PoliticaPrivacidade/PoliticaPrivacidade';
import { Seguranca } from './pages/Seguranca/Seguranca';
import { DetailsProduct } from './pages/DetailsProduct/DetailsProduct';
import {Cart}  from './pages/Cart/Cart';

function App() {
  return (

    <Router>
      <Routes>
      <Route path="/" element={<Layout children={<Index />} />}>
          <Route index element={<Index />} />
        </Route>
        <Route path="/sobre-nos" element={<CommonLayout><AboutUs /></CommonLayout>} />
        <Route path="/troca-devolucao" element={<CommonLayout><TrocaDevolucao /></CommonLayout>} />
        <Route path="/envio" element={<CommonLayout><Envio /></CommonLayout>} />
        <Route path="/politica-privacidade" element={<CommonLayout><PoliticaPrivacidade /></CommonLayout>} />
        <Route path="/seguranca" element={<CommonLayout><Seguranca /></CommonLayout>} />
        <Route path="*" element={<CommonLayout><Error /></CommonLayout>} />
        <Route path='/produto/:id' element={<CommonLayout><DetailsProduct /></CommonLayout>}></Route>
        <Route path='/carrinho' element={<CommonLayout><Cart /></CommonLayout>}></Route>
    </Routes>
    </Router>
  );
}

export default App;
