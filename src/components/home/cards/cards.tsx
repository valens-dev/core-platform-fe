import { ViewMode } from '@/constants/search';

import { Grid } from './grid';
import { List } from './list';

interface ICardsProps {
  viewMode: ViewMode;
}

export function Cards({ viewMode }: ICardsProps): React.ReactNode {
  return viewMode === ViewMode.Grid ? <Grid /> : <List />;
}
