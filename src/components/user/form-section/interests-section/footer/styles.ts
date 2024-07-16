import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    footer: {
      display: 'flex',
      flexWrap: 'nowrap',
      width: 'auto',
      marginTop: '10px',
      gap: '20px',
    },
    line: {
      borderBottom: '1px solid',
      width: '100%',
      marginBottom: '10px',
      borderColor: theme.palette.grey.main,
    },
  };
});
