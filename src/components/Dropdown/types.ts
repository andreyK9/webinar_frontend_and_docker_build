import { ReactElement } from 'react';

export interface DropdownProps {
  visible?: boolean;
  defaultVisible?: boolean;
  className?: string;
  onVisibleChange?: (visible: boolean) => void;
  content: string | ReactElement<any, any> | null;
}

export interface DropdownArrowProps {
  open?: boolean;
}
