import { tss } from '@styles/theme';

const useStyles = tss.create(({ theme }) => ({
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
}));

export default useStyles;
