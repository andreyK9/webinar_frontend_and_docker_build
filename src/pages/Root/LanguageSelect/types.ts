import { MouseEventHandler, ReactElement } from 'react';

export interface LanguageItemProps {
  icon: ReactElement<any, any>;
  name?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export interface LanguageMenuProps {
  onChange: (language: LanguageItemProps) => void;
}
