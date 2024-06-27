import WorkspaceBackground from '@assets/images/backgroundWorkspace.png';
import { tss } from '@styles/theme';

const useStyles = tss.create(({ theme }) => ({
  rightSide: {
    flex: 1,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  buttons: {
    position: 'absolute',
    top: '20px',
    right: '65px',
    display: 'flex',
    gap: '10px',
    zIndex: 2,
  },
  buttonOutlined: {
    color: theme.palette.light.grey,
    borderColor: theme.palette.light.grey,
    '&:hover': {
      borderColor: theme.palette.light.grey,
    },
  },
  buttonVerification: {
    backgroundColor: theme.palette.primary.dark,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  backgroundContainer: {
    position: 'fixed',
    right: 0,
    width: '50%',
    height: 'calc(100% - 60px)',
    backgroundImage: `url(${WorkspaceBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: 0,
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    overflowY: 'auto',
  },
  selectedTools: {
    marginTop: '20px',
    '& ul': {
      paddingLeft: '20px',
    },
    '& li': {
      marginBottom: '5px',
    },
  },
}));

export default useStyles;
