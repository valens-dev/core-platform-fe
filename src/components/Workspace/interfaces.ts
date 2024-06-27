import { ITool } from '@utils/interfaces';

export interface IToolItemProps {
  tools: ITool[];
  onDelete: (tool: ITool) => void;
}

export interface IMenuProps {
  menu: { id: number; label: string; isOpen: boolean }[];
  handleArrowClick: (id: number) => void;
  handlePlusClick: (id: number) => void;
  handleToolClick: (
    tool: string,
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  ) => void;
}

export interface IMenuHeaderProps {
  label: string;
  index: number;
  handleArrowClick: () => void;
}
export interface IMenuItemProps {
  menu: { id: number; label: string; isOpen: boolean };
  index: number;
  handleArrowClick: (id: number) => void;
  handlePlusClick: (id: number) => void;
  handleToolClick: (
    tool: string,
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  ) => void;
}

export interface IMenuContentProps {
  handleToolClick: (
    tool: string,
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  ) => void;
}

export interface IToolItemProps {
  tools: ITool[];
}

export interface IWorkingAreaProps {
  selectedTools: ITool[];
  setSelectedTools: React.Dispatch<React.SetStateAction<ITool[]>>;
}
