import { MouseEvent, Dispatch, SetStateAction } from 'react';

interface IMenuPosition {
  top: number;
  left: number;
}

export const handleMenuOpen = (
  event: MouseEvent<HTMLElement>,
  index: number,
  setMenuPosition: Dispatch<SetStateAction<IMenuPosition | null>>,
  setHoveredNavItem: Dispatch<SetStateAction<number | null>>
) => {
  const position = event.currentTarget.getBoundingClientRect();
  setMenuPosition({
    top: position.top + window.scrollY - 60,
    left: position.right + window.scrollX - 70,
  });
  setHoveredNavItem(index);
};

export const handleMenuClose = (
  isMouseOverMenu: boolean,
  setMenuPosition: Dispatch<SetStateAction<IMenuPosition | null>>,
  setHoveredNavItem: Dispatch<SetStateAction<number | null>>
) => {
  if (isMouseOverMenu) {
    setMenuPosition(null);
    setHoveredNavItem(null);
  }
};

export const handleOptionClick = (
  option: number,
  setSelectedOptions: Dispatch<SetStateAction<number[]>>
) => {
  setSelectedOptions((prev) => {
    if (prev.includes(option)) {
      return prev.filter((item) => item !== option);
    } else {
      return [...prev, option];
    }
  });
};
