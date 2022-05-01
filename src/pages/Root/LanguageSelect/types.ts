export interface LanguageItemProps {
  iconSrc: string;
  name?: string;
}

export interface LanguageMenuProps {
  onChange: (language: LanguageItemProps) => void;
}
