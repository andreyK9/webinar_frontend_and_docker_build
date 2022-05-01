import React, { useState } from 'react';

import { ReferralField } from 'components/FormFields';

export const ReferralCode: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return visible ? (
    <ReferralField name='referral' />
  ) : (
    <a onClick={() => setVisible(true)}>Open referral</a>
  );
};
