import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    tagItem: {
      width: 'auto',
      height: '24px',
      border: '1px solid',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: theme.palette.light.main,
      borderColor: theme.palette.white.light,
      borderRadius: '2px',
    },
    title: {
      margin: '2px 0px 2px 8px',
      fontSize: '12px',
      color: theme.palette.dark.main,
    },
    closeIcon: {
      height: '10px',
      width: '10px',
      margin: '7px 4px 7px 4px',
      '& > path': {
        fill: theme.palette.light.light,
        height: '10px',
        width: '10px',
      },
    },
  };
});
