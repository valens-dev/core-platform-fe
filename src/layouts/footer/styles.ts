import { tss } from '@/styles/theme';

const useStyles = tss.create(({ theme }) => ({
  wrapper: {
    padding: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '20px',
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    gap: '60px',
  },
  logos: {
    display: 'flex',
    alignItems: 'center',
    gap: '30px',
    '& > svg': {
      width: '30px',
      height: '37px',
    },
  },
  line: {
    height: '1px',
  },
  notes: {
    display: 'flex',
    width: '100%',
    '& > div': {
      width: '50%',
    },
  },
  footNote: {
    color: theme.palette.light.dark,
  },
  secondaryLinks: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'right',
    '& > p': {
      color: theme.palette.light.grey,
    },
  },
}));

export default useStyles;
