import React from 'react';

import { Message } from '../Message';
import { MessageProps } from '../types';

export const ErrorMessage: React.FC<
  Pick<MessageProps, 'description' | 'title'>
> = props => {
  return <Message iconSrc='' {...props} />;
};
