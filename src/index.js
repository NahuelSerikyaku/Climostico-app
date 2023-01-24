import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Inicio from './routes/Inicio';
import Contacto from './routes/Contacto';
import Notfound from './routes/Notfound';
import Clima from './routes/Clima';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>     
  <Routes>
    <Route path='/' element={<App />}>
      <Route index element={<Inicio/>}/>     
      <Route path='contacto' element={<Contacto/>}/>
      <Route path='clima' element={<Clima/>}/>     
      <Route path='*' element={<Notfound/>}/>      
    </Route>
  </Routes>  
  </BrowserRouter>
);
