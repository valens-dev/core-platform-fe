import { ITool } from '@/types/tool';

export interface IToolItemProps {
  tools: ITool[];
  onDelete: (tool: ITool) => void;
}
