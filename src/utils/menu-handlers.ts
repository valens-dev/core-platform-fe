import { type Dispatch, type MouseEvent, type SetStateAction } from 'react';

import { type ITool } from '@/types/tool';

interface IMenuPosition {
  top: number;
  left: number;
}

export function handleMenuOpen(
  event: MouseEvent<HTMLElement>,
  index: number,
  setMenuPosition: Dispatch<SetStateAction<IMenuPosition | undefined>>,
  setHoveredNavItem: Dispatch<SetStateAction<number | undefined>>,
): void {
  const position = event.currentTarget.getBoundingClientRect();
  setMenuPosition({
    top: position.top + window.scrollY - 60,
    left: position.right + window.scrollX - 70,
  });
  setHoveredNavItem(index);
}

export function handleMenuClose(
  isMouseOverMenu: boolean,
  setMenuPosition: Dispatch<SetStateAction<IMenuPosition | undefined>>,
  setHoveredNavItem: Dispatch<SetStateAction<number | undefined>>,
): void {
  if (isMouseOverMenu) {
    setMenuPosition(undefined);
    setHoveredNavItem(undefined);
  }
}

export function handleOptionClick(
  option: number,
  setSelectedOptions: Dispatch<SetStateAction<number[]>>,
): void {
  setSelectedOptions((prev) => {
    if (prev.includes(option)) {
      return prev.filter((item) => {
        return item !== option;
      });
    }
    return [...prev, option];
  });
}

export function handleArrowClick(
  id: number,
  setMenus: Dispatch<
    SetStateAction<{ id: number; label: string; isOpen: boolean }[]>
  >,
): void {
  setMenus((prevMenus) => {
    return prevMenus.map((menu) => {
      return menu.id === id ? { ...menu, isOpen: !menu.isOpen } : menu;
    });
  });
}

export function handlePlusClick(
  id: number,
  menu: { id: number; label: string; isOpen: boolean }[],
  setMenus: Dispatch<
    SetStateAction<{ id: number; label: string; isOpen: boolean }[]>
  >,
): void {
  const newMenu = {
    id: menu.length + 1,
    label: 'Lorem ipsum',
    isOpen: true,
  };
  const updatedMenus = [...menu];
  const menuIndex = updatedMenus.findIndex((item) => {
    return item.id === id;
  });
  updatedMenus.splice(menuIndex + 1, 0, newMenu);
  setMenus(updatedMenus);
}

export function handleToolClick(
  tool: string,
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
  selectedTools: ITool[],
  setSelectedTools: Dispatch<SetStateAction<ITool[]>>,
): void {
  setSelectedTools([...selectedTools, { tool, icon }]);
}
