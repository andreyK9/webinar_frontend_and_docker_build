import React from 'react';

import './AuthTitle.scss';

export const AuthTitle: React.FC = ({ children }) => {
  return <h2 className='auth-title'>{children}</h2>;
};
