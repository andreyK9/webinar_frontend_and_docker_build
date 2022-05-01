import { ReactElement } from 'react';

export interface DropdownProps {
  visible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
  content: string | ReactElement<any, any> | null;
}

export interface DropdownArrowProps {
  open?: boolean;
}
