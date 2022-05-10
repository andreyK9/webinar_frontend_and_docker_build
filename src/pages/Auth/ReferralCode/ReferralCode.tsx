import React from 'react';
import { useTranslation } from 'react-i18next';

import { ReferralField } from 'components/FormFields';
import { useVisible } from 'hooks';

import './ReferralCode.scss';

export const ReferralCode: React.FC = () => {
  const { t } = useTranslation();
  const { visible, show } = useVisible();

  if (visible) {
    return <ReferralField name='referral' label={t('referral partner code')} />;
  }
  return (
    <a className='referral-code' onClick={show}>
      {t('i have referral code')}
    </a>
  );
};
