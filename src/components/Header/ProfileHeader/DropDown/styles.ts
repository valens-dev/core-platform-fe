import { tss } from '@styles/theme';

const useStyles = tss.create(({ theme }) => ({
  menu: {
    marginTop: '20px',
    marginLeft: '-30px',
    borderRadius: '8px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    minWidth: '200px',
  },
  menuItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    padding: '10px 20px',
    paddingBottom: '30px',
  },
  logoutMenu: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    borderTop: `1px solid ${theme.palette.light.normal}`,
  },
  userName: {
    fontSize: '16px',
    cursor: 'pointer',
    color: theme.palette.dark.main,
  },
  emailTitle: {
    fontSize: '14px',
    color: theme.palette.light.grey,
  },
}));

export default useStyles;
