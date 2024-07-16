import { tss } from '@/styles/theme';

export const useStyles = tss.create(() => {return {
  wrapper: {
    padding: '20px',
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    marginTop: '15px',
  },
  profilePicture: {
    marginRight: '10px',
  },
  name: {
    fontSize: '24px',
  },
}});
