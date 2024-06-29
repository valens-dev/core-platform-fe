import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => ({
  adornedStart: {
    '& > svg': {
      width: '30px',
    },
  },
  errorText: {
    paddingTop: '5px',
    color: theme.palette.error.main,
  },
  textField: {
    width: '100%',
    marginTop: '5px',
  },
}));
