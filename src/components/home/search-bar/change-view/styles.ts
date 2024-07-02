import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    iconWrapper: {
      display: 'flex',
      gap: '8px',
      marginLeft: 'auto',
    },
    activeIcon: {
      backgroundColor: theme.palette.light.main,
    },
  };
});
