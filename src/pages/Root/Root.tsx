import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from 'pages/Root/Header';
import { Footer } from 'pages/Root/Footer';

export const Root: React.FC = () => {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
};
