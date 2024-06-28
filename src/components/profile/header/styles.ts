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
  rightSide: {
    width: '97%',
    marginLeft: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'right',
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
  },
}));

export default useStyles;
