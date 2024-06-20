import { MouseEvent } from 'react';

export interface ISearchForm {
  search: string;
}

export interface INavItemProps {
  icon: React.ElementType;
  navTitle: string;
  hasArrow: boolean;
  index: number;
  handleMenuOpen: (event: React.MouseEvent<HTMLElement>, index: number) => void;
  handleMenuClose: () => void;
  hoveredNavItem: number | null;
}

export interface IMenuOptionsProps {
  menuPosition: { top: number; left: number } | null;
  selectedOptions: number[];
  handleOptionClick: (option: number) => void;
  handleMenuClose: () => void;
  setIsMouseOverMenu: (isMouseOver: boolean) => void;
}

export interface ITemplateContentProps {
  menuPosition: { top: number; left: number } | null;
  selectedOptions: number[];
  handleOptionClick: (option: number) => void;
  handleMenuClose: () => void;
  setIsMouseOverMenu: (isMouseOver: boolean) => void;
  hoveredNavItem: number | null;
  handleMenuOpen: (event: MouseEvent<HTMLElement>, index: number) => void;
  navData: { icon: React.ElementType; navTitle: string; hasArrow: boolean }[];
}

export interface ITemplate {
  imgSrc: string;
  label: string;
  link: string;
}

