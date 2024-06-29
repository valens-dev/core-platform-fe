import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => ({
  wrapper: {
    width: '100%',
    height: '122px',
    display: 'flex',
    borderBottom: `2px solid ${theme.palette.light.main}`,
    '* > p, svg': {
      cursor: 'pointer',
    },
  },
  logo: {
    width: '15%',
    padding: '60px 60px',
  },
  links: {
    width: '60%',
    display: 'flex',
    alignItems: 'center',
    paddingTop: '40px',
    gap: '40px',
  },
  buttonsAndLinks: {
    width: '500px',
    display: 'flex',
    flexDirection: 'column',
    padding: '10px 30px 4px',
    marginRight: '35px',
  },
  auth: {
    display: 'flex',
    justifyContent: 'right',
    gap: '20px',
    color: theme.palette.light.grey,
    marginTop: '5px',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '12px',
    marginTop: '21px',
    marginBottom: '30px',
    '& > button': {
      height: '40px',
    },
    '& > button > p': {
      fontWeight: theme.typography.fontWeight.bold,
    },
  },
  buttonStartFreeTrial: {
    width: '169px',
  },
  buttonOurOffers: {
    width: '114px',
  },
  bookADemoBtn: {
    color: theme.palette.primary.dark,
  },
}));
