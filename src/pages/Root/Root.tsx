import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from 'pages/Root/Header';
import { Footer } from 'pages/Root/Footer';

import './Root.scss';

export const Root: React.FC = () => (
  <div className='my-root'>
    <Header />

    <Outlet />

    <Footer />
  </div>
);
