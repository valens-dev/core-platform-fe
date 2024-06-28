import { ITool } from '@/types/tool';

export interface IWorkingAreaProps {
  selectedTools: ITool[];
  setSelectedTools: React.Dispatch<React.SetStateAction<ITool[]>>;
}
