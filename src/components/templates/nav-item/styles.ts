import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    navItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      cursor: 'pointer',
      width: '256px',
      height: '40px',
      paddingLeft: '15px',
      paddingRight: '10px',
      '&:hover': {
        backgroundColor: theme.palette.blue.lightBlue,
        color: theme.palette.blue.mediumBlue,
        '& .css-kjes4z-MuiTypography-root-navText': {
          color: theme.palette.blue.mediumBlue,
        },
        '& svg ': {
          '& path': {
            fill: theme.palette.blue.mediumBlue,
          },
        },
      },
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
      width: '14px',
      height: '14px',
    },
    arrowIcon: {
      marginLeft: 'auto',
      '& path': {
        fill: theme.palette.dark.main,
      },
    },
  };
});
