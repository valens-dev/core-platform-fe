import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    price: {
      margin: '10px 0',
      '& span': {
        '&.amount': {
          color: theme.palette.primary.dark,
        },
        '&.period': {
          color: theme.palette.light.dark,
        },
      },
    },
    offerCard: {
      fontSize: '24px',
      '& span': {
        '&.amount': {
          fontSize: '50px',
        },
      },
    },
    comparisonTable: {
      '& span': {
        '&.amount': {
          fontSize: '20px',
        },
        '&.period': {
          fontSize: '14px',
        },
      },
    },
  };
});
