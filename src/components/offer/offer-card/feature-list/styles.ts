import { tss } from '@/styles/theme';

const useStyles = tss.create(({ theme }) => ({
  featureList: {
    borderTop: `1px solid ${theme.palette.light.lightGrey}`,
    listStyle: 'none',
    padding: '0',
    margin: '20px 0',
    flexBasis: 0,
    flexGrow: 1,
    '& li': {
      display: 'flex',
      alignItems: 'center',
      margin: '10px 0',
    },
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  titleFeature: {
    fontFamily: theme.typography.fontFamily.secondary,
    fontWeight: theme.typography.fontWeight.semiBold,
    lineHeight: '20px',
    fontSize: '16px',
    color: theme.palette.primary.dark,
  },
  textFeature: {
    fontFamily: theme.typography.fontFamily.secondary,
    fontWeight: theme.typography.fontWeight.regular,
    fontSize: '16px',
  },
  checkIcon: {
    marginRight: '8px',
    width: '16px',
    height: '16px',
  },
}));

export default useStyles;
