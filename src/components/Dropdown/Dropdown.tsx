import React from 'react';

import { DropdownProps } from './types';
import { useDropdownState } from './hooks';
import { useAddHendlerFor } from 'hooks';
import { addModificator, mergeClasses } from 'helpers';

import './Dropdown.scss';

const dropdownContentBy = addModificator('dropdown__content', 'open');

export const Dropdown: React.FC<DropdownProps> = ({
  content,
  className,
  defaultVisible,
  onVisibleChange,
  children,
}) => {
  const { visible, toggle } = useDropdownState(defaultVisible);
  useAddHendlerFor(visible, onVisibleChange);

  return (
    <div className={mergeClasses('dropdown', className)} onClick={toggle}>
      {children}

      <div className='dropdown__content-wrapper'>
        <div className={dropdownContentBy(visible)}>{content}</div>
      </div>
    </div>
  );
};
