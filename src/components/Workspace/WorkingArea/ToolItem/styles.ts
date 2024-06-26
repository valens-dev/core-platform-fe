import { tss } from '@styles/theme';

const useStyles = tss.create(({ theme }) => ({
  toolsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
  },
  tool: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    '& .toolName': {
      fontSize: '10px',
      color: theme.palette.light.light,
    },
  },
  toolName: {
    fontSize: '10px',
    color: theme.palette.primary.dark,
  },
  toolIcon: {
    width: '40px',
    height: '40px',
  },
}));

export default useStyles;
