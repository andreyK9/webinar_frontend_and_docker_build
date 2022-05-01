import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Root } from 'pages/Root';
import { Auth } from 'pages/Auth';

export const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Root />}>
        <Route path='auth' element={<Auth />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
