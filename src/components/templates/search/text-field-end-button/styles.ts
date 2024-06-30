import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
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
  };
});
