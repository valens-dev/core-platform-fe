import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    cardList: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr',
      alignItems: 'center',
      padding: '16px',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      border: `1px solid ${theme.palette.white.light}`,
      width: '100%',
      marginBottom: '16px',
    },
    cardImageListWrapper: {
      display: 'flex',
      alignItems: 'center',
    },
    cardImageList: {
      width: '112px',
      height: '61px',
      objectFit: 'cover',
      marginRight: '16px',
    },
    cardTitleList: {
      color: theme.palette.dark.main,
      fontSize: '16px',
    },
    cardCreationList: {
      color: theme.palette.dark.main,
      fontSize: '16px',
      textAlign: 'center',
    },
  };
});
