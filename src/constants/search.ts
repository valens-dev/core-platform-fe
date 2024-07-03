export enum ViewMode {
  Grid = 'grid',
  List = 'list',
}

export enum SelectMode {
  LastViewed = 'Last viewed',
  MostInstalled = 'Most installed',
  Newest = 'Newest',
  Oldest = 'Oldest',
}

export const OPTIONS: { value: SelectMode; label: string }[] = [
  { value: SelectMode.LastViewed, label: 'Last viewed' },
  { value: SelectMode.MostInstalled, label: 'Most installed' },
  { value: SelectMode.Newest, label: 'Newest' },
  { value: SelectMode.Oldest, label: 'Oldest' },
];
