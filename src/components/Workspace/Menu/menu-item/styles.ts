import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => ({
  menuClosed: {
    borderBottom: `1px solid ${theme.palette.light.mainGrey}`,
    width: '371px',
    boxSizing: 'border-box',
  },
  menuOpen: {
    border: `1px solid ${theme.palette.light.mainGrey}`,
    borderRadius: '4px',
    width: '371px',
    boxSizing: 'border-box',
  },
  plusContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    borderTop: `1px solid ${theme.palette.light.mainGrey}`,
  },
  plusButton: {
    alignSelf: 'flex-end',
  },
  icon: {
    width: '20px',
    height: '20px',
  },
}));
