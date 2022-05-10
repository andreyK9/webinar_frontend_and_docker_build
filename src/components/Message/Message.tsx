import { addModificator } from 'helpers';
import React from 'react';
import { MessageProps } from './types';

import './Message.scss';

export const Message: React.FC<MessageProps> = ({ type, title, description }) => {
  return (
    <div className='message'>
      <span className={addModificator('message__icon', type)(true)} />

      <div className='message__text'>
        <span className='message__title'>{title}</span>

        <span className='message__description'>{description}</span>
      </div>
    </div>
  );
};
