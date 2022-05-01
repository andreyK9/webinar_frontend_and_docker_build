import React from 'react';

import { ReferralField } from 'components/FormFields';
import { useVisible } from 'hooks';

export const ReferralCode: React.FC = () => {
  const { visible, show } = useVisible();

  if (visible) {
    return <ReferralField name='referral' />;
  }
  return <a onClick={show}>Open referral</a>;
};
