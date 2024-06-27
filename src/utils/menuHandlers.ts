import { Dispatch, MouseEvent, SetStateAction } from 'react';
import { ITool } from './interfaces';

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

export const handleArrowClick = (
  id: number,
  setMenus: Dispatch<
    SetStateAction<{ id: number; label: string; isOpen: boolean }[]>
  >
) => {
  setMenus((prevMenus) =>
    prevMenus.map((menu) =>
      menu.id === id ? { ...menu, isOpen: !menu.isOpen } : menu
    )
  );
};

export const handlePlusClick = (
  id: number,
  menu: { id: number; label: string; isOpen: boolean }[],
  setMenus: Dispatch<
    SetStateAction<{ id: number; label: string; isOpen: boolean }[]>
  >
) => {
  const newMenu = {
    id: menu.length + 1,
    label: 'Lorem ipsum',
    isOpen: true,
  };
  const updatedMenus = [...menu];
  const menuIndex = updatedMenus.findIndex((menu) => menu.id === id);
  updatedMenus.splice(menuIndex + 1, 0, newMenu);
  setMenus(updatedMenus);
};

export const handleToolClick = (
  tool: string,
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
  selectedTools: ITool[],
  setSelectedTools: Dispatch<SetStateAction<ITool[]>>
) => {
  setSelectedTools([...selectedTools, { tool, icon }]);
};
