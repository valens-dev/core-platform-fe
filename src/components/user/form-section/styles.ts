import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {return {
  infoSection: {
    padding: '10px',
    border: `1px solid ${theme.palette.light.normal}`,
    borderRadius: '4px',
    marginBottom: '20px',
    width: '100%',
  },
  formSection: {
    padding: '10px',
  },
  imageSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    paddingTop: '15px',
  },
  image: {
    width: '218px',
    height: 'auto',
  },
  basicInformation: {
    marginBottom: '15px',
  },
  inputField: {
    width: '100%',
  },
  form: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '15px',
  },
  label: {
    minWidth: '150px',
    marginRight: '5px',
  },
  input: {
    padding: '5px 10px',
    height: '35px',
  },
}});
