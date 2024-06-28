import { tss } from '@/styles/theme';

const useStyles = tss.create(({ theme }) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 65px 0 65px',
    height: '50px',
    borderBottom: `1px solid ${theme.palette.light.normal}`,
    '* > svg': {
      cursor: 'pointer',
    },
  },
  tabs: {
    flexGrow: 1,
    marginLeft: '30px',
  },
  tab: {
    textTransform: 'none',
    fontSize: '14px',
  },
  rightSide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: '24px',
  },
  userProfileBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    cursor: 'pointer',
  },
  homeIcon: {
    cursor: 'pointer',
    '& path': {
      fill: theme.palette.dark.main,
    },
  },
}));

export default useStyles;
