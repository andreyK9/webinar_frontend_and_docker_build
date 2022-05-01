import React, { useState } from 'react';

import { Dropdown, DropdownArrow } from 'components/Dropdown';
import { LanguageMenu } from './LanguageMenu';
import { LanguageMenuItem } from './LanguageMenuItem';
import { LanguageItemProps } from './types';

export const LanguageSelect: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [language, setLanguage] = useState({} as LanguageItemProps);

  return (
    <DropdownArrow open={visible}>
      <LanguageMenuItem {...language} />

      <Dropdown onVisibleChange={setVisible}>
        <LanguageMenu onChange={setLanguage} />
      </Dropdown>
    </DropdownArrow>
  );
};
