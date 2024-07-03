import { SelectMode } from '@/constants/enums';

export const OPTIONS: { value: SelectMode; label: string }[] = [
  { value: SelectMode.LastViewed, label: 'Last viewed' },
  { value: SelectMode.MostInstalled, label: 'Most installed' },
  { value: SelectMode.Newest, label: 'Newest' },
  { value: SelectMode.Oldest, label: 'Oldest' },
];
