import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {return {
  addButton: {
    marginLeft: '10px',
  },
  sectionInterest: {
    padding: '10px',
    border: `1px solid ${theme.palette.light.normal}`,
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'space-between',
  },
}});
