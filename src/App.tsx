import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store';

import { Root } from 'pages/Root';
import { Auth } from 'pages/Auth';

export const App: React.FC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Root />}>
          <Route index element={<Auth />} />

          <Route path='auth' element={<Auth />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
