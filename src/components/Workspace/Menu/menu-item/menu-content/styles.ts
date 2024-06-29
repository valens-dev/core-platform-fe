import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => ({
  menuContent: {
    padding: '10px',
    borderTop: `1px solid ${theme.palette.light.mainGrey}`,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '8px',
    flexWrap: 'wrap',
  },
  menuButton: {
    textTransform: 'none',
    padding: '4px 8px',
    fontSize: '12px',
    color: theme.palette.dark.main,
    borderColor: theme.palette.dark.main,
    '&:hover': {
      borderColor: theme.palette.dark.main,
    },
  },
}));
