import React from 'react';

import './Description.scss';

export const ConfirmDescription: React.FC = ({ children }) => {
  return <p className='description'>{children}</p>;
};
