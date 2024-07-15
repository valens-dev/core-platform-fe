import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    infoSection: {
      padding: '24px',
      border: `1px solid ${theme.palette.light.normal}`,
      borderRadius: '4px',
      marginBottom: '20px',
      width: '100%',
    },
    imageSection: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      padding: '24px',
    },
    imageBlock: {
      width: '164px',
      height: 'auto',
    },
    inputField: {
      width: '100%',
    },
    form: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: '15px',
    },
    label: {
      minWidth: '150px',
      marginRight: '5px',
    },
    input: {
      padding: '5px 10px',
      height: '35px',
    },
    technologyType: {
      marginBottom: '10px',
    },
  };
});
