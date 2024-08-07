import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    wrapper: {
      padding: '20px 65px 20px 65px',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      border: `1px solid ${theme.palette.light.normal}`,
      background: theme.palette.light.main,
      '& .css-2ehmn7-MuiInputBase-root-MuiOutlinedInput-root': {
        height: '40px',
      },
    },
    textfield: {
      background: theme.palette.white.main,
    },
    textfieldEndButton: {
      height: '24px',
      width: '100px',
      border: `1px solid ${theme.palette.light.normal}`,
    },
    chipsWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '20px',
    },
    chip: {
      borderRadius: '2px',
      cursor: 'pointer',
      padding: '4px 10px 4px 10px',
      '& > p': {
        fontSize: '12px',
      },
    },
    positionText: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      alignSelf: 'center',
      fontSize: '20px',
      fontWeight: theme.typography.fontWeight.medium,
    },
  };
});
