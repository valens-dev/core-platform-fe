import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => ({
  wrapper: {
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    position: 'relative',
  },
  buttonAndArrowsWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  questionPopUp: {
    position: 'fixed',
    bottom: '15px',
    right: '80px',
  },
  arrowsWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  arrow: {
    cursor: 'pointer',
  },
  blackArrow: {
    '& path': {
      fill: theme.palette.dark.main,
    },
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexGrow: 1,
  },
  templatesTitle: {
    fontSize: '24px',
    color: theme.palette.primary.dark,
    flexGrow: 1,
  },
  templatePosition: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  contentWrapper: {
    display: 'flex',
    gap: '20px',
  },
  navigation: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    borderRight: `1px solid ${theme.palette.light.main}`,
    width: '256px',
    height: '232px',
  },
  selectOptionWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));
