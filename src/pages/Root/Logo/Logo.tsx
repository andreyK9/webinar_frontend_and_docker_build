import React from 'react';
import { useMoveToRoot } from './hooks';
import LogoIcon from './logo.svg';

export const Logo: React.FC = () => {
  const moveToRoot = useMoveToRoot();

  return <div onClick={moveToRoot}>{<LogoIcon />}</div>;
};
