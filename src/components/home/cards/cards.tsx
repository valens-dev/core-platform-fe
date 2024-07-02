import { Grid } from './grid';
import { List } from './list';

interface ICardsProps {
  viewMode: string;
}

export function Cards({ viewMode }: ICardsProps) {
  return viewMode === 'grid' ? <Grid /> : <List />;
}
