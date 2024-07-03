import { Box } from '@mui/material';

import { HeaderCell } from '@/components/home/cards/list/header-cell/header-cell';

import { CardList } from './card-list';

import { useStyles } from './styles';

export function List(): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Box className={classes.listWrapper}>
      <HeaderCell />
      <CardList />
    </Box>
  );
}
