import { tss } from '@/styles/theme';

function hexToRgba(hex: string, opacity: number): string {
  const r = Number.parseInt(hex.slice(1, 3), 16);
  const g = Number.parseInt(hex.slice(3, 5), 16);
  const b = Number.parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export const useStyles = tss.create(({ theme }) => {
  const boxShadow = `0px 2px 4px ${hexToRgba(theme.palette.black.main, 0.5)}`;

  return {
    plan: {
      border: `1px solid ${theme.palette.white.light}`,
      borderRadius: '10px',
      padding: '20px',
      width: '348px',
      height: '663px',
      boxShadow,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    starter: {
      borderTop: `8px solid ${theme.palette.orange.main}`,
      paddingTop: '50px',
    },
    premium: {
      borderTop: `8px solid ${theme.palette.primary.normal}`,
    },
    enterprise: {
      borderTop: `8px solid ${theme.palette.green.main}`,
      paddingTop: '50px',
    },
    planTitle: {
      marginTop: '10px',
      marginBottom: '10px',
      fontSize: '38px',
      color: theme.palette.dark.main,
      fontWeight: theme.typography.fontWeight.semiBold,
      lineHeight: '46px',
    },
    description: {
      margin: '10px 0',
      fontSize: '12px',
      color: theme.palette.light.dark,
    },
    price: {
      fontSize: '24px',
      margin: '10px 0',
      '& span': {
        '&.amount': {
          color: theme.palette.primary.dark,
          fontSize: '50px',
        },
        '&.period': {
          color: theme.palette.light.dark,
        },
      },
    },
    mostPopular: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '5px 10px',
      transform: 'translateX(-30%)',
      fontSize: '12px',
      color: theme.palette.primary.normal,
    },
    starIcon: {
      marginRight: '5px',
    },
    ctaButton: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.white.main,
      padding: '10px 20px',
      borderRadius: '5px',
      position: 'absolute',
      bottom: '-40px',
      left: '50%',
      transform: 'translateX(-50%)',
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
      },
    },
    btnPosition: {
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
    },
  };
});
