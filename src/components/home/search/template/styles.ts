import { tss } from '@/styles/theme';

const useStyles = tss.create(({ theme }) => ({
  wrapper: {
    background: theme.palette.white.main,
    width: '228px',
    height: '240px',
    border: `1px solid ${theme.palette.light.normalGrey}`,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '2px',
  },
  imgWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  description: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    padding: '8px',
  },
  link: {
    fontSize: '14px',
  },
  image: {
    width: '100%',
    height: 'auto',
  },
}));

export default useStyles;
