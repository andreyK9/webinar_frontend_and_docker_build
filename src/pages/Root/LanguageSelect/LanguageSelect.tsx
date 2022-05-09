import React, { useState } from 'react';

import { Dropdown, DropdownArrow } from 'components/Dropdown';
import { LanguageMenu } from './LanguageMenu';
import { LanguageMenuItem } from './LanguageMenuItem';
import { LanguageItemProps } from './types';
import { RuLanguage } from './LanguageMenu/const';

export const LanguageSelect: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [language, setLanguage] = useState<LanguageItemProps>(RuLanguage);

  return (
    <Dropdown
      onVisibleChange={setVisible}
      content={<LanguageMenu onChange={setLanguage} />}
    >
      <DropdownArrow open={visible}>
        <LanguageMenuItem className='header__language' {...language} />
      </DropdownArrow>
    </Dropdown>
  );
};
