import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => ({
  featureComparisonWrapper: {
    marginTop: '100px',
    textAlign: 'left',
    width: '1165px',
    marginLeft: '50px',
  },
  headerRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  featureComparisonTitle: {
    fontWeight: theme.typography.fontWeight.medium,
    color: theme.palette.primary.dark,
    fontSize: '38px',
    flex: 2,
  },
  tableHeaderPlan: {
    flexBasis: 0,
    flexGrow: 1,
    textAlign: 'center',
  },
  starterPrice: {
    borderBottom: `2px solid ${theme.palette.orange.main}`,
    paddingBottom: '5px',
    width: '118px',
    display: 'inline-block',
  },
  premiumPrice: {
    borderBottom: `2px solid ${theme.palette.primary.normal}`,
    paddingBottom: '5px',
    width: '118px',
    display: 'inline-block',
  },
  enterprisePrice: {
    borderBottom: `2px solid ${theme.palette.green.main}`,
    paddingBottom: '5px',
    width: '118px',
    display: 'inline-block',
  },
  planTitle: {
    fontSize: '24px',
    fontWeight: theme.typography.fontWeight.medium,
  },
}));
