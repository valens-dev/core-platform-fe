import { tss } from '@/styles/theme';

const useStyles = tss.create(({ theme }) => ({
  navItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    cursor: 'pointer',
  },
  hoveredNavItem: {
    color: theme.palette.blue.mediumBlue,
    '& .MuiSvgIcon-root': {
      fill: theme.palette.blue.mediumBlue,
    },
    '& path': {
      fill: theme.palette.blue.mediumBlue,
    },
  },
  hoveredIcon: {
    '& path': {
      fill: theme.palette.blue.mediumBlue,
    },
  },
  hoveredText: {
    color: theme.palette.blue.mediumBlue,
  },
  navText: {
    fontSize: '14px',
    color: theme.palette.dark.main,
  },
  icon: {
    width: '20px',
    height: '20px',
  },
  arrowIcon: {
    marginLeft: 'auto',
    '& path': {
      fill: theme.palette.dark.main,
    },
  },
}));

export default useStyles;
