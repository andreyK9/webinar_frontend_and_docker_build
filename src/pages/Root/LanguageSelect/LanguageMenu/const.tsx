import React from 'react';
import { Ru, MC, TR, ES } from '../flags';
import { LanguageItemProps } from '../types';

export const RuLanguage = {
  icon: <Ru />,
  name: 'RU',
};

export const LANGUAGES: LanguageItemProps[] = [
  RuLanguage,
  {
    icon: <MC />,
    name: 'MC',
  },
  {
    icon: <TR />,
    name: 'TR',
  },
  {
    icon: <ES />,
    name: 'ES',
  },
];
