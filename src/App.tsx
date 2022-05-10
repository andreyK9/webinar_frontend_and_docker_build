import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store';

import { Root } from 'pages/Root';
import { Auth } from 'pages/Auth';

import './App.scss';

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Root />}>
            <Route path='auth/*' element={<Auth />} />

            <Route path='/' element={<Navigate replace to='auth' />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
