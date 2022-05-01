import React from 'react';
import { useMoveToRoot } from './hooks';

export const Logo: React.FC = () => {
  const moveToRoot = useMoveToRoot();

  return <div onClick={moveToRoot}>Logo</div>;
};
