import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    addButton: {
      marginLeft: '10px',
    },
    sectionInterest: {
      padding: '24px',
      border: `1px solid ${theme.palette.light.normal}`,
      borderRadius: '4px',
      display: 'flex',
      flexDirection: 'column',
    },
    titleAndAddButton: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    note: {
      display: 'flex',
      '& .MuiTypography-root MuiTypography-body2, & .MuiTypography-root': {
        color: theme.palette.light.dark,
      },
    },
    inputField: {
      width: '400px',
    },
    submitButton: {
      display: 'none',
    },
  };
});
